const { exec } = require("child_process");

const write = (message) => {
  console.log(message + "\n");
};

const runCommand = (props) => {
  exec(props.command, (err, stdout, stderr) => {
    if (err) {
      write(`error: ${err.message}`);
      return;
    }
    if (stderr) {
      write(`error-v: ${stderr}`);
      return;
    }
    write(`${stdout}`);
    write(props.message);
    if (props.nextStep) {
      props.nextStep();
    }
    return stdout;
  });
};

const command = (arr) => {
  return arr.join(" ");
};

const copyBuild = () => {
  var cmarr = [];

  const count = runCommand({
    command: command([
      "ls /home/luutrison/Documents/luutrison/2022/nuxt/LifeTree/Deps/ClientV3-Build/.deps/ | wc -l",
    ]),
  });

  if (count > 0) {
    cmarr.push(
      "rm -r /home/luutrison/Documents/luutrison/2022/nuxt/LifeTree/Deps/ClientV3-Build/.deps/* &&"
    );
  }

  runCommand({
    message: "copy to deps successfully !",
    command: command([
      ...cmarr,
      "npm run build",
      "&& cp -r -a ./.output/* /home/luutrison/Documents/luutrison/2022/nuxt/LifeTree/Deps/ClientV3-Build/.deps/",
    ]),
  });
};

const tagPrefix = {
  "-f": {
    des: "Funtions to run",
    run: {
      copy: () => {
        return copyBuild();
      },
    },
  },

};

const tag = process.argv;

function Prerunning() {
  Object.keys(tagPrefix).forEach((keys) => {
    const index = tag.findIndex((x) => x == keys);
    var arrItems = [];
    const findNextItem = (indexin) => {
      const itemIndex = tag[indexin + 1].trim();
      if (itemIndex != "" && itemIndex.search(",") > 0) {
        arrItems.push(itemIndex.replace(",", ""));
        findNextItem(indexin + 1);
      } else if (itemIndex != "") {
        arrItems.push(itemIndex);
      }
    };

    if (index > 0) {
      findNextItem(index);
      arrItems.forEach((i) => {
        const func = tagPrefix[keys]?.run?.[i];
        if (func && typeof func == "function") {
          func();
        }
      });
    }
  });
}

Prerunning();

// console.log(tag, tag.entries, tag.flatMap);
