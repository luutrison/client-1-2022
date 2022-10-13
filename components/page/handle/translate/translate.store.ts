import { notification } from "ant-design-vue";
import axios from "axios";
import { reactive } from "vue";
import _api_v1 from "~~/api/v1/api";
import _notifier from "../../ui/notifier/notifier";

//Check language can be used
const checkLang = (langcheck, langSupport, context) => {
  return new Promise((resolve, reject) => {
    try {
      var langCanUse = [];

      const checkLangItem = (item: string) => {
        const itemParse = item.toLowerCase();

        if (
          langSupport.find(
            (x) =>
              x.lang.toLowerCase().search(itemParse) ||
              itemParse.search(x.lang.toLowerCase())
          )
        ) {
          if (
            item.length > 2 &&
            langSupport.find(
              (x) =>
                x.local.toLowerCase().search(itemParse) ||
                itemParse.search(x.local.toLowerCase())
            )
          ) {
            langCanUse.push(itemParse);
          } else {
            langCanUse.push(itemParse);
          }
        }
      };

      if (Array.isArray(langcheck)) {
        langcheck.forEach((langitem: string) => {
          checkLangItem(langitem);
        });
      } else if (typeof langcheck === "string") {
        checkLangItem(langcheck);
      }

      if (langCanUse.length > 0) {
        context.currentLang = langCanUse[0];
        resolve(true);
      } else {
        context.currentLang = context.defaultLang;
        reject(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

//Get langsetting defaults
const langInit = (context) => {
  axios
    .get(_api_v1("/language/init/" + context.currentLang))
    .then((response) => {
      try {
        context.message = JSON.parse(response.data);
        console.log("mess",context.message);
        console.log("response",response);
      } catch (error) {
        console.error(error);
      }
    })
    .catch((error) => {
      notification.open({
        message: "Error",
        description: error.response.statusText,
        ...(_notifier.error as any),
      });
    });
};

const translateReactive = reactive({
  currentLang: "",
  defaultLang: "vi",
  langSupport: [],
  message: {},
  changeLang(lang: string) {
    console.log(lang, this.message);
    
    checkLang(lang, this.langSupport, this).then((response) => {
      if (response) {
        langInit(this)
      }
    }).catch((error) => {console.error(error);
    });
  },
  init() {
    const innitLang = () => {
      if (typeof navigator !== "undefined" && navigator.languages) {
        checkLang(navigator.languages, this.langSupport, this)
          .then((res) => {
            console.log(res);
            if (res) {
              langInit(this);
            }
          })
          .catch((err) => {
            console.error("Innit Language Error");
          });
      } else {
        this.currentLang = this.defaultLang;
      }
    };
    //Get language support
    if (this.langSupport.length === 0) {
      axios
        .get(_api_v1("/language/support"))
        .then((response) => {
          try {
            const langSupport = JSON.parse(response.data);
            this.langSupport = langSupport;
            if (this.langSupport.length > 0) {
              innitLang();
            }
          } catch (error) {
            console.error(error);
          }
        })
        .catch((error) => {
          notification.open({
            message: "Error",
            description: error.response.statusText,
            ...(_notifier.error as any),
          });
        });
    } else {
      innitLang();
    }
  },
  sub(code) {
    return this.message[0]?.translate[code];
  },
});

export default translateReactive;
