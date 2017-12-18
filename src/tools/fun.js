/**
 * Created by chunting on 2017/6/27.
 */
export let valiIdCard = (idCard) =>{
    let regIdCard = /^(^[1-9]\d{7}((0[1-9])|(1[0-2]))(0[1-9]|([1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9]|[1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    //如果通过该验证，说明身份证格式正确，但准确性还需计算
    if(regIdCard.test(idCard)){
        //18位校验末位校验码。
        if(idCard.length==18){
            let idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
            let idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
            let idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
            for(let i=0;i<17;i++){
                idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
            }
            let idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
            let idCardLast=idCard.substring(17);//得到最后一位身份证号码
            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if(idCardMod==2){
                if(idCardLast=="X"||idCardLast=="x"){
                    return true;
                }else{
                    return false;
                }
            }else{
                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                if(idCardLast==idCardY[idCardMod]){
                    return true;
                }else{
                    return false;
                }
            }
        }
        //15位校验通过
        return true; 
    }else{
        return false;
    }
}
export let valiRealName = (realName) => {
    let regRealName = /^([\u4e00-\u9fa5\·]{2,20})$/;
    if(regRealName.test(realName)){
        return true;
    }else{
        return false;
    }
};
export let checkPhone = (phone) => {
    let regPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    if(regPhone.test(phone)){
        return true;
    }else{
        return false;
    }
};
//组织机构代码校验
export let isValidOrgCode = (orgCode)=>{
    var ws = [3, 7, 9, 10, 5, 8, 4, 2];
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var reg = /^([0-9A-Z]){8}-[0-9|X]$/;
    if (!reg.test(orgCode)) {
       return false;
    }
    return true;
};
//统一社会信用代码校验
export let checkSocialCreditCode = (orgCode)=>{
    let patrn = /^[0-9A-Z]+$/;
    if((orgCode.length != 18) || (patrn.test(orgCode) == false)){
        return false;
    }else{
        let Ancode;
        let Ancodevalue;
        let total = 0;
        let weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
        let str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
        for(let i=0;i<orgCode.length-1;i++){
            Ancode = orgCode.substring(i, i + 1);
            Ancodevalue = str.indexOf(Ancode);
            total = total + Ancodevalue * weightedfactors[i];
        }
        let logiccheckcode = 31 - total % 31;
        logiccheckcode == 31 ? logiccheckcode = 0 : '';
        var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
        var Array_Str = Str.split(',');
        logiccheckcode = Array_Str[logiccheckcode];
        var checkcode = orgCode.substring(17, 18);
        if (logiccheckcode != checkcode){
            return false;
        }
        return true;
    }
};
//邮箱验证
export let checkMail = (mail)=>{
    let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(reg.test(mail)){
        return true;
    }
    return false;
};
//银行卡验证
export let checkTencent = (num)=>{
    let reg = /^\w+$/;
    if (reg.test(num)) {
        return true;
    }
    return false;
}
//当前时间处理
export let timeDeal = ()=>{
    const time = new Date();
}
const $fun = {
    valiIdCard,
    valiRealName
}
export default $fun;

