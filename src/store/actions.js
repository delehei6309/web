/**
 * Created by hekk on 2017/5/23.
 */

'use strict';
const actions = {};
import $api from '../tools/api';
/*import $navigation from '../navigation.js';
let {navItems} = $navigation;*/
//console.log('------------------->>>>>>>>>>>>>',objs);
// 个人信息
let getUserInfo = () => {
    return $api.post('/channel/getChannelUser');
};
//获取导航
let getNavigation = (id) => {
    let url = '/index/cate/moveOnCate.html';
    if(id == 2){
        //产品
        url =  '/index/product_cate/getProductCateList.html';
    }
    return $api.post(url,{cateid:id});
};
actions.getUserInfo = ({commit}) => {
    return getUserInfo()
        .then(data => {
            if (data.code == 200) {
                commit('setUserInfo', data.data)
            }
            return data;
        });
};
actions.getNavigation = ({commit},id)=>{


    return getNavigation(id)
        .then(data => {
            if (data.code == 200) {

                let list = data.data.secondCateList;
                if(id == 2){
                    //产品真是特殊
                    list = data.data.productCateList;
                }

               commit('setNavigation',{list,id})
            }
            return data;
        });
}
export default actions;
