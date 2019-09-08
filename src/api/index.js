import axios from 'axios';
// import qs from 'qs';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['OAuth-Token'] = localStorage['task-Token'];
axios.defaults.withCredentials = true;


import * as Sentry from '@sentry/browser';
Sentry.init({    dsn: 'https://${Sentry密钥}@sentry.io/1550805' });

// 相应拦截 在请求或响应被 then 或 catch 处理前拦截它们。
axios.interceptors.response.use(
    response => {
        if(response.data.code != 'SUCCESS'){
            Sentry.withScope(scope => {
                scope.setUser({
                    user_error:'自定义传输的信息', 
                    response
                });
                scope.setLevel('error');
                Sentry.captureMessage(response.data.msg||'未知错误');
            });
        }
        return response;
    }
);

// api名称
const API_NAME = '/api-端';

// 请求操作
const doAxios =(method='GET',url,option) =>{
    option.url = API_NAME+url;
    option.method = method;
    return axios(option).then(res => res.data).catch(res => res.data);
};

const Api = {
    user: {
        AuthUrl:option => doAxios('GET','/user/authUrl',option),    // 获取授权URL
        Auth:option=>doAxios('POST','/user/auth',option)            // 授权
    }
};

// 导出的API请求
export default  Api;
