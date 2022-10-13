const _config = {
  name: "son",
};

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

const _cname = (arr) => {
  if (Array.isArray(arr)) {
    var arrOut = [];
    arr.forEach((name) => {
      arrOut.push(_config.name + "-" + name);
    });
    return arrOut;
  } else {
    return _config.name + "-" + arr;
  }
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

export { _cname, _loadMode };

export default _giaodien;
