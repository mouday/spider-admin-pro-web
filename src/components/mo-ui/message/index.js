import { Message } from "element-ui";

/**
 * 确保浏览器只有一个弹框
 * options 文档参考
 * https://element.eleme.cn/#/zh-CN/component/message
 */
class SingleMessage {
  static message(options) {
    Message.closeAll();
    Message(options);
  }
}

const statusList = ["success", "warning", "info", "error"];

for (let status of statusList) {
  SingleMessage[status] = message => {
    SingleMessage.message({ type: status, message: message });
  };
}

export default SingleMessage;
