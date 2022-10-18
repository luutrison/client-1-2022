import { notification } from "ant-design-vue";
import _api_v1 from "~~/api/v1/api";
import _notifier from "@/components/page/ui/notifier/notifier";
import axios from "axios";


const configLang = {
  "vi": {
    local: "VN",
    path: "/translate/vi-VN.json"
  }
}







//Kiem tra ngon ngu co the duoc ho tro va su dung
const checkLang = (lang, languageSupport) => {
  //Kiem tra xem la ngon ngu nay duoc tu trinh duyet co dung trong language support khong,
  //kiem tra ca local eg us, vn, uk.. cong voi ca language eg: vi, en, cn
  //Sap xep theo thu tu uu tien cua ngon ngu

  try {
    var langCanUse = [];

    const checkLangItem = (item: string) => {
      const itemParse = item.toLowerCase();
      var langCheck = "",
      localCheck = "";

      if (
        languageSupport.find((x) => {
          if (
            x.lang.toLowerCase().search(itemParse) > -1 ||
            itemParse.search(x.lang.toLowerCase()) > -1
          ) {
            langCheck = x.lang;
            return true;
          }
        })
      ) {
        if (
          item.length > 2 &&
          languageSupport.find(
            (x) => {
              if(
                x.local.toLowerCase().search(itemParse) > -1 ||
              itemParse.search(x.local.toLowerCase()) > -1
              ){
                localCheck = x.local;
                return true;
              }
            }
              
          )
        ) {
          langCanUse.push(langCheck);
        } else {
          langCanUse.push(langConfig.defaultLang);
        }
      }
    };

    if (Array.isArray(lang)) {
      lang.forEach((langitem: string) => {
        checkLangItem(langitem);
      });
    } else if (typeof lang === "string") {
      checkLangItem(lang);
    }

    if (langCanUse.length > 0) {
      return {
        check: true,
        lang: langCanUse[0],
      };
    } else {
      return {
        check: true,
        lang: langConfig.defaultLang,
      };
    }
  } catch (error) {
    return {
      check: false,
      lang: langConfig.defaultLang,
    };
  }
};

const langConfig = {
  currentLang: "",
  defaultLang: "vi",
  langSupport: [],
  message: {},
  async changeLang(lang: string) {
    const langChange = await checkLang(lang, langConfig);

    if (langChange) {
      const languageTranslate = await getLanguageTranlate(langChange.lang);

      langConfig.message = languageTranslate;
    }
  },

  async init() {
    //Nay danh sach cac ngon ngu duoc ho tro boi he thong

    const languageSupported = await getSupportLanguage();

    //Nay ngon ngu ma trinh duyet xac thuc duoc
    //Neu nguoi dung su dung trinh duyet va trinh duyet ho tro cho xem ngon ngu cua nguoi dung
    if (typeof navigator !== "undefined" && navigator.languages) {
      const checkLanguage = await checkLang(
        navigator.languages,
        languageSupported
      );

      if (checkLanguage.check) {
        const translatePack = await getLanguageTranlate(checkLanguage.lang);

        langConfig.message = translatePack;

        return langConfig;
      }
      //Neu khong xac dinh duoc ngon ngu ma trinh duyet tu xac thuc thi de ngon ngu mac dinh
    }
  },
  sub(code) {
    return langConfig.message[0]?.translate[code];
  },
};

const getSupportLanguage = async () => {
  const langsupport:any = await axios.get(_api_v1("/language/support")).catch((error) => {
    notification.open({
      message: "Error",
      description: error.response.statusText,
      ...(_notifier.error as any),
    });
  });

  console.log( langsupport);
  
  try {
    const langSupport = JSON.parse(langsupport.data as any);
    if (langSupport.length > 0) {
      return langSupport;
    }
  } catch (error) {
    console.error(error);
  }
};

const getLanguageTranlate = async (language) => {
  const languageInit:any = await axios.get(_api_v1("/language/init/" + language)).catch((error) => {
    notification.open({
      message: "Error",
      description: error.response.statusText,
      ...(_notifier.error as any),
    });
  });

  try {
    const langPack = JSON.parse(languageInit.data as any);
    return langPack;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export { langConfig };
