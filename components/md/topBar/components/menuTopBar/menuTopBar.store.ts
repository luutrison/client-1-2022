import { notification } from "ant-design-vue";
import axios from "axios";
import { reactive, toRaw } from "vue";
import _api_v1 from "~~/api/v1/api";
import _notifier from "~~/components/page/ui/notifier/notifier";

const topbarReactive = reactive({
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
          }
         
        } catch (error) {
          notification.open({
            message: "Error",
            description: error,
            ...(_notifier.error as any),
          });
        }
      })
      .catch((err) => {
        notification.open({
          message: "Error",
          description: err.response.statusText,
          ...(_notifier.error as any),
        });
      });
  },
});

export default topbarReactive;
