/**
 * Created by hekk on 2017/5/28.
 */
//设置页面标题
export let setTitle = (title) => {
    setTimeout(function () {
        //利用iframe的onload事件刷新页面
        document.title = title || 'COP开放平台';
        var iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.onload = function () {
            setTimeout(function () {
                document.body.removeChild(iframe);
            }, 0);
        };
        document.body.appendChild(iframe);
    }, 0);
};


import md5 from 'md5';


/*// 输入框校验,提现和充值
export let currencyInputValidate = (input) => {
    if (!input) {
        return '';
    }
    let t = input.toString();
    if (t[0] == '0' || t[0] == '.') {
        return '';
    }
    if (isNaN(input)) {
        return ''
    }
    return t.replace(/\.\d{3,}/, (match) => {
        return match.substring(0, 3);
    })
};*/
export let currencyInputValidate = (input) => {
    if (!input) {
        return '';
    }
    let t = input.toString();
    if (t[0] == '0' || t[0] == '.') {
        return '';
    }
    if (isNaN(input)) {
        return ''
    }
    return t.replace(/\.\d{3,}/, (match) => {
        return match.substring(0, 3);
    })
};
export let logout = () => {
    window.sessionStorage.setItem('logoutUrl', encodeURIComponent(window.location.href));
    window.location.replace('/login');
};
let $operation = {
    setTitle
}
export default $operation;

