webpackJsonp([6],{411:function(t,e,n){var r=n(154)(n(451),n(501),null,null);t.exports=r.exports},414:function(t,e,n){"use strict";var r=n(43),i=n.n(r),a=i.a.extend(n(418)),o=[],s=function(){if(o.length>0){var t=o[0];return o.splice(0,1),t}return new a({el:document.createElement("div")})},d=function(t){t&&o.push(t)},c=function(t){t.target.parentNode&&t.target.parentNode.removeChild(t.target)};a.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",c),this.closed=!0,d(this)};var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.duration||3e3,n=s();return n.closed=!1,clearTimeout(n.timer),n.message="string"==typeof t?t:t.message,document.body.appendChild(n.$el),i.a.nextTick(function(){n.visible=!0,n.$el.removeEventListener("transitionend",c),~e&&(n.timer=setTimeout(function(){n.closed||n.close()},e))}),n};e.a=l},415:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(417);n.n(r);e.default={name:"toast",data:function(){return{visible:!1,message:""}}}},416:function(t,e,n){e=t.exports=n(404)(void 0),e.push([t.i,".toast-warp{position:absolute;left:0;bottom:0;top:0;right:0;z-index:999}.toast-warp .toast-content{position:fixed;left:50%;top:50%;padding:.5rem .75rem;border-radius:.25rem;text-align:center;background-color:rgba(0,0,0,.8);color:#fff;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.fade-enter-active,.fade-leave-active{transition:opacity .5s linear}.fade-enter,.fade-leave-active{opacity:0}",""])},417:function(t,e,n){var r=n(416);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(405)(r,i);r.locals&&(t.exports=r.locals)},418:function(t,e,n){var r=n(154)(n(415),n(419),null,null);t.exports=r.exports},419:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"toast-warp"},[n("div",{staticClass:"toast-content"},[t._v(t._s(t.message))])])])},staticRenderFns:[]}},451:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(99),i=n(476),a=(n.n(i),n(414));e.default={props:[],name:"product-detail",data:function(){return{router:"ppp",productInfor:null}},created:function(){var t=this;r.a.post("/index/product/productDetail.html",{id:this.$route.params.id}).then(function(e){200==e.code?t.productInfor=e.data.productInfo:n.i(a.a)(e.message||"服务器错误！")})},components:{},computed:{},methods:{getData:function(){}},watch:{},destroyed:function(){}}},463:function(t,e,n){e=t.exports=n(404)(void 0),e.push([t.i,".product-detail{padding:20px 0}.product-detail .product-detail-img{width:520px;height:300px;padding:15px;border:1px solid #d8d8d8;margin:0 auto}",""])},476:function(t,e,n){var r=n(463);"string"==typeof r&&(r=[[t.i,r,""]]);var i={};i.transform=void 0;n(405)(r,i);r.locals&&(t.exports=r.locals)},501:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner-detail product-detail"},[t.productInfor?n("div",{staticClass:"inner-main"},[n("div",{staticClass:"product-detail-img img-box"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.productInfor.image,expression:"productInfor.image"}],attrs:{alt:""}})]),t._v(" "),n("div",{staticClass:"content-wrap",domProps:{innerHTML:t._s(t.productInfor.content)}})]):n("div",{staticClass:"inner-main"},[t.productInfor?n("p",[t._v("此处空空，没有内容！")]):n("p",[t._v("加载中，请稍后......")])])])},staticRenderFns:[]}}});