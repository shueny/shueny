(function(t){function e(e){for(var a,n,l=e[0],r=e[1],c=e[2],u=0,d=[];u<l.length;u++)n=l[u],s[n]&&d.push(s[n][0]),s[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,n=1;n<i.length;n++){var l=i[n];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},s={app:0},o=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a8b779d9"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i={about:1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise(function(e,i){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"a8e3ff36"}[t]+".css",s=r.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===a||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],p.parentNode.removeChild(p),i(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){n[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,i){a=s[t]=[e,i]});e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=l(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var i=s[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");o.type=a,o.request=n,i[1](o)}s[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/shueny/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"09ba":function(t,e,i){t.exports=i.p+"img/logo-name.27408f6d.png"},"1d97":function(t,e,i){},"23fa":function(t,e,i){"use strict";var a=i("e1f3"),n=i.n(a);n.a},"325c":function(t,e,i){t.exports=i.p+"img/momo-brand.682bb351.jpg"},"43e2":function(t,e,i){t.exports=i.p+"img/logo-shueny.b9351e33.png"},4885:function(t,e,i){t.exports=i.p+"img/head-bg.4c81ae69.jpg"},"4cfe":function(t,e,i){"use strict";var a=i("aa99"),n=i.n(a);n.a},"509b":function(t,e,i){"use strict";var a=i("e5ec"),n=i.n(a);n.a},"521c":function(t,e,i){"use strict";var a=i("b66d"),n=i.n(a);n.a},5382:function(t,e,i){t.exports=i.p+"img/vue-todo-1.737944f2.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),n=i("ecee"),s=i("c074"),o=i("42b9"),l=i("ad3d"),r=i("b528"),c=i.n(r),u=i("9f7b"),d=i.n(u),p=i("0a89"),m=i.n(p),f=i("0edc"),v=i.n(f),b=i("d740"),h=i.n(b),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},C=[],k={name:"App",metaInfo:{title:"Shueny's Resume",titleTemplate:null,link:[{rel:"favicon",href:"favicon.ico"}]}},y=k,w=(i("5c0b"),i("2877")),_=Object(w["a"])(y,g,C,!1,null,null,null),S=_.exports,x=i("8c4f"),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",attrs:{id:"home"}},[i("NavBar",{attrs:{data:this.activeBlock}}),i("KVTyper",{attrs:{title:"Hi! I'm Shueny Wang"}}),i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"about"}},[i("AboutMe",{attrs:{title:"About Me."}})],1),i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"skill"}},[i("Skills",{attrs:{title:"Skills.",subTitle:"技術"}})],1),i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"work"}},[i("Works",{attrs:{title:"Work",subTitle:"作品集"}})],1),i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"section section-bg waypoint",attrs:{id:"experienceandeducation"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("ExperiencesList",{attrs:{title:"Experiences.",subTitle:"經歷"}})],1),i("div",{staticClass:"col-md-6"},[i("Education",{attrs:{title:"Education.",subTitle:"學歷"}})],1)])])])],1)},O=[],T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-wrapper effect",class:{"nav-sticky":t.showNavbar}},[i("nav",{staticClass:"navbar-custom"},[i("router-link",{staticClass:"navbar-brand effect font-weight-bold",attrs:{to:"/"}},[t._v("Shueny")]),i("div",{staticClass:"navbar-header"},[i("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bm-navbar","aria-expanded":"false"}},[i("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),i("font-awesome-icon",{attrs:{icon:"bars"}})],1)])],1),i("div",{staticClass:"navbar-collapse navbar-right effect in",attrs:{id:"bm-navbar","aria-expanded":"false"}},[i("ul",{staticClass:"nav navbar-nav"},t._l(t.sectionLink,function(e,a){return i("li",{key:a,attrs:{id:"nav-"+e.link.toLowerCase()}},[i("a",{staticClass:"scroll effect p-2",class:{active:e.link.toLowerCase()===t.data},attrs:{href:"#"+e.link.toLowerCase(),"data-speed":e.scrollSpeed}},[t._v(t._s(e.item))])])}),0)])])},M=[],E=i("43e2"),L=i.n(E),N=i("6124"),A=i.n(N),P=i("7da1"),W=i.n(P),B={name:"NavBar",props:["data"],data:function(){return{showNavbar:!1,lastScrollPosition:0,isActive:!1,imgLogo:L.a,imgBg:A.a,imgLogoS:W.a,logo:"../assets/images/logo-web.png",icons:["bars","envelope"],contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}],sectionLink:[{item:"About",link:"About",scrollSpeed:800},{item:"Skill",link:"Skill",scrollSpeed:800},{item:"Work",link:"Work",scrollSpeed:1400},{item:"Experience & Education",link:"experienceAndEducation",scrollSpeed:1400}]}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop,e=document.getElementById("kvTyper").offsetHeight;return t<0?this.showNavbar=!1:t<e?this.showNavbar=!1:(this.showNavbar=t>e,void(this.lastScrollPosition=t))}}},I=B,D=Object(w["a"])(I,T,M,!1,null,null,null),H=D.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"work section spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"work"}}),i("h1",{staticClass:"title"},[t._v(t._s(t.title))]),i("h2",{staticClass:"subTitle"},[t._v(t._s(t.subTitle))]),i("div",{staticClass:"container work_list"},[i("ul",{},[i("div",{staticClass:"row mx-auto"},t._l(t.works,function(e){return i("li",{key:e.index,staticClass:"col-md-4 p-4 wow slideInUp",attrs:{"data-wow-duration":"0.5s","data-wow-delay":"0.5s"}},[i("a",{staticClass:"btn-link",attrs:{href:e.link,target:"_blank"}},[i("img",{attrs:{src:e.image,alt:e.title}}),i("div",{staticClass:"text-left text"},[i("h3",{staticClass:"title mt-3"},[t._v(t._s(e.title))]),i("div",{staticClass:"mb-2"},t._l(e.tags,function(a,n){return i("span",{staticClass:"mx-1 d-inline-block"},[t._v("\n                    "+t._s(a)+t._s(n+1<e.tags.length?", ":"")+"\n                  ")])}),0)]),i("div",{staticClass:"description"},[i("ul",{staticClass:"ul-list"},t._l(e.description,function(e){return i("li",{staticClass:"item ul-list-item"},[t._v("\n                    "+t._s(e)+"\n                  ")])}),0)])]),i("a",{staticClass:"u-mobile-only btn-link",attrs:{href:e.link}},[t._v(t._s(e.link))])])}),0)])])])},$=[],Q=i("bc1b"),J=i("325c"),G=i.n(J),U=i("9866"),q=i.n(U),F=i("803b"),R=i.n(F),X=i("812e"),z=i.n(X),K=i("5382"),Y=i.n(K),Z={name:"Works",props:["title","subTitle"],data:function(){return{works:[{title:"MOMOSHOP 品牌旗艦館",tags:["HTML","CSS3","Javascript","jQuery"],image:G.a,link:"https://www.momoshop.com.tw/brand/Main.jsp",description:["依照設計的畫面，切版並重寫 CSS",'使用 jQuery 撰寫 Menu 中的 "依字母 & 依注音" 的切換，在此遇到畫面中有另一個子畫面且子畫面中點選後要滾動、定位的挑戰']},{title:"MOMOSHOP (Desktop)",tags:["HTML","CSS3","Javascript","jQuery"],image:q.a,link:"https://www.momoshop.com.tw/main/Main.jsp",description:["MOMOSHOP 本站桌機版的首頁區塊、商品頁、分類頁、購物車、會員中心...等改版製作"]},{title:"MOMOSHOP (Mobile)",tags:["HTML","CSS3","Javascript","jQuery"],image:R.a,link:"https://m.momoshop.com.tw/main.momo",description:["MOMOSHOP 本站手機版的首頁區塊、商品頁、分類頁、購物車、會員中心...等改版製作",""]},{title:"爬格子",tags:["jQuery","SVG"],image:z.a,link:"https://shueny.github.io/climbstairs-game/",description:["一個大家每當無法決定事情的時候必玩的小遊戲","在框框中輸入直線個數(即幾個選項)並按下 Enter 鍵後便隨機產生相對應的橫線，點選任一個 momoco 的頭，會自動沿著線走到終點","未來可以再修改增加可以自己輸入選項，根據選項的個數產生直線。也可以與資料庫連接，記下曾經使用的記錄"]},{title:"ToDo List",tags:["Vue Cli 3","Bootstrap","AwesomeFont","ES6"],image:Y.a,link:"https://shueny.github.io/vue-todolist-1/",description:["熟悉 Vue.js 從學習寫 Todo List 開始","學習如何使用 Vue.js 建置 Project、Vue.js 的語法、如何使用 Plugins、熟習 ES6 的寫法...等等","使用 localStorge 做 List 的存取，可以新增資料、切換狀態、標記、刪除資料、新增該項目的 comment","下一版考慮與 MongoDB 串接，把資料存到資料庫裡"]}]}}},tt=Z,et=Object(w["a"])(tt,V,$,!1,null,null,null),it=et.exports,at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"kv kv-typer",style:{backgroundImage:"url("+t.imgPicBg+")"},attrs:{id:"kvTyper"}},[i("div",{staticClass:"page-table"},[i("div",{staticClass:"table-cell text-center"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v(t._s(t.title))]),i("h2",{staticClass:"typer-title"},[i("vue-typer",{attrs:{text:["I am a Front-End Developer","Photography and Travel lover"]}})],1),t._m(0)])])])])},nt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"scroll home-s-btn hor-center",attrs:{href:"#about"}},[i("span",{staticClass:"dot center"})])}],st=i("e956"),ot=i("4885"),lt=i.n(ot),rt=i("09ba"),ct=i.n(rt),ut={name:"KVTyper",props:["title"],components:{VueTyper:st["VueTyper"]},data:function(){return{imgPicBg:lt.a,imgName:ct.a,contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}],worksLink:[{iconName:"github",link:"https://github.com/shueny"},{iconName:"github-alt",link:"https://shueny.github.io/"},{iconName:"wordpress",link:"https://mango-pizza.life"},{iconName:"codepen",link:"https://codepen.io/Shueny/"}]}}},dt=ut,pt=(i("ee30"),i("521c"),Object(w["a"])(dt,at,nt,!1,null,"83367608",null)),mt=pt.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"aboutMe section spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"about"}}),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-md-6"},[i("div",{staticClass:"about-content text-left"},[i("h1",{staticClass:"title mb-2"},[t._v(t._s(t.title))]),i("h2",{staticClass:"subTitle"},[t._v("I'm Shueny Wang / 王舜瑩")]),i("p",{staticClass:"my-2"},[t._v("I am a web designer and developer from Taiwan.")]),i("p",{staticClass:"my-2 description"},[t._v("從大學開始學習網頁建置相關技術，研究所時更深入探討學習使用者分析。出社會後從平面設計開始做起、網頁設計到現在前端工程師。熟悉 JS、jQuery、HTML、 CSS、CSS3、SEO、GA、GTM 等相關技術。喜歡瞭解新知識、新技術，也期待有天能應用在工作上。休閒興趣是旅行、攝影、爬山、做健康的甜點，喜歡分享每一個美好的景色")]),i("ContactMe"),i("SocialMedia")],1)]),i("div",{staticClass:"col-xs-12 col-md-6"})])])])},vt=[],bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contactMe"},[i("ul",t._l(t.contact,function(e,a){return i("li",{key:e.index,staticClass:"text-left"},[i("span",{},[i("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}),t._v("\n      "+t._s(e.data)+"\n      ")],1)])}),0)])},ht=[],gt={name:"ContactMe",data:function(){return{contact:[{icon:"mobile-alt",data:"0911241129"},{icon:"envelope",data:"shuen29@gmail.com"}]}}},Ct=gt,kt=(i("ef1a"),Object(w["a"])(Ct,bt,ht,!1,null,"c8d29c6e",null)),yt=kt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"social-icon"},[i("ul",t._l(t.socialMedia,function(e){return i("li",{key:e.index,staticClass:"social-icon-item d-inline-flex mr-2"},[i("a",{staticClass:"btn btn-link",attrs:{href:e.link,target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:["fab",e.iconName]}}),t._v(t._s(e.item)+"\n      ")],1)])}),0)])},_t=[],St={name:"SocialMedia",data:function(){return{socialMedia:[{iconName:"github",link:"https://github.com/shueny"},{iconName:"github-alt",link:"https://shueny.github.io/"},{iconName:"wordpress",link:"https://mango-pizza.life"},{iconName:"codepen",link:"https://codepen.io/Shueny/"}]}}},xt=St,jt=(i("9ff2"),Object(w["a"])(xt,wt,_t,!1,null,"8452d02a",null)),Ot=jt.exports,Tt={props:["title"],components:{ContactMe:yt,SocialMedia:Ot}},Mt=Tt,Et=(i("4cfe"),Object(w["a"])(Mt,ft,vt,!1,null,"53d9915f",null)),Lt=Et.exports,Nt=i("9086"),At=i("5b47"),Pt=i("f2cd"),Wt=new Q["WOW"]({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0});Wt.init();var Bt={name:"home",components:{NavBar:H,Works:it,KVTyper:mt,AboutMe:Lt,Skills:Nt["a"],Education:At["a"],ExperiencesList:Pt["a"]},metaInfo:{title:"Shueny's Vue",titleTemplate:null,link:[{rel:"favicon",href:"favicon.ico"}]},data:function(){return{intersectionOptions:{root:document.querySelector("#app"),rootMargin:"0px 0px 0px 0px",threshold:0},activeBlock:"about"}},methods:{logOne:function(t){var e=t.el,i=t.going,a=(t.direction,e.getAttribute("id"));"in"===i&&(this.activeBlock=e.getAttribute("id"),document.getElementById(a).classList.add("active")),"out"===i&&document.getElementById(a).classList.remove("active")}}},It=Bt,Dt=Object(w["a"])(It,j,O,!1,null,null,null),Ht=Dt.exports;a["default"].use(x["a"]),a["default"].use(m.a);var Vt=new x["a"]({mode:"history",base:"/shueny/",routes:[{path:"/",name:"home",component:Ht},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}]}),$t=i("2f62");a["default"].use($t["a"]);var Qt=new $t["a"].Store({state:{},mutations:{},actions:{}}),Jt=i("9483");Object(Jt["a"])("".concat("/shueny/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("4989"),i("ab8b"),i("e9a2"),i("77ed");n["c"].add(s["b"],s["f"],s["e"],o["a"],s["d"],s["c"],s["h"],s["g"],s["i"],s["a"]),a["default"].component("font-awesome-icon",l["a"]),a["default"].config.productionTip=!1,a["default"].use(c.a),a["default"].use(d.a),a["default"].use(m.a),a["default"].use(v.a),a["default"].use(h.a),new a["default"]({router:Vt,store:Qt,render:function(t){return t(S)}}).$mount("#app")},"5b47":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"education text-left spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"education"}}),i("h1",{staticClass:"title"},[t._v(t._s(t.title))]),i("h2",{staticClass:"subTitle"},[t._v(t._s(t.subTitle))]),i("div",{staticClass:"exp-special"},[i("ul",{staticClass:"ul-list"},t._l(t.education,function(e){return i("li",{key:e.index,staticClass:"item ul-list-item wow slideInUp"},[i("h5",[t._v(t._s(e.department)+" | "+t._s(e.during))]),i("h6",[t._v(t._s(e.title))]),i("ul",{staticClass:"ul-list--inner"},t._l(e.about,function(e){return i("li",{key:e.index,staticClass:"item"},[t._v(t._s(e))])}),0)])}),0)])])},n=[],s={name:"Education",props:["title","subTitle"],data:function(){return{education:[{title:"國立臺南大學",during:"2011/8-2009/9",department:"數位學習科技所",about:["運用資訊科技於教材開發及教學設計,改善教學品質並提升學習成效","論文: 以Unity的架構並用3D Max建模,製作出一個虛擬的博物館導覽系統,再對此系統做 UI/UX 及開發技術的評估"]},{title:"實踐大學",during:"2009/6-2005/9",department:"資訊模擬與設計系",about:["網頁設計、平面設計、動畫設計、電腦程式語法及資料庫","專題: 用C#及資料庫製作電子商務網站"]}]}}},o=s,l=(i("509b"),i("2877")),r=Object(l["a"])(o,a,n,!1,null,"33fe7728",null);e["a"]=r.exports},"5c0b":function(t,e,i){"use strict";var a=i("5e27"),n=i.n(a);n.a},"5e27":function(t,e,i){},6124:function(t,e,i){t.exports=i.p+"img/header-bg.76033f31.jpg"},"7da1":function(t,e,i){t.exports=i.p+"img/Shueny.df503540.png"},"803b":function(t,e,i){t.exports=i.p+"img/momoshop-mobile.7fabd96c.jpg"},"812e":function(t,e,i){t.exports=i.p+"img/climb-stairs.2303ace6.jpg"},9086:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill section section-bg spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"skill"}}),i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[t._v(t._s(t.title))]),i("h2",{staticClass:"subTitle"},[t._v(t._s(t.subTitle))]),i("div",{staticClass:"row my-4"},t._l(t.skills,function(e,a){return i("div",{key:e.index,staticClass:"col-md-6 mb-4 wow bounceIn animated"},[i("div",{staticClass:"skill-item"},[i("span",{staticClass:"icon d-inline-block mb-3"},[i("font-awesome-icon",{attrs:{icon:e.icon}})],1),i("h4",{staticClass:"skill-item-title font-weight-bold"},[t._v(t._s(e.title))]),i("p",{staticClass:"line-s my-2 mx-auto"}),i("h6",{staticClass:"my-3"},t._l(e.skillList,function(a,n){return i("span",{staticClass:"mx-1 d-inline-block"},[t._v("\n              "+t._s(a)+t._s(n+1<e.skillList.length?", ":"")+"\n            ")])}),0),i("div",{staticClass:"skill-item-text"},[i("ul",{staticClass:"ul-list ul-list--none"},t._l(e.info,function(e){return i("li",{staticClass:"item ul-list-item"},[t._v("\n                "+t._s(e)+"\n              ")])}),0)])])])}),0)])])},n=[],s=(i("6c7b"),{name:"Skills",props:{title:String,subTitle:String},data:function(){return{striped:!0,animate:!0,skills:[{icon:"desktop",title:"Frontend Development",skillList:["HTML5","CSS3","JavaScript(ES6)","jQuery","Liquid","Vue.js","React"],info:["使用 HTML5、CSS3、SCSS 獨立切版或套用 Bootstrap","搭配 JavaScript 或 jQuery 製作各式動畫效果","熟悉 Liquid 語法，開發各種樣版或新功能、新畫面","以 Ajax 串接 API 資料","尚懂 Vue.js，目標學習建置各小型專案來更熟悉 Vue.js ","曾學習過 React"]},{icon:"server",title:"Backend Development",skillList:["Node.js","Express.js","MongoDB","PHP","MySQL"],info:["曾經學習過及使用過 PHP & MySQL","目前學習並使用 Node.js, Express.js, MongoDB 來建置小型專案"]},{icon:"palette",title:"Web Design",skillList:["Photoshop","Illustrator","Adobe XD"],info:["使用 Ps 進行圖片處理，製作簡易網頁廣告、gif 等","使用 Ai 處理向量格式圖形、繪製向量圖檔、SVG 等","Adobe XD 製作基本的 wireframe"]},{icon:"terminal",title:"Others",skillList:["Git","Webpack"],info:["熟悉 Git 常用的基本指令","使用 Webpack 建置小型專案"]}],webSkill:[{item:"HTML5, CSS3",data:95},{item:"SCSS",data:80},{item:"Bootstrap",data:85},{item:"Javascript",data:75},{item:"jQuery",data:90},{item:"Vue.js",data:40},{item:"Node.js",data:5},{item:"Webpack",data:25}],otherSkill:["RWD","Git","SEO","GA","GTM"],design:["Zeplin","XD","Photoshop","Illustrator"],language:["中文 / 台語 精通","英文 (TOEIC 綠色證照)"]}},computed:{webSkillGroups:function(){var t=this;return Array(this.webSkill.length/3).fill().map(function(e,i){return[t.webSkill[2*i],t.webSkill[2*i+1]]})}},methods:{}}),o=s,l=i("2877"),r=Object(l["a"])(o,a,n,!1,null,null,null);e["a"]=r.exports},9866:function(t,e,i){t.exports=i.p+"img/momoshop-index.9a213bd1.jpg"},"9ff2":function(t,e,i){"use strict";var a=i("b879"),n=i.n(a);n.a},aa99:function(t,e,i){},b66d:function(t,e,i){},b879:function(t,e,i){},e1f3:function(t,e,i){},e5ec:function(t,e,i){},ee30:function(t,e,i){"use strict";var a=i("f757"),n=i.n(a);n.a},ef1a:function(t,e,i){"use strict";var a=i("1d97"),n=i.n(a);n.a},f2cd:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"experience text-left spaceWrapperContainer"},[i("div",{staticClass:"spaceWrapper",attrs:{id:"experience"}}),i("h1",{staticClass:"title"},[t._v(t._s(t.title))]),i("h2",{staticClass:"subTitle"},[t._v(t._s(t.subTitle))]),i("div",{},[i("ul",{staticClass:"ul-list"},t._l(t.experiences,function(e){return i("li",{key:e.index,staticClass:"item ul-list-item wow slideInUp"},[i("h5",[t._v(t._s(e.title)+" | "+t._s(e.during))]),i("h6",[t._v(t._s(e.company))]),i("ul",{staticClass:"ul-list--inner"},t._l(t.experiences,function(e,a){return i("li",{key:e.index,staticClass:"item"},[t._v("\n            "+t._s(e.list[a])+"\n          ")])}),0)])}),0)])])},n=[],s={name:"ExperiencesList",props:["title","subTitle"],data:function(){return{experiences:[{company:"Citiesocial 任開媒體",title:"前端工程師",during:"2018/5-Now",list:["測試測試測試A","測試測試測試B","測試測試測試C","測試測試測試D"]},{company:"MOMO 富邦媒體股份有限公司",title:"工程師",during:"2016/8-2018/5",list:["公司大小網、後台介面切版(HTML5, CSS3, RWD)","用 JS 撰寫 Banner 及網頁動態特效","和後台開發人員進行應用及系統整合","與企劃、工程師配合，執行系統研發，開發網頁新功能","UI/UX 動線規劃設計","練習發現小遊戲並用JS撰寫"]},{company:"天擎旅行社",title:"設計",during:"2015/9-2016/7",list:["公司官網視覺設計及建構","撰寫及編修jQuery語法製作網頁動畫","行程景點視覺設計、刊物設計、EDM、名片等","產品行程的編修與美化、主視覺設定","展覽場的規劃與佈置","與業務人員討論及製作相關產品視覺設計"]},{company:"新曜有限公司",title:"設計兼採購助理",during:"2013/10-2015/8",list:["產品照片拍攝","刊物設計及產品介紹圖設計及製作","與外國客戶接洽、email書信","訂單處理(報價、整理訂單、訂船、訂艙等等)","與工廠及船公司聯繫"]},{company:"S.H.I.T.來自臺灣的獨特內斂",title:"網站管理及設計",during:"2009/7-2013/4",list:["網站改版設計與製作","flash網頁維護及新產品網頁的flash頁面製作","產品圖編修、產品上下架、網頁更新"]}]}}},o=s,l=(i("23fa"),i("2877")),r=Object(l["a"])(o,a,n,!1,null,"77d404d8",null);e["a"]=r.exports},f757:function(t,e,i){}});
//# sourceMappingURL=app.fab7c20c.js.map