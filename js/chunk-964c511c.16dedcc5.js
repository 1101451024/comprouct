(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-964c511c"],{"25fb":function(e,t,i){},"355d":function(e,t){t.f={}.propertyIsEnumerable},4455:function(e,t,i){"use strict";(function(e){i("4917"),i("a481");var s=i("025e");t["a"]={data:function(){return{imgList:[],fileList:[],uploadCount:0,Photos:[],ishidden:!0,isCount:!0,num:5}},created:function(){var e=this;this.$nextTick(function(){console.log(e.isCount),!0===e.isCount?e.num=5:e.num=8})},mounted:function(){var t=this,i="http://wkf.yiwindow.com/backend/",a=i+"server/media/upload?type=image";this.$nextTick(function(){t.$weui.uploader("#uploader",{url:a,auto:!0,type:"file",fileVal:"media",compress:{width:1600,height:1600,quality:.8},onBeforeQueued:function(e){return["image/jpg","image/jpeg","image/png","image/gif"].indexOf(this.type)<0?(t.$weui.alert("请上传图片"),!1):this.size>10485760?(t.$weui.alert("请上传不超过10M的图片"),!1):e.length>t.num?(t.$weui.alert("最多只能上传"+t.num+"张图片，请重新选择"),!1):t.uploadCount+1>t.num?(t.$weui.alert("最多只能上传"+t.num+"张图片"),!1):void++t.uploadCount},onQueued:function(){var e=this;s["a"].blobTobase(e,function(t){e.url=t})},onBeforeSend:function(i,s){e.extend(s,{Authorization:t.$store.state.Token})},onProgress:function(e){},onSuccess:function(e){t.imgList.push(this),0===e.code?t.Photos.push(e.result.fuid):t.$weui.alert(e.msg)},onError:function(e){console.log(this,e)}})})},watch:{uploadCount:function(e,t){e==this.num?this.ishidden=!1:this.ishidden=!0,console.log(e)}},methods:{handelGallery:function(e){console.log("执行了");var t=e.target,i=this;while(!t.classList.contains("weui-uploader__file")&&t)t=t.parentNode;if(t){var s=t.getAttribute("style")||"",a=t.getAttribute("data-id");s&&(s=s.match(/url\((.*?)\)/)[1].replace(/"/g,""));var n=i.$weui.gallery(s,{onDelete:function(){i.$weui.confirm("确定删除该图片？",function(){for(var e,s=0,l=i.imgList.length;s<l;s++){var o=i.imgList[s];if(o.id==a){e=s;break}}e>=0&&(console.log(e),i.Photos.splice(e,1),i.imgList.splice(e,1)),i.uploadCount--,t.remove(),n.hide()},function(){console.log("no deleted~ ~ ~ ~ ~ ~")})}})}}}}}).call(this,i("1157"))},4917:function(e,t,i){"use strict";var s=i("cb7c"),a=i("9def"),n=i("0390"),l=i("5f1b");i("214f")("match",1,function(e,t,i,o){return[function(i){var s=e(this),a=void 0==i?void 0:i[t];return void 0!==a?a.call(i,s):new RegExp(i)[t](String(s))},function(e){var t=o(i,e,this);if(t.done)return t.value;var r=s(e),c=String(this);if(!r.global)return l(r,c);var u=r.unicode;r.lastIndex=0;var d,p=[],h=0;while(null!==(d=l(r,c))){var f=String(d[0]);p[h]=f,""===f&&(r.lastIndex=n(c,a(r.lastIndex),u)),h++}return 0===h?null:p}]})},"4dac":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"describe_item"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isDescribe,expression:"!isDescribe"}],staticClass:"describe_placeholder"},[e._v(e._s(e.placeText))]),i("div",{staticClass:"describe_edit",attrs:{contenteditable:"plaintext-only"},domProps:{innerHTML:e._s(e.innerText)},on:{focus:e.focusIn,input:e.changeText,blur:e.blurIn}})])},a=[],n={data:function(){return{isDescribe:"",innerText:"",placeText:"",bodys:0}},props:["placetxt"],mounted:function(){this.$parent.textVal2||this.$parent.textVal?(this.innerText=this.$parent.textVal2,this.placeText=""):this.placeText=this.$parent.placetxt},methods:{changeText:function(){this.isDescribe=this.$el.lastChild.innerHTML,this.$emit("edit-handler",this.$el.lastChild.innerHTML)},focusIn:function(){this.bodys=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop},blurIn:function(){window.scroll(0,this.bodys)}},watch:{value:function(e){this.innerText||(this.innerText=e)}}},l=n,o=(i("9bef"),i("2877")),r=Object(o["a"])(l,s,a,!1,null,"a3c529bc",null);t["a"]=r.exports},"4fc8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAqCAMAAAAK/cKeAAAAtFBMVEUAAAAnpfknpflPsfQnpfknpfknpfl6vu0npfl6vu16vu0npfl6vu0npfl6vu0npfknpfknpfl6vu0npfknpfknpfl6vu0npfknpfknpfknpfl6vu0npfknpfknpfknpfknpfknpfknpfl6vu0npfknpfl6vu0npfknpfknpfknpfknpfl6vu0npfknpfknpfknpfl6vu0npfknpfknpfknpfknpfknpfknpfl6vu0npfl6vu31d9BmAAAAOnRSTlMACfAF2zYOC/v4s6WVW0GeFOrXtXx4K/PhvpqPjk9JIPXWyLyUg3wuKALSzJBsajsa1MG6qm1iVEMq6O2XwgAAAdhJREFUOMt1k9liqkAQRAcExBgUxS3uJhr3JfvN4f//69IsGRGsl6aasqumcdQV7FVgmZhWsLJVCYyThYZ1NG4FkwF5DCb5AUNpmk1v4yhn4zVNocOrMc6TvO/qjtEVzZOT8YoI6n5uql8XSSVlYtEtRO+KURpSCwqSSew5iCxUGSKjgWQ7QSvL8Dtq12rt0W96gBYco2rBV5r4MUzxWI0bR7CiVYNpJIKX8A8vlTiACbbqQFPFkAkPjWq18SBT4lYTOioAL2a9qP+aaF+jx548eBBIjHXcHkUTVIpoykjqWoKYkCy3HYaNTNEIw3Z8GugrYBt3a2FYzRTVMKxJ3YIrM/y7Ch9a6hn+lbm8ST3DXo1hVZb0ILUDSzUF695pxeBHVVqZTXFjG+gbSmyCO1tfJvueuWCXfjm/n76pw4dK0DtEX//t0EvYCp6lxkOmqojLPOtLEssoKpoyQv+XxgWB7cI5I9/g3l7Vyh4+Nf2ARd5H1mleNJ31oV7w+LpueICnNIwFvG9v78Z8rekS+rOM6B9ZfsZ+9EiNjalv8npeeg2nLnzG1pcB7AxVxInkUzo7aGUhCitgWHHeYW6rcoyBYA/uRN3DkhjfGb9j5ObOWTzRYnfOd/4D6GJZSo18hSIAAAAASUVORK5CYII="},5176:function(e,t,i){e.exports=i("51b6")},"51b6":function(e,t,i){i("a3c3"),e.exports=i("584a").Object.assign},9306:function(e,t,i){"use strict";var s=i("c3a1"),a=i("9aa9"),n=i("355d"),l=i("241e"),o=i("335c"),r=Object.assign;e.exports=!r||i("294c")(function(){var e={},t={},i=Symbol(),s="abcdefghijklmnopqrst";return e[i]=7,s.split("").forEach(function(e){t[e]=e}),7!=r({},e)[i]||Object.keys(r({},t)).join("")!=s})?function(e,t){var i=l(e),r=arguments.length,c=1,u=a.f,d=n.f;while(r>c){var p,h=o(arguments[c++]),f=u?s(h).concat(u(h)):s(h),m=f.length,v=0;while(m>v)d.call(h,p=f[v++])&&(i[p]=h[p])}return i}:r},"9aa9":function(e,t){t.f=Object.getOwnPropertySymbols},"9bef":function(e,t,i){"use strict";var s=i("fbd1"),a=i.n(s);a.a},a3c3:function(e,t,i){var s=i("63b6");s(s.S+s.F,"Object",{assign:i("9306")})},c280:function(e,t,i){},c5aa:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.getData?i("div",{staticClass:"addRepair"},[i("div",{staticClass:"weui-cells mar_top0"},[i("div",{staticClass:"weui-cell ly-cell weui-cell_access",on:{click:e.getRoom}},[e._m(0),i("div",{staticClass:"weui-cell__bd"},[i("p",[e._v(e._s(e.houseTitle))])]),i("div",{staticClass:"weui-cell__ft ft_color"},[e._v("更换")])])]),i("div",{staticClass:"repairFrom"},[i("div",{staticClass:"weui-cells mar_top10"},[i("div",{staticClass:"weui-cell ly-cell"},[e._m(1),i("div",{staticClass:"weui-cell__bd weui-cell__primary"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"weui-input",attrs:{id:"usename",type:"text",required:"",name:"username",placeholder:"请输入"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),i("div",{staticClass:"weui-cell ly-cell"},[e._m(2),i("div",{staticClass:"weui-cell__bd weui-cell__primary"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"weui-input",attrs:{id:"registe_phone",type:"tel",placeholder:"请输入"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),i("div",{staticClass:"weui-cell ly-cell weui-cell_access",on:{click:e.getArea}},[e._m(3),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.areaVal,expression:"areaVal"}],staticClass:"weui-input",attrs:{id:"nextOwn",name:"handel",type:"text",placeholder:"请选择",readonly:"readonly"},domProps:{value:e.areaVal},on:{input:function(t){t.target.composing||(e.areaVal=t.target.value)}}})]),i("div",{staticClass:"weui-cell__ft"})]),i("div",{staticClass:"weui-cell ly-cell weui-cell_access",on:{click:e.getProject}},[e._m(4),i("div",{staticClass:"weui-cell__bd"},[i("p",[e._v(e._s(e.projectVal))])]),i("div",{staticClass:"weui-cell__ft"},[e.isCheck?i("span",{staticClass:"check"},[e._v("请选择")]):e._e()])]),i("div",{staticClass:"weui-cell ly-cell"},[e._m(5),i("div",{staticClass:"weui-cell__bd"},[i("com-textarea",{ref:"childText",on:{"edit-handler":e.onEditHandler}})],1)]),i("upload-img",{ref:"childUp"})],1)]),i("div",{staticClass:"weui-btn-area"},[i("button",{staticClass:"weui-btn ly-btn_defalut",on:{click:e.addBtn}},[e._v("确定")])]),i("transition",{attrs:{name:"slideRight"}},[e.$route.meta.isCheck?i("router-view",{staticStyle:{"animation-duration":"0.3s"},attrs:{tosend:e.arealist},on:{getChildVal:e.getDatas}}):i("router-view",{staticStyle:{"animation-duration":"0.3s"},attrs:{project:e.projectlist},on:{getProVal:e.getProData}})],1)],1):e._e()},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"weui-cell__hd header_img"},[s("img",{attrs:{src:i("4fc8")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label ly-label",attrs:{for:"usename"}},[e._v("联系人")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label ly-label",attrs:{for:"registe_phone"}},[e._v("联系电话")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label ly-label"},[e._v("报修区域")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label ly-label"},[e._v("报修项目")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label ly-label"},[e._v("问题描述")])])}],n=i("5176"),l=i.n(n),o=i("f037"),r=i("4dac"),c=i("d722"),u={data:function(){return{username:this.$store.state.userInfo.username||"",phone:this.$store.state.userInfo.phone||"",areaVal:this.$store.state.addRepair.areaval||"",areaId:this.$store.state.addRepair.areaId||"",projectVal:this.$store.state.proType.projectval||"",typeId:this.$store.state.proType.typeId||"",textVal:"",placetxt:"请输入",isCheck:!0,arealist:[],projectlist:"",getData:!1,photos:[],link:1,houseTitle:"",houseId:"",type:""}},components:{UploadImg:o["a"],ComTextarea:r["a"]},created:function(){this.type=this.$route.params.type,console.log(this.type),""!==this.projectVal&&(this.isCheck=!1),this.init(this.type)},methods:{init:function(e){var t=this;this.$weui.loading(),"repair"===e?(this.houseTitle=this.$store.state.roomId.roomName||"请选择",this.houseId=this.$store.state.roomId.roomGuid||"",Object(c["x"])().then(function(e){console.log(e),t.$weui.loading().hide(),0===e.code?(t.arealist=e.result.repair_area_list,t.projectlist=e.result.repair_type_list,console.log(t.projectlist),t.getData=!0):t.$weui.alert(e.msg)})):"prorepair"===e&&(this.houseTitle=this.$store.state.proRoom.roomName||"请选择",this.houseId=this.$store.state.proRoom.roomGuid||"",Object(c["K"])().then(function(e){console.log(e),t.$weui.loading().hide(),0===e.code?(t.arealist=e.result.repair_area_list,t.projectlist=e.result.repair_type_list,t.getData=!0):t.$weui.alert(e.msg)}))},getRoom:function(){this.$router.push({name:"comHouse",query:{type:this.type,owId:1}})},getDatas:function(e){this.areaVal=e.label,this.areaId=e.value,this.isCheck1=!1},getProData:function(e){this.projectVal=e.label,this.typeId=e.value,this.isCheck=!1,console.log(this.typeId)},addBtn:function(){var e=this,t=this,i={},s={name:this.username,telephone:this.phone,repair_area_id:this.areaId,repair_type_id:this.typeId,content:this.textVal,photos:this.$refs.childUp.Photos},a=this.$weui.loading();if("repair"===this.type){var n={room_guid:this.houseId};l()(i,s,n),Object(c["a"])(i).then(function(i){a.hide(),0===i.code?(e.$store.commit("setReFresh",1),t.$router.push({name:"HouseRepair",query:{type:"repair"}})):e.$weui.alert(i.msg)})}else{var o={room_guid:this.houseId,relation_guid:this.$store.state.relationId};l()(i,s,o),Object(c["d"])(i).then(function(i){a.hide(),0===i.code?(e.$store.commit("setReFresh",1),t.$router.push({name:"HouseRepair",query:{type:"prorepair"}})):e.$weui.alert(i.msg)})}},onEditHandler:function(e){this.textVal=e,console.log(e)},getArea:function(){this.$router.push({name:"HouseArea",query:{dip:this.type}})},getProject:function(){this.$router.push({name:"HouseProject",query:{dip:this.type}})}}},d=u,p=(i("fd13"),i("2877")),h=Object(p["a"])(d,s,a,!1,null,"cec42ffe",null);t["default"]=h.exports},f037:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cells weui-cells_form mar_bott mar_top0 ",attrs:{id:"uploader"}},[i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__bd"},[i("div",{staticClass:"weui-uploader"},[i("div",{staticClass:"weui-uploader__hd"},[i("p",{staticClass:"weui-uploader__title titleImg"},[e._v("上传照片 "),e.isCount?i("span",{staticClass:"countImg"},[e._v("(最多5张)")]):i("span",{staticClass:"countImg"},[e._v("(非必选  最多8张)")])])]),i("div",{staticClass:"weui-uploader__bd"},[i("ul",{staticClass:"weui-uploader__files",attrs:{id:"uploaderCustomFiles"},on:{click:function(t){return e.handelGallery(t)}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.ishidden,expression:"ishidden"}],staticClass:"weui-uploader__input-box uploadImg"},[i("input",{staticClass:"weui-uploader__input",attrs:{id:"uploaderCustomInput",name:"img[]",type:"file",accept:"image/*",multiple:""}})])])])])])])},a=[],n=i("4455"),l=n["a"],o=(i("f368"),i("2877")),r=Object(o["a"])(l,s,a,!1,null,"7e27ba3f",null);t["a"]=r.exports},f368:function(e,t,i){"use strict";var s=i("c280"),a=i.n(s);a.a},fbd1:function(e,t,i){},fd13:function(e,t,i){"use strict";var s=i("25fb"),a=i.n(s);a.a}}]);