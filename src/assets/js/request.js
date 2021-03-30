import axios from 'axios';
export default function(config){
  const instance = axios .create({
     baseURL:' /api',
   //   timeout:1000,
  });
  instance.interceptors.request.use(function (config) {
   // 在发送请求之前做些什么
   // let token = sessionStorage.getItem('token');
   if(config.url === '/login' || config.url=='/register'){
     return config;
   }else{
      let token = sessionStorage.getItem('token');
      config.headers['token'] = token;
   }
   // if(token){
   //    config.headers['token']=token;
   //  }
   return config;
 }, function (error) {
   // 对请求错误做些什么
   return Promise.reject(error);
 });
 
 // 添加响应拦截器
 instance.interceptors.response.use(function (response) {
   // 对响应数据做点什么
   return response.data;
 }, function (error) {
   // 对响应错误做点什么
   return Promise.reject(error);
 });
  return instance(config);
}