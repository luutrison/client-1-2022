const _config = {
  name: "son",
};

const checkArray = (arr: any) => {
  try {
    if (
      Array.isArray(arr) &&
      arr.find((x) => {
        return x.toString().trim() !== "" && x.toString().trim() !== undefined
      })
    ) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

const checkString = (str: string) => {
  try {
    if (typeof str === "string" && str.trim() !== "" && str !== undefined) {
      return true;
    }
    else{
      return false;
    }
  } catch (error) {
    console.error(error);
    
  }
 
}

const _cname = (object) => {
  try {
    return (name) => {
      if (checkArray(name)) {
        var arrOut = [];
        name.forEach((name) => {
          arrOut.push(object[[_config.name, name].join("-")]);
        });
        return arrOut;
      } else if (
        checkString(name)
      ) {
        return object[[_config.name, name].join("-")];
      } else {
        return "";
      }
    };
  } catch (error) {
    console.error(error);
  }
};

const _nc = (name) => {
  try {
    if (checkArray(name)) {
      var arrOut = [];
      name.forEach((name) => {
        arrOut.push([_config.name, name].join("-"));
      });
      return arrOut;
    } else if (
      checkString(name)
    ) {
      return [_config.name, name].join("-");
    } else {
      return "";
    }
  } catch (error) {
    console.error(error);
  }
};

// const _loadMode = () => {
//   const key = "view-mode";
//   const currentMode = localStorage.getItem(key);
//   const allowedMode = Object.keys(_giaodien.modes);
//   if (allowedMode.find((x) => x === currentMode)) {
//     _giaodien.modes[currentMode]?.change();
//     return _giaodien.modes[currentMode].name;
//   } else {
//     _giaodien.modes[_giaodien.md]?.change();
//     localStorage.setItem(key, _giaodien.md);
//     return _giaodien.modes[_giaodien.md].name;
//   }
// };

export { _cname, _nc };

