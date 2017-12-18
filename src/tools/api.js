/**
 * Created by hekk on 2017/5/28.
 */
import 'babel-polyfill';
import axios from 'axios';
import * as config from './config';
let serverUrl = config.devUrl;
let sysUrl = config.sysDev;
if (process.env.kingold == 'test') {
    serverUrl = config.testUrl;
    sysUrl = config.sysTest;
}
if (process.env.kingold == 'production') {
    serverUrl = config.productionUrl;
    sysUrl = config.sysProduction;
}
let $query = (data) => {
    let str = [];
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] != 'object') {
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            } else {
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(data[key])));
            }
        }
    }
    return str.join('&');
};
let get = (path, data = {}) => {
    data.callSystemID = '3102';
    data.t = new Date().getTime();
    let url = '';
    if (/http/.test(path)) {
        url = `${path}`;

    } else {
        url = `${serverUrl + path}`
    }
    return axios({
        url,
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: data,
        withCredentials: true
    }).then(response => {
        if (response.status == 200) {
            if(response.data.code == 401){
                //Toast('登录超时，请重新登录！');
                setTimeout(()=>{
                    postSys('/a/logout').then(res => {
                        logout();
                        if (res.code == 200) {
                            return false;
                        }
                        // Toast(res.msg);
                    })
                },3000);
            }
            return response.data;
        }
        if (response.status == 302) {
            logout();
        }
        return {};
    }).then(data => {
        if (data.code == 1220) {
            logout();
        }
        return data;
    }).catch(err => {
        console.log('err--->')
        console.log(err)
    })

};

let getSys = (path, data = {}) => {
    let url = `${sysUrl + path}`
    return get(url, data);
};
import  {logout} from './operation';
let post = (path, data = {}) => {
    let url = '';
    if (/http/.test(path)) {
        url = `${path}`;
    } else {
        url = `${serverUrl + path}`;
    }

    return axios({
        url,
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            t: new Date().getTime(),
            callSystemID: '3102'

        },
        withCredentials: true,
        dataType: 'json',
        data: $query(data)
    }).then(response => {
        if (response.status == 200) {
            if(response.data.code == 401){
                //Toast('登录超时，请重新登录！');
                setTimeout(()=>{
                    logout();
                },3000);
            }
            return response.data;
        } else {
            return {};
        }
    }).then(data => {
        if (data.code == 1220) {
            logout();
        }
        return data;
    }).catch(err => {
        console.log('err--->')
    })

};

let postSys = (path, data = {}) => {
    let url = `${sysUrl + path}`;
    return post(url, data);
};
const $api = {
    get,
    post,
    getSys,
    postSys,
    serverUrl
};
export default $api;
