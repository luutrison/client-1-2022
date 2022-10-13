import { _cname } from "~~/giaodien/giaodien";

const _notifier = {
  success: {
    type: "success",
    class: _cname(["notifier", "notifier-success"]) as any,
    placement: "bottomRight"
  },
  error: {
    type: "error",
    class: _cname(["notifier", "notifier-error"]) as any,
    placement: "bottomRight"
  },
  warning: {
    type: "warning",
    class: _cname(["notifier", "notifier-warning"]) as any,
    placement: "bottomRight"
  }
};

export default _notifier
