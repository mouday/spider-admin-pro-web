import { Message } from "element-ui";

/**
 * 确保浏览器只有一个弹框
 * options 文档参考
 * https://element.eleme.cn/#/zh-CN/component/message
 */
class SingleMessage {
  static message(options) {
    // 判断是否已经弹框
    if (document.getElementsByClassName("el-message").length === 0) {
      return Message(options);
    }
  }

  static _message(message, type, options = null) {
    let _options = {
      message: message,
      type: type,
    };

    if (options) {
      _options = Object.assign(_options, options);
    }

    return this.message(_options);
  }

  static success(message, options = null) {
    return this._message(message, "success", options);
  }

  static warning(message, options = null) {
    return this._message(message, "warning", options);
  }

  static info(message, options = null) {
    return this._message(message, "info", options);
  }

  static error(message, options = null) {
    return this._message(message, "error", options);
  }

  static closeAll() {
    Message.closeAll();
  }
}

export default SingleMessage;
