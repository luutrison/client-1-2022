const { exec } = require("child_process");

const write = (message) => {
  console.log(message + "\n");
};

const runCommand = async (props) => {
  return new Promise((resolve, reject) => {
    const allowWrite = props.write !== undefined ? props.write : true;
    const allowWriteError =
      props.writeError !== undefined ? props.writeError : true;

    if (props.command !== undefined &&  props.command.trim() !== "") {
      exec(props.command, (err, stdout, stderr) => {
        if (allowWriteError == true) {
          if (err) {
            write(`${err.message}`);
            runCommand({
              command: props.errCommand,
            });
          }
          if (stderr) {
            write(`${stderr}`);
          }
        }
        if (allowWrite == true && stdout.trim() !== "") {
          write(`${stdout}`);
        }

        props.message ? write(props.message) : undefined;

        if (props.nextStep) {
          props.nextStep();
        }
        resolve(stdout);
      });
    }
  });
};

const command = (arr) => {
  return arr.join(" ");
};

const copyBuild = async () => {
  var cmarr = [];
  await runCommand({
    command: command([
      "cd /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3-Build/.deps/;",
    ]),
    errCommand: command([
      "mkdir /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3-Build/.deps/;",
    ]),
    write: false,
  });

  const count = await runCommand({
    command: command([
      "ls /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3-Build/.deps/ | wc -l;",
    ]),
    write: false,
    writeError: false,
  });

  if (count > 0) {
    cmarr.push(
      `rm -r /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3-Build/.deps/ && 
      mkdir /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3-Build/.deps/;`
    );
  } else {
  }

  write("copy");

  if (cmarr.length > 0) {
    runCommand({
      command: command(cmarr),
    });
  }
  write("build");

  await runCommand({
    message: "copy to deps successfully !",
    command: command([
      "npm run build",
      "&& cp -r -a ./.output/* /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3-Build/.deps/;",
    ]),
  });
};
//----------------------------------------------------------------
const generate = async () => {
  var cmarr = [];
  await runCommand({
    command: command([
      "cd /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3/.deps/;",
    ]),
    errCommand: command([
      "mkdir -p /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3/.deps/;",
    ]),
    write: false,
    writeError: false,
  });

  const count = await runCommand({
    command: command([
      "ls /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3/.deps/ | wc -l;",
    ]),
    write: false,
    writeError: false,
  });

  if (count > 0) {
    await runCommand({
      command: command([ `rm -r /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3/.deps/ ; 
      mkdir /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3/.deps/;`])
    });
  }

  write("Tiến hành sao chép...");

  if (cmarr.length > 0) {
    await runCommand({
      command: command(cmarr),
    });
  }

  write("Đang chuyển đổi...");
  runCommand({
    message: "Sao chép thành công !",
    command: command([
      "npm run generate;",
      "cp -r -a ./.output/public/* /home/luutrison/Documents/luutrison/2022/project/nuxt/LifeTree/Deps/ClientV3/.deps/",
    ]),
  });
};

// Prefix settings
const tagPrefix = {
  "-f": {
    des: "Funtions to run",
    run: {
      copy: async () => {
        return await copyBuild();
      },
      generate: async () => {
        return await generate();
      },
    },
  },
};

const tag = process.argv;

async function Prerunning() {
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
      arrItems.forEach(async (i) => {
        const func = tagPrefix[keys]?.run?.[i];
        if (func && typeof func == "function") {
          await func();
        }
      });
    }
  });
}

Prerunning();

// console.log(tag, tag.entries, tag.flatMap);
