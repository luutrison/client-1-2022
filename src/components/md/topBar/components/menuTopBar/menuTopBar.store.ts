import { notification } from "ant-design-vue";
import axios from "axios";
import { reactive, toRaw } from "vue";
import _api_v1 from "@/src/api/v1/api";
import _notifier from "~~/src/components/current/ui/notifier/notifier";

const topbarData = reactive({
  data: [],
  getThemeData() {
    axios
      .get(_api_v1("/giaodien"))
      .then((response) => {
        try {
          const keyname = "pinned_topbar";

          const resData = JSON.parse(response.data);

          if (resData) {
            const topbar = resData.find((x) => x.name === keyname);

            const items = topbar.items.sort((a, b) => {
              if (a.order < b.order) {
                return -1;
              } else {
                return 1;
              }
            });
            this.data = items;

            // resolve(true);
          }
        } catch (error) {
          notification.open({
            message: "Error",
            description: error,
            ...(_notifier.error as any),
          });
        }
      })
      .catch((error) => {
        notification.open({
          message: "Error",
          description: error,
          ...(_notifier.error as any),
        });
        // reject(false)
      });
  },
});

const sortData = async () => {
  try {
    const idata = await useAsyncData(() => $fetch(_api_v1("/giaodien")));
    const keyname = "pinned_topbar";
    const dataInput = JSON.parse(idata.data.value as any);

    const topbar = dataInput.find((x) => x.name === keyname);

    const items = topbar.items.sort((a, b) => {
      if (a.order < b.order) {
        return -1;
      } else {
        return 1;
      }
    });

    return items;
    // resolve(true);
  } catch (error) {
    notification.open({
      message: "Error",
      description: error,
      ...(_notifier.error as any),
    });
  }
};

export { sortData, topbarData };


// const sortDatavt = () => {
//   var sort = [];
//   captinh.forEach((element) => {
//     var item = {};
//     item["code"] = element["Mã"];
//     Object.keys(lv).forEach((key) => {
//       if (lv[key] === element["Cấp"]) {
//         item["level"] = key;
//       }
//     });
//     item["name"] = element["Tên"];
//     // item["dcode"] = element["Mã QH"];
//     // item["pcode"] = element["Mã TP"];

//     sort.push(item);
//   });

//   console.log(sort);
// };

// export { sortDatavt };
