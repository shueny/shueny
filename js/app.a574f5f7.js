(function(e){function t(t){for(var n,a,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)a=r[u],s[a]&&d.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,a=1;a<i.length;a++){var r=i[a];0!==s[r]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=i[0]))}return e}var n={},a={app:0},s={app:0},o=[];function r(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b532cd4f"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(e){var t=[],i={about:1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=new Promise(function(t,i){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"a8e3ff36"}[e]+".css",s=l.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===n||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),i(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){a[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,i){n=s[e]=[t,i]});t.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e),c=function(t){u.onerror=u.onload=null,clearTimeout(d);var i=s[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,i[1](o)}s[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(i,n,function(t){return e[t]}.bind(null,n));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/shueny/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"07f2":function(e,t,i){},"09ba":function(e,t,i){e.exports=i.p+"img/logo-name.27408f6d.png"},"325c":function(e,t,i){e.exports=i.p+"img/momo-brand.682bb351.jpg"},"43e2":function(e,t,i){e.exports=i.p+"img/logo-shueny.b9351e33.png"},4885:function(e,t,i){e.exports=i.p+"img/head-bg.4c81ae69.jpg"},"4a09":function(e,t,i){"use strict";var n=i("07f2"),a=i.n(n);a.a},"4a89":function(e,t,i){},"509b":function(e,t,i){"use strict";var n=i("e5ec"),a=i.n(n);a.a},"521c":function(e,t,i){"use strict";var n=i("b66d"),a=i.n(n);a.a},5382:function(e,t,i){e.exports=i.p+"img/vue-todo-1.737944f2.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=i("ecee"),s=i("c074"),o=i("42b9"),r=i("ad3d"),l=i("9f7b"),c=i.n(l),u=i("0a89"),d=i.n(u),p=i("0edc"),m=i.n(p),f=i("d740"),v=i.n(f),b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},g=[],h={name:"App",metaInfo:{title:"Shueny's Resume",titleTemplate:null,link:[{rel:"favicon",href:"favicon.ico"}]}},y=h,k=(i("5c0b"),i("2877")),C=Object(k["a"])(y,b,g,!1,null,null,null),w=C.exports,S=i("8c4f"),_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home",attrs:{id:"home"}},[i("NavBar",{attrs:{data:this.activeBlock}}),i("KVTyper",{attrs:{title:"Hi! I'm Shueny Wang"}}),i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:e.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"about"}},[i("AboutMe",{attrs:{title:"About Me."}})],1),i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:e.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"skill"}},[i("Skills",{attrs:{title:"Skills.",subTitle:"技術"}})],1),i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:e.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"work"}},[i("Works",{attrs:{title:"Work",subTitle:"作品集"}})],1),i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:e.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"section section-bg waypoint",attrs:{id:"experienceandeducation"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("ExperiencesList",{attrs:{title:"Experiences.",subTitle:"經歷"}})],1),i("div",{staticClass:"col-md-6"},[i("Education",{attrs:{title:"Education.",subTitle:"學歷"}})],1)])])])],1)},x=[],M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"nav-wrapper effect",class:{"nav-sticky":e.showNavbar}},[i("nav",{staticClass:"navbar-custom"},[i("router-link",{staticClass:"navbar-brand effect font-weight-bold",attrs:{to:"/"}},[e._v("Shueny")]),i("div",{staticClass:"navbar-header"},[i("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bm-navbar","aria-expanded":"false"}},[i("span",{staticClass:"sr-only"},[e._v("Toggle navigation")]),i("font-awesome-icon",{attrs:{icon:"bars"}})],1)])],1),i("div",{staticClass:"navbar-collapse navbar-right effect in",attrs:{id:"bm-navbar","aria-expanded":"false"}},[i("ul",{staticClass:"nav navbar-nav"},e._l(e.sectionLink,function(t,n){return i("li",{key:n,attrs:{id:"nav-"+t.link.toLowerCase()}},[i("a",{staticClass:"scroll effect p-2",class:{active:t.link.toLowerCase()===e.data},attrs:{href:"#"+t.link.toLowerCase(),"data-speed":t.scrollSpeed}},[e._v(e._s(t.item))])])}),0)])])},T=[],j=i("43e2"),O=i.n(j),E=i("6124"),L=i.n(E),N=i("7da1"),P=i.n(N),A={name:"NavBar",props:["data"],data:function(){return{showNavbar:!1,lastScrollPosition:0,isActive:!1,imgLogo:O.a,imgBg:L.a,imgLogoS:P.a,logo:"../assets/images/logo-web.png",icons:["bars","envelope"],contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}],sectionLink:[{item:"About",link:"About",scrollSpeed:800},{item:"Skill",link:"Skill",scrollSpeed:800},{item:"Work",link:"Work",scrollSpeed:1400},{item:"Experience & Education",link:"experienceAndEducation",scrollSpeed:1400}]}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("kvTyper").offsetHeight;return e<0?this.showNavbar=!1:e<t?this.showNavbar=!1:(this.showNavbar=e>t,void(this.lastScrollPosition=e))}}},D=A,I=Object(k["a"])(D,M,T,!1,null,null,null),B=I.exports,W=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"work section spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"work"}}),i("h1",{staticClass:"title"},[e._v(e._s(e.title))]),i("h2",{staticClass:"subTitle"},[e._v(e._s(e.subTitle))]),i("div",{staticClass:"container work_list"},[i("ul",{},[i("div",{staticClass:"row mx-auto"},e._l(e.works,function(t){return i("li",{key:t.index,staticClass:"col-md-4 p-4 wow slideInUp",attrs:{"data-wow-duration":"0.5s","data-wow-delay":"0.5s"}},[i("a",{staticClass:"btn-link",attrs:{href:t.link,target:"_blank"}},[i("img",{attrs:{src:t.image,alt:t.title}}),i("div",{staticClass:"text-left text"},[i("h3",{staticClass:"title mt-3"},[e._v(e._s(t.title))]),i("div",{staticClass:"mb-2"},e._l(t.tags,function(n,a){return i("span",{staticClass:"mx-1 d-inline-block"},[e._v("\n                    "+e._s(n)+e._s(a+1<t.tags.length?", ":"")+"\n                  ")])}),0)]),i("div",{staticClass:"description"},[i("ul",{staticClass:"ul-list"},e._l(t.description,function(t){return i("li",{staticClass:"item ul-list-item"},[e._v("\n                    "+e._s(t)+"\n                  ")])}),0)])]),i("a",{staticClass:"u-mobile-only btn-link",attrs:{href:t.link}},[e._v(e._s(t.link))])])}),0)])])])},H=[],V=i("bc1b"),G=i("325c"),U=i.n(G),$=i("9866"),F=i.n($),R=i("803b"),z=i.n(R),Q=i("812e"),J=i.n(Q),q=i("5382"),K=i.n(q),X={name:"Works",props:["title","subTitle"],data:function(){return{works:[{title:"MOMOSHOP 品牌旗艦館",tags:["HTML","CSS3","Javascript","jQuery"],image:U.a,link:"https://www.momoshop.com.tw/brand/Main.jsp",description:["依照設計的畫面，切版並重寫 CSS",'使用 jQuery 撰寫 Menu 中的 "依字母 & 依注音" 的切換，在此遇到畫面中有另一個子畫面且子畫面中點選後要滾動、定位的挑戰']},{title:"MOMOSHOP (Desktop)",tags:["HTML","CSS3","Javascript","jQuery"],image:F.a,link:"https://www.momoshop.com.tw/main/Main.jsp",description:["MOMOSHOP 本站桌機版的首頁區塊、商品頁、分類頁、購物車、會員中心...等改版製作"]},{title:"MOMOSHOP (Mobile)",tags:["HTML","CSS3","Javascript","jQuery"],image:z.a,link:"https://m.momoshop.com.tw/main.momo",description:["MOMOSHOP 本站手機版的首頁區塊、商品頁、分類頁、購物車、會員中心...等改版製作",""]},{title:"爬格子",tags:["jQuery","SVG"],image:J.a,link:"https://shueny.github.io/climbstairs-game/",description:["一個大家每當無法決定事情的時候必玩的小遊戲","在框框中輸入直線個數(即幾個選項)並按下 Enter 鍵後便隨機產生相對應的橫線，點選任一個 momoco 的頭，會自動沿著線走到終點","未來可以再修改增加可以自己輸入選項，根據選項的個數產生直線。也可以與資料庫連接，記下曾經使用的記錄"]},{title:"ToDo List",tags:["Vue Cli 3","Bootstrap","AwesomeFont","ES6"],image:K.a,link:"https://shueny.github.io/vue-todolist-1/",description:["熟悉 Vue.js 從學習寫 Todo List 開始","學習如何使用 Vue.js 建置 Project、Vue.js 的語法、如何使用 Plugins、熟習 ES6 的寫法...等等","使用 localStorge 做 List 的存取，可以新增資料、切換狀態、標記、刪除資料、新增該項目的 comment","下一版考慮與 MongoDB 串接，把資料存到資料庫裡"]}]}}},Y=X,Z=Object(k["a"])(Y,W,H,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"kv kv-typer",style:{backgroundImage:"url("+e.imgPicBg+")"},attrs:{id:"kvTyper"}},[i("div",{staticClass:"page-table"},[i("div",{staticClass:"table-cell text-center"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[e._v(e._s(e.title))]),i("h2",{staticClass:"typer-title"},[i("vue-typer",{attrs:{text:["I am a Front-End Developer","Photography and Travel lover"]}})],1),e._m(0)])])])])},ie=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"scroll home-s-btn hor-center",attrs:{href:"#about"}},[i("span",{staticClass:"dot center"})])}],ne=i("e956"),ae=i("4885"),se=i.n(ae),oe=i("09ba"),re=i.n(oe),le={name:"KVTyper",props:["title"],components:{VueTyper:ne["VueTyper"]},data:function(){return{imgPicBg:se.a,imgName:re.a,contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}],worksLink:[{iconName:"github",link:"https://github.com/shueny"},{iconName:"github-alt",link:"https://shueny.github.io/"},{iconName:"wordpress",link:"https://mango-pizza.life"},{iconName:"codepen",link:"https://codepen.io/Shueny/"}]}}},ce=le,ue=(i("ee30"),i("521c"),Object(k["a"])(ce,te,ie,!1,null,"83367608",null)),de=ue.exports,pe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"aboutMe section spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"about"}}),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-md-6"},[i("div",{staticClass:"about-content text-left"},[i("h1",{staticClass:"title mb-2"},[e._v(e._s(e.title))]),i("h2",{staticClass:"subTitle"},[e._v(e._s(e.aboutData.subTitle))]),e._l(e.aboutData.description,function(t,n){return i("p",{key:n},[e._v("\n            "+e._s(t)+"\n          ")])}),i("ContactMe"),i("SocialMedia")],2)]),i("div",{staticClass:"col-xs-12 col-md-6"})])])])},me=[],fe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contactMe"},[i("ul",e._l(e.contact,function(t,n){return i("li",{key:t.index,staticClass:"text-left"},[i("span",{},[i("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:t.icon}}),e._v("\n      "+e._s(t.data)+"\n      ")],1)])}),0)])},ve=[],be={name:"ContactMe",data:function(){return{contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}]}}},ge=be,he=(i("8ecd"),Object(k["a"])(ge,fe,ve,!1,null,"2b68cde2",null)),ye=he.exports,ke=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"social-icon"},[i("ul",e._l(e.socialMedia,function(t){return i("li",{key:t.index,staticClass:"social-icon-item d-inline-flex mr-2"},[i("a",{staticClass:"btn btn-link",attrs:{href:t.link,target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab",t.iconName]}}),e._v(e._s(t.item)+"\n      ")],1)])}),0)])},Ce=[],we={name:"SocialMedia",data:function(){return{socialMedia:[{iconName:"github",link:"https://github.com/shueny"},{iconName:"github-alt",link:"https://shueny.github.io/"},{iconName:"wordpress",link:"https://mango-pizza.life"},{iconName:"codepen",link:"https://codepen.io/Shueny/"}]}}},Se=we,_e=(i("9ff2"),Object(k["a"])(Se,ke,Ce,!1,null,"8452d02a",null)),xe=_e.exports,Me=i("b658"),Te={props:["title"],components:{ContactMe:ye,SocialMedia:xe},data:function(){return{aboutData:Me}}},je=Te,Oe=(i("85ce"),Object(k["a"])(je,pe,me,!1,null,"81fcfc9a",null)),Ee=Oe.exports,Le=i("9086"),Ne=i("5b47"),Pe=i("f2cd"),Ae=new V["WOW"]({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0});Ae.init();var De={name:"home",components:{NavBar:B,Works:ee,KVTyper:de,AboutMe:Ee,Skills:Le["a"],Education:Ne["a"],ExperiencesList:Pe["a"]},metaInfo:{title:"Shueny's Vue",titleTemplate:null,link:[{rel:"favicon",href:"favicon.ico"}]},data:function(){return{intersectionOptions:{root:document.querySelector("#app"),rootMargin:"0px 0px 0px 0px",threshold:0},activeBlock:"about"}},methods:{logOne:function(e){var t=e.el,i=e.going,n=(e.direction,t.getAttribute("id"));"in"===i&&(this.activeBlock=t.getAttribute("id"),document.getElementById(n).classList.add("active")),"out"===i&&document.getElementById(n).classList.remove("active")}}},Ie=De,Be=Object(k["a"])(Ie,_,x,!1,null,null,null),We=Be.exports;n["default"].use(S["a"]),n["default"].use(d.a);var He=new S["a"]({mode:"history",base:"/shueny/",routes:[{path:"/",name:"home",component:We},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}]}),Ve=i("2f62");n["default"].use(Ve["a"]);var Ge=new Ve["a"].Store({state:{},mutations:{},actions:{}}),Ue=i("9483");Object(Ue["a"])("".concat("/shueny/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});i("4989"),i("ab8b"),i("e9a2"),i("77ed");a["c"].add(s["b"],s["f"],s["e"],o["a"],s["d"],s["c"],s["h"],s["g"],s["i"],s["a"]),n["default"].component("font-awesome-icon",r["a"]),n["default"].config.productionTip=!1,n["default"].use(c.a),n["default"].use(d.a),n["default"].use(m.a),n["default"].use(v.a),new n["default"]({router:He,store:Ge,render:function(e){return e(w)}}).$mount("#app")},"5b47":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"education text-left spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"education"}}),i("h1",{staticClass:"title"},[e._v(e._s(e.title))]),i("h2",{staticClass:"subTitle"},[e._v(e._s(e.subTitle))]),i("div",{staticClass:"exp-special"},[i("ul",{staticClass:"ul-list"},e._l(e.education,function(t){return i("li",{key:t.index,staticClass:"item ul-list-item wow slideInUp"},[i("h5",[e._v(e._s(t.department)+" | "+e._s(t.during))]),i("h6",[e._v(e._s(t.title))]),i("ul",{staticClass:"ul-list--inner"},e._l(t.about,function(t){return i("li",{key:t.index,staticClass:"item"},[e._v(e._s(t))])}),0)])}),0)])])},a=[],s={name:"Education",props:["title","subTitle"],data:function(){return{education:[{title:"國立臺南大學",during:"2011/8-2009/9",department:"數位學習科技所",about:["運用資訊科技於教材開發及教學設計,改善教學品質並提升學習成效","論文: 以Unity的架構並用3D Max建模,製作出一個虛擬的博物館導覽系統,再對此系統做 UI/UX 及開發技術的評估"]},{title:"實踐大學",during:"2009/6-2005/9",department:"資訊模擬與設計系",about:["網頁設計、平面設計、動畫設計、電腦程式語法及資料庫","專題: 用C#及資料庫製作電子商務網站"]}]}}},o=s,r=(i("509b"),i("2877")),l=Object(r["a"])(o,n,a,!1,null,"33fe7728",null);t["a"]=l.exports},"5c0b":function(e,t,i){"use strict";var n=i("5e27"),a=i.n(n);a.a},"5e27":function(e,t,i){},6124:function(e,t,i){e.exports=i.p+"img/header-bg.76033f31.jpg"},"6db8":function(e,t,i){},"7da1":function(e,t,i){e.exports=i.p+"img/Shueny.df503540.png"},"803b":function(e,t,i){e.exports=i.p+"img/momoshop-mobile.7fabd96c.jpg"},"812e":function(e,t,i){e.exports=i.p+"img/climb-stairs.2303ace6.jpg"},"85ce":function(e,t,i){"use strict";var n=i("6db8"),a=i.n(n);a.a},"8ecd":function(e,t,i){"use strict";var n=i("4a89"),a=i.n(n);a.a},9086:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"skill section section-bg spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"skill"}}),i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[e._v(e._s(e.title))]),i("h2",{staticClass:"subTitle"},[e._v(e._s(e.subTitle))]),i("div",{staticClass:"row my-4"},e._l(e.skills,function(t,n){return i("div",{key:t.index,staticClass:"col-md-6 mb-4 wow bounceIn animated"},[i("div",{staticClass:"skill-item"},[i("span",{staticClass:"icon d-inline-block mb-3"},[i("font-awesome-icon",{attrs:{icon:t.icon}})],1),i("h4",{staticClass:"skill-item-title font-weight-bold"},[e._v(e._s(t.title))]),i("p",{staticClass:"line-s my-2 mx-auto"}),i("h6",{staticClass:"my-3"},e._l(t.skillList,function(n,a){return i("span",{staticClass:"mx-1 d-inline-block"},[e._v("\n              "+e._s(n)+e._s(a+1<t.skillList.length?", ":"")+"\n            ")])}),0),i("div",{staticClass:"skill-item-text"},[i("ul",{staticClass:"ul-list ul-list--none"},e._l(t.info,function(t){return i("li",{staticClass:"item ul-list-item"},[e._v("\n                "+e._s(t)+"\n              ")])}),0)])])])}),0)])])},a=[],s=(i("6c7b"),{name:"Skills",props:{title:String,subTitle:String},data:function(){return{striped:!0,animate:!0,skills:[{icon:"desktop",title:"Frontend Development",skillList:["HTML5","CSS3","JavaScript(ES6)","jQuery","Liquid","Vue.js","React"],info:["使用 HTML5、CSS3、SCSS 獨立切版或套用 Bootstrap","搭配 JavaScript 或 jQuery 製作各式動畫效果","熟悉 Liquid 語法，開發各種樣版或新功能、新畫面","以 Ajax 串接 API 資料","尚懂 Vue.js，目標學習建置各小型專案來更熟悉 Vue.js ","曾學習過 React"]},{icon:"server",title:"Backend Development",skillList:["Node.js","Express.js","MongoDB","PHP","MySQL"],info:["曾經學習過及使用過 PHP & MySQL","目前學習並使用 Node.js, Express.js, MongoDB 來建置小型專案"]},{icon:"palette",title:"Web Design",skillList:["Photoshop","Illustrator","Adobe XD"],info:["使用 Ps 進行圖片處理，製作簡易網頁廣告、gif 等","使用 Ai 處理向量格式圖形、繪製向量圖檔、SVG 等","Adobe XD 製作基本的 wireframe"]},{icon:"terminal",title:"Others",skillList:["Git","Webpack"],info:["熟悉 Git 常用的基本指令","使用 Webpack 建置小型專案"]}],webSkill:[{item:"HTML5, CSS3",data:95},{item:"SCSS",data:80},{item:"Bootstrap",data:85},{item:"Javascript",data:75},{item:"jQuery",data:90},{item:"Vue.js",data:40},{item:"Node.js",data:5},{item:"Webpack",data:25}],otherSkill:["RWD","Git","SEO","GA","GTM"],design:["Zeplin","XD","Photoshop","Illustrator"],language:["中文 / 台語 精通","英文 (TOEIC 綠色證照)"]}},computed:{webSkillGroups:function(){var e=this;return Array(this.webSkill.length/3).fill().map(function(t,i){return[e.webSkill[2*i],e.webSkill[2*i+1]]})}},methods:{}}),o=s,r=i("2877"),l=Object(r["a"])(o,n,a,!1,null,null,null);t["a"]=l.exports},9866:function(e,t,i){e.exports=i.p+"img/momoshop-index.9a213bd1.jpg"},"9ff2":function(e,t,i){"use strict";var n=i("b879"),a=i.n(n);a.a},b658:function(e){e.exports={name:"王舜瑩",enName:"Shueny Wang",title:"",subTitle:"I'm Shueny Wang / 王舜瑩",description:["I am a web designer and developer from Taiwan.","About 6 years of experience as a frontend developer and 3 years as a designer. Participate in large-scale e-commerce platform, Vehicle SOC platform and B2B ERP system development."],contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}],links:[{iconName:"github",link:"https://github.com/shueny"},{iconName:"github-alt",link:"https://shueny.github.io/"},{iconName:"wordpress",link:"https://mango-pizza.life"},{iconName:"codepen",link:"https://codepen.io/Shueny/"}]}},b66d:function(e,t,i){},b879:function(e,t,i){},e5ec:function(e,t,i){},ee30:function(e,t,i){"use strict";var n=i("f757"),a=i.n(n);a.a},f2cd:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"experience text-left spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"experience"}}),i("h1",{staticClass:"title"},[e._v(e._s(e.title))]),i("h2",{staticClass:"subTitle"},[e._v(e._s(e.subTitle))]),i("div",{},[i("ul",{staticClass:"ul-list"},e._l(e.experiences,function(t){return i("li",{key:t.index,staticClass:"item ul-list-item wow slideInUp"},[i("h5",[e._v(e._s(t.title)+" | "+e._s(t.during))]),i("h6",[e._v(e._s(t.company))]),i("ul",{staticClass:"ul-list--inner"},e._l(e.experiences,function(t,n){return i("li",{key:t.index,staticClass:"item"},[e._v("\n            "+e._s(t.list[n])+"\n          ")])}),0)])}),0)])])},a=[],s={name:"ExperiencesList",props:["title","subTitle"],data:function(){return{experiences:[{company:"Trend Micro",title:"Senior Front-End Developer",during:"2021/9-present",list:["Implemented VSOC (Vehicle SOC) platform using React.js","Implemented Campaign website by Next.js and tailwindcss","Maintain the finite state-machine model in building complex UI components or workflows by XState","Tracked system through Google Tag Manager, Google Analytics and Hotjar"]},{company:"Synttro",title:"Senior Front-End Developer",during:"2020/5 - 2021/9",list:["Developed a B2B Enterprise Team Cooperation system, including Project Management, Meeting Minute System and BIM/Forge Viewer Management System","Established product design specifications, user interface and UI flow","Improved the development process, providing UI Mockups before development","Optimized user interface and operation flow through user feedbacks","Used Puppeteer for end to end testing"]},{company:"Softall",title:"Front-End Developer",during:"2019/8-2020/3",list:["Restructured Event page from HTML to React.js and setup a copywriting principles by JSON for marketing","Improved process of setting up banner in Home page, developing a banner setup function in B2B system for Admin","Solved the Responsive Web Design problem of CSS/HTML layout and cross-browser compatibility","Developed a new online resume product using React.js, TypeScript","Used storybook to create project components"]},{company:"Citiesocial 任開媒體",title:"Front-End Developer",during:"2018/5-2019/8",list:["Developed member system by RESTful APIs and third-party web services APIs","Optimized the marketing setup process and provide more flexible marketing tools for Marketing on Shopify","Created more template modules for Marketing Event","Optimized existing architecture to reduces capacity and increases 90% speed","Improved user experience by tracking user behavior on Hotjar and analyzed","Set Appier or others tracking SDK for Marketing","Set Google Analytics Events in Google Tag Manager to tracking event effectiveness","Clarified and solved problems immediately","Tracked and researched web performance with Google Analytics and Google Speed"]},{company:"MOMO Fubon Multimedia Technology Co., Ltd. (富邦媒體股份有限公司)",title:"Engineer",during:"2016/8-2018/5",list:["Developed refactoring Desktop and Mobile user interface for home page","Solved the problem of CSS/HTML layout and cross-browser compatibility","Parsed keywords and setting up HTML meta tags to increase SEO","Tracked and researched web performance with Google Analytics and Google Speed"]},{company:"Skyway 天擎旅行社",title:"Designer",during:"2015/9-2016/7",list:["Updated and maintained travel products on website","Designed banners and all of the travel routes products, like DM handbook...etc.","Planed and layout the exhibition","Contacted with printers or other manufacturers"]},{company:"新曜有限公司",title:"Designer and Purchasing Assistant",during:"2013/10-2015/8",list:["CIS design","Products photography","Contacted with foreign customers by emails","Processed overseas order-related business"]},{company:"S.H.I.T.來自臺灣的獨特內斂",title:"Designer",during:"2009/7-2013/4",list:["Implemented website revision by flash","Maintained and updated products on website"]}]}}},o=s,r=(i("4a09"),i("2877")),l=Object(r["a"])(o,n,a,!1,null,"6ad3c506",null);t["a"]=l.exports},f757:function(e,t,i){}});
//# sourceMappingURL=app.a574f5f7.js.map