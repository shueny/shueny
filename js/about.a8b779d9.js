(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0be2":function(t,e,i){"use strict";var a=i("e227"),n=i.n(a);n.a},"3ab0":function(t,e,i){t.exports=i.p+"img/shueny2019.ab805263.jpg"},"4cde":function(t,e,i){t.exports=i.p+"img/africa_namibia.4eff83e9.jpg"},7394:function(t,e,i){"use strict";var a=i("8e67"),n=i.n(a);n.a},"8e67":function(t,e,i){},a857:function(t,e,i){"use strict";var a=i("b6fe"),n=i.n(a);n.a},b6fe:function(t,e,i){},b999:function(t,e,i){t.exports=i.p+"img/logo-shueny2.d531ede5.png"},c251:function(t,e,i){t.exports=i.p+"img/logo-s.b5574534.png"},e1d4:function(t,e,i){t.exports=i.p+"img/canada_northernlight.80951baa.jpg"},e227:function(t,e,i){},f01d:function(t,e,i){t.exports=i.p+"img/img_mask.b7bf080f.svg"},f820:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("TopHead"),i("div",{staticClass:"aboutMe pt-5"},[i("div",{staticClass:"container justify-content-center mt-5"},[i("div",{staticClass:"header mb-2"},[t._m(0),i("h1",{staticClass:"title"},[i("span",[t._v(t._s(t.name))]),i("b",{staticClass:"dot"},[i("font-awesome-icon",{attrs:{icon:"circle"}})],1),i("span",{staticClass:"ml-1"},[t._v(t._s(t.enName))])]),i("Contact"),i("p",{staticClass:"line line-grey"})],1),i("Skills",{attrs:{title:"技能"}})],1)]),i("ExperiencesList",{attrs:{title:"工作經歷"}}),i("Education",{attrs:{title:"學歷"}}),i("SpecialExperiences",{attrs:{title:"特殊經歷"}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"line line-grey"},[i("span",{staticClass:"subTitle col-md-4"},[t._v("The Resume of")])])}],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"fixed-top",class:{active:t.isActive},attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[t._v("Home")]),i("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),i("div",{staticClass:"topHead fixed-top"},[i("div",{staticClass:"topHead-sticky container-fluid p-0"},[i("ul",{staticClass:"d-flex justify-content-between mb-0"},[i("li",{staticClass:"topHead-item topHead-item--left"},[i("a",[i("font-awesome-icon",{attrs:{icon:"envelope"}})],1)]),i("li",{staticClass:"topHead-item"},[i("router-link",{staticClass:"logo",attrs:{to:"/"}},[i("img",{attrs:{src:t.imgLogoS,alt:"Shueny's Vue"}})])],1),i("li",{staticClass:"topHead-item topHead-item--right"},[i("a",{on:{click:function(e){t.isActive=!t.isActive}}},[i("font-awesome-icon",{attrs:{icon:"ellipsis-h"}})],1)])])])])])},o=[],c=i("43e2"),l=i.n(c),r=i("6124"),u=i.n(r),p=i("c251"),m=i.n(p),d={name:"TopHead",data:function(){return{isActive:!1,imgLogo:l.a,imgBg:u.a,imgLogoS:m.a,logo:"../assets/images/logo-web.png",icons:["bars","envelope"],contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}],worksLink:[{iconName:"github",link:"https://github.com/shueny"},{iconName:"github-alt",link:"https://shueny.github.io/"},{iconName:"wordpress",link:"https://mango-pizza.life"},{iconName:"codepen",link:"https://codepen.io/Shueny/"}]}}},g=d,f=(i("0be2"),i("2877")),b=Object(f["a"])(g,s,o,!1,null,"4ac526d8",null),v=b.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact mb-1"},[i("div",{staticClass:"position-relative"}),i("div",{staticClass:"contact-data"},[i("div",{staticClass:"bg-img bg-img--me",style:{backgroundImage:"url("+t.imgMe+")"}})])])},_=[],C=i("3ab0"),k=i.n(C),x=i("f01d"),y=i.n(x),w=i("b999"),E=i.n(w),S={name:"Contact",props:{msg:String},data:function(){return{imgMe:k.a,mask:y.a,imgBg:u.a,imgLogo2:E.a,contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}],links:[{iconName:"github",link:"https://github.com/shueny"},{iconName:"github-alt",link:"https://shueny.github.io/"},{iconName:"wordpress",link:"https://mango-pizza.life"},{iconName:"codepen",link:"https://codepen.io/Shueny/"}]}}},H=S,N=(i("7394"),Object(f["a"])(H,h,_,!1,null,"40a119e7",null)),j=N.exports,L=i("9086"),A=i("f2cd"),T=i("5b47"),$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v(" "+t._s(t.title))]),i("div",{staticClass:"exp-special"},t._l(t.specialExperience,function(e){return i("div",{key:e.index,staticClass:"exp-special-list"},[i("img",{attrs:{src:e.img,alt:e.item}}),i("h5",[t._v(t._s(e.title))]),i("p",{staticClass:"during"},[t._v(t._s(e.during))])])}),0)])},z=[],O=i("4cde"),M=i.n(O),B=i("e1d4"),J=i.n(B),I={name:"SpecialExperiences",props:["title"],data:function(){return{specialExperience:[{title:"非洲野生動物志工",during:"2013/5/31-2013/6/14",img:M.a},{title:"加拿大打工度假",during:"2012/4-2013/2",img:J.a}]}}},R=I,V=Object(f["a"])(R,$,z,!1,null,null,null),W=V.exports,q={name:"about",components:{TopHead:v,Contact:j,Skills:L["a"],Education:T["a"],ExperiencesList:A["a"],SpecialExperiences:W},data:function(){return{name:"王舜瑩",enName:"Shueny Wang"}}},D=q,F=(i("a857"),Object(f["a"])(D,a,n,!1,null,null,null));e["default"]=F.exports}}]);
//# sourceMappingURL=about.a8b779d9.js.map