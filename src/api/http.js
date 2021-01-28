import axios from "axios";
import qs from "qs";
import dataApi from "./dataApi";
import SingleMessage from "@/components/mo-ui/message/index.js";
import Store from "@/store/index.js";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000 // 毫秒
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    config.headers["Token"] = Store.getters.token;
    return config;
  },
  err => {
    console.log("请求出错");
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  res => {
    // 4000 token无效,或者过期
    if(res.data.code == 4000){
      Store.dispatch('user/resetToken')
      // 如果路径是登录页，就不跳转
      // if(window.location.pathname != '/login'){
      //   window.location.href = '/login'
      // }
      window.location.reload();
    }

    return res.data;
  },
  err => {
    SingleMessage.error("网络请求出错, 请检查网络");
    return {}
  }
);

// 包装请求方法的容器
const Http = {};

for (const [key, url] of Object.entries(dataApi)) {
  // async 作用，避免进入回调地狱
  Http[key] = async data => {
    return await instance.post(url, data);
  };
}

export default Http;
