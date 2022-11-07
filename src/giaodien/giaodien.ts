const mconfig = {
  name: "son",
};

const cname = (object) => {
  try {
    return (name) => {
      const arrName = name.trim().split(" ");
      var arrOut = [];
      arrName.forEach((item) => {
        arrOut.push(object[[mconfig.name, item].join("-")]);
      });
      return arrOut;
    };
  } catch (error) {
    console.error(error);
  }
};

const nc = (name) => {
  try {
    const arrName = name.trim().split(" ");
    var arrOut = [];
    arrName.forEach((item) => {
      arrOut.push([mconfig.name, item].join("-"));
    });
    return arrOut;
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

export { cname, nc };
