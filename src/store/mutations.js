/**
 * Created by hekk on 2017/5/23.
 */
'use strict';

const mutations = {};


// 个人信息
mutations.setUserInfo = (state, data) => {
    if (data) {
        Object.keys(state).forEach(key => {
            if (data.hasOwnProperty(key)) {
                state[key] = data[key];
            }
        });

    }

};

// 导航

mutations.setNavigation = (state, {list,id}) => {

    if (list) {
        console.log(id);
        state.navItems.forEach(el=>{
            if(el.id == id){
                console.log(el)
                el.children = list;
            }
        });
        //state.navItems = data;
    }
    console.log(state)
};
export default  mutations;
