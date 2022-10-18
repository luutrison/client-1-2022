type ICssDeclare = {
  [key in keyof CSSStyleDeclaration]?: ICssDeclare | string | number;
};

type ICssType<T> = {
  [key in keyof T | string]?: ICssType<T> | string | number | ICssDeclare;
};

const classCustom: ICssType<ICssDeclare> = {
  topbar: {
    fontSize: 60,
    height: 30,
    "& .bigTitle": {
      fontSize: 30,
    },
    "&#id": {
      "&.name": {
        padding: 0,
      },
      "& .sub": {
        padding: 2,
        "& .title": {
          margin: 0,
        },
      },
    },
  },
};

import { icssTranslate } from "./icssTranslate";
import config from "../underscore.config";

function Random(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const SortObject = () => {
  // console.log(Object.entries(classCustom));
  try {
    var cssText = "";

    const cssObject = classCustom;

    var varibleMap = {};

    const checkNameN1 = (name) => {
      try {
        name = [...name.trim()];

        var nameRequire = [".", "#"];
        var exep = [];

        name.forEach((n, i) => {
          const index = nameRequire.findIndex((x) => x === n);
          if (index > -1) {
            if (name[i + 1] === " ") {
              exep.push(n);
            }
            exep.push(n);
          }
        });

        if (exep.length === 0) {
          return "." + name.join("");
        } else if (exep.length === 1) {
          return name.join("");
        } else if (exep.length > 1) {
          console.error("CSS name invalid to generate " + name.join(""));
          console.log(exep);
          return "";
        }
      } catch (error) {
        console.error(error);
      }
    };

    const checkNameN2 = (name) => {
      try {
        const nameRequire = ["&"];
        const skip = ["&", " "];
        var arrName = [...name];
        var index = nameRequire.findIndex((x) => {
          return arrName.find((g) => g === x);
        });
        console.log(arrName, index);

        if (index > -1) {
          var nameOut = "";

          arrName.forEach((e, i) => {
            if (i >= index && !skip.find((x) => x === e)) {
              nameOut += e;
            }
          });
          if (arrName[index + 1] === " ") {
            return " " + nameOut;
          } else {
            return nameOut;
          }
        }
        else{
          return name
        }

        const i = arrName.findIndex((e) => e === "&");
      } catch (error) {
        console.error(error);
      }
    };

    const mapNameObject = (arrName) => {
      try {
        var prevName = "";
        var nameOut = "";
        var arrOut = [];
        arrName.forEach((e: string, i: number) => {
          var name = checkNameN1(e);
          console.log(name, "name n1");

          nameOut += checkNameN2(name);
          arrOut.push(checkNameN2(name));
        });

        return arrOut;
      } catch (error) {
        console.error(error);
      }
    };

    //SubTree Of Object
    const subTreeObject = (elm, arrKey) => {
      try {
        var cssout = "";
        var cssObj = "";

        for (const key in elm) {
          var secondKey = [...arrKey];
          if (Object.prototype.hasOwnProperty.call(elm, key)) {
            const element = elm[key];
            if (typeof element === "object") {

              secondKey.push(key);
              subTreeObject(element, secondKey);
            } else {
              console.log("key", key);
              cssout += `${icssTranslate[key]}:${element};`;
              checkTwice(elm);
            }
          }

         
          

          cssObj = `${mapNameObject(secondKey).join("")}{${cssout}}`;
        }
        cssText += cssObj;
      } catch (error) {
        console.error(error);
      }
    };

    const excuteWay = {
      "&": () => {},
    };

    const checkTwice = (element) => {
      // const match = Object.keys(excuteWay).find((x) => key.search(x) > -1);
      // if (match) {
      //   console.log(match);
      // }
    };

    for (const key in cssObject) {
      var keyarr = []

   

      if (Object.prototype.hasOwnProperty.call(cssObject, key)) {
        const element = cssObject[key];
        keyarr.push(key)
        var arrKey = mapNameObject(keyarr);

        console.log(arrKey, keyarr, key, "secondKey");

        subTreeObject(element, arrKey);
      }
    }

    console.log(cssText);
  } catch (error) {
    console.error(error);
  }
};

export { SortObject };
