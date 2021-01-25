import axios from "axios";
import dataApi from "@/api/dataApi.js";

const UPLOAD_URL = process.env.VUE_APP_BASE_API + dataApi.UploadUploadImage;

/**
 * 自定义上传图片插件
 */
class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  async upload() {
    const data = new FormData();
    data.append("image", await this.loader.file);

    const res = await axios({
      url: UPLOAD_URL,
      method: "POST",
      data,
      withCredentials: false // true 为不允许带 token, false 为允许
    });

    return {
      default: res.data.data
    };
  }
}

export default MyUploadAdapter;
