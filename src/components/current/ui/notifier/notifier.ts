import { cname } from "~~/src/giaodien/giaodien";

const _notifier = {
  success: {
    type: "success",
    class: cname(["notifier", "notifier-success"]) as any,
    placement: "bottomRight"
  },
  error: {
    type: "error",
    class: cname(["notifier", "notifier-error"]) as any,
    placement: "bottomRight"
  },
  warning: {
    type: "warning",
    class: cname(["notifier", "notifier-warning"]) as any,
    placement: "bottomRight"
  }
};

export default _notifier
