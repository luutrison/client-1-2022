
const _config = {
  name: "son",
};

// const _cname = (object) => {
//   return (name) => {
//     if (Array.isArray(name)) {
//       var arrOut = [];
//       name.forEach((name) => {
//         arrOut.push(object[[_config.name, name].join("-")]);
//       });
//       return arrOut;
//     } else {
//       return object[[_config.name, name].join("-")]
//     }
//   }
// }

const _cname = (object) => {
  return (name) => {
    if (Array.isArray(name)) {
      var arrOut = [];
      name.forEach((name) => {
        arrOut.push(object[[_config.name, name].join("-")]);
      });
      return arrOut;
    } else {
      return object[[_config.name, name].join("-")]
    }
  }
}

const _nc = (name) => {
    if (Array.isArray(name)) {
      var arrOut = [];
      name.forEach((name) => {
        arrOut.push([_config.name, name].join("-"));
      });
      return arrOut;
    } else {
      return [_config.name, name].join("-")
    }
}


const _giaodien = {
  md: "simple",
  modes: {
    simple: {
      name: "mode-simple",
      icon: "icon",
      change: async () => {
        // import("../giaodien/modes/simple.scss");
      },
    },
    dark: {
      name: "mode-dark",
      icon: "icon",
      change: async () => {
        // import("../giaodien/modes/dark.scss");
      },
    },
  },
};

const _loadMode = () => {
  const key = "view-mode";
  const currentMode = localStorage.getItem(key);
  const allowedMode = Object.keys(_giaodien.modes);
  if (allowedMode.find((x) => x === currentMode)) {
    _giaodien.modes[currentMode]?.change();
    return _giaodien.modes[currentMode].name;
  } else {
    _giaodien.modes[_giaodien.md]?.change();
    localStorage.setItem(key, _giaodien.md);
    return _giaodien.modes[_giaodien.md].name;
  }
};

export { _loadMode , _cname, _nc};

export default _giaodien;
