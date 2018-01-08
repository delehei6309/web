/**
 * Created by hekk on 2017/5/23.
 */

'use strict';
const actions = {};
import $api from '../tools/api';
import navItems from '../navigation.js';
console.log(navItems);
// 个人信息
let getUserInfo = () => {
    return $api.post('/channel/getChannelUser');
};
//获取导航
let getNavigation = () => {
    return $api.post('/index/cate/moveOnCate.html');
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
    console.log(id);
    return getNavigation()
        .then(data => {
            if (data.code == 200) {
                navItems.forEach(el=>{
                    if(el.id == id){
                        if(!el.children || el.children.length<1){
                            el.children = data.data.secondCateList;
                            console.log(data)
                            return
                        }
                    }
                });
                commit('setNavigation',navItems)
            }
            return data;
        });
}
export default actions;
