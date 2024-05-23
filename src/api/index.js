import axios from "axios";
import {AxiosCanceler} from "./helper/axiosCancel";
import {ResultEnum} from "@/api/constant/index.js";
import {handleErrorByCode} from "@/api/helper/checkErrorCode.js";

// 请求配置
const config = {
  baseURL: "http://codercba.com:1888", // 请求根路径
  timeout: 1000 * 30 // 超时时间
};

const axiosCanceler = new AxiosCanceler();

// axios请求类
class RequestHttp {
  
  constructor(config) {
    this.service = axios.create(config);
    
    /**
     * @description: 请求拦截器
     */
    this.service.interceptors.request.use(
      (config) => {
        // 1.重复请求不需要取消，在api服务中通过指定第三个参数: { cancel: false }来控制
        // config.cancel ?? (config.cancel = true);
        // config?.cancel && axiosCanceler.addPending(config);
        // 2.设置token在请求头中
        // const userStore = useUserStore();
        // if (config.headers && typeof config.headers.set === "function") {
        //   config.headers.set("token", userStore.token);
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    
    /**
     * @description: 响应拦截器
     */
    this.service.interceptors.response.use(
      (response) => {
        const {data, config} = response;
        // const userStore = useUserStore();
        axiosCanceler.removePending(config);
        // 登录失效
        if (data.code === ResultEnum.OVERDUE) {
          // userStore.setToken(""); // 清除token
          // router.replace(LOGIN_URL); // 跳转至登录页
          // MessageUtil.ShowToast({ type: "error", message: "登录失效" });
          return Promise.reject(data);
        }
        // 全局错误信息拦截（这个位置可以根据项目情况补充或修改）
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          // MessageUtil.ShowToast({ type: "error", message: data?.message || "接口请求错误" });
          return Promise.reject(data);
        }
        // 成功请求
        return data;
      },
      (error) => {
        return handleResError(error);
      }
    );
  }
  
  /**
   * @description 请求方法
   */
  get(url, params, _object = {}) {
    return this.service.get(url, {params, ..._object});
  }
  
  post(url, params, _object = {}) {
    return this.service.post(url, params, _object);
  }
}

const http = new RequestHttp(config);
export default http;


/**
 * @description: 处理响应拦截器中的响应错误
 */
const handleResError = async (error) => {
  const {response} = error;
  // 请求超时 && 网络错误单独判断，没有 response
  if (error.message.indexOf("timeout") !== -1) {
    // MessageUtil.ShowToast({ type: "error", message: "请求超时！请您稍后重试" });
  }
  if (error.message.indexOf("Network Error") !== -1) {
    // MessageUtil.ShowToast({ type: "error", message: "网络错误！请您稍后重试" });
  }
  // 根据服务器响应的错误状态码，做不同的处理
  if (response) {
    handleErrorByCode(response.status);
  }
  // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
  if (!window.navigator.onLine) {
    // router.replace("/500");
  }
  return Promise.reject(error);
}