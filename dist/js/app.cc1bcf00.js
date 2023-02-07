(function(){"use strict";var e={5826:function(e,r,t){var s=t(9242),o=t(3396);function n(e,r,t,s,n,l){const i=(0,o.up)("HomeView");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i)])}function l(e,r,t,s,n,l){const i=(0,o.up)("UserFilter"),u=(0,o.up)("TotalTable");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i),(0,o.Wm)(u)])}var i=t(7139);const u={class:"total-table"},a=(0,o._)("caption",{class:"total-table__table-title"},[(0,o._)("i",null,"Достижения пользователей")],-1),c={class:"total-table__title-row"};function d(e,r,t,s,n,l){const d=(0,o.up)("UsersList");return(0,o.wg)(),(0,o.iD)("table",u,[a,(0,o._)("thead",c,[(0,o._)("tr",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.columnHeaders,(e=>((0,o.wg)(),(0,o.iD)("th",{key:e[1],class:"total-table__col-title"},(0,i.zw)(e[0]),1)))),128))])]),(0,o.Wm)(d)])}const p={class:"total-table__table-content"},m={class:"total-table__cell"},f={class:"total-table__cell"},h={class:"total-table__cell"},_={class:"total-table__cell"};function y(e,r,t,s,n,l){return(0,o.wg)(),(0,o.iD)("tbody",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.filteredUsers,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.place},[(0,o._)("td",m,(0,i.zw)(e.place),1),(0,o._)("td",f,(0,i.zw)(e.userLogin),1),(0,o._)("td",h,(0,i.zw)(e.orders),1),(0,o._)("td",_,(0,i.zw)(e.status),1)])))),128))])}var g=t(65),w={name:"UsersList",computed:(0,g.Se)(["filteredUsers"])},b=t(89);const v=(0,b.Z)(w,[["render",y]]);var L=v,F={name:"TotalTable",components:{UsersList:L},computed:{...(0,g.Se)(["columnHeaders"])}};const D=(0,b.Z)(F,[["render",d]]);var U=D;const k={class:"filter"},T=(0,o._)("h3",null,"Фильтр",-1),B={class:"filter__by-login"},S={class:"filter__by-orders"},H=(0,o._)("span",null,"Заказы",-1),O={class:"filter__by-status"},C={class:"filter__sort"},V=(0,o._)("span",null,"Сортировать ",-1),x=(0,o._)("option",null,null,-1),q=["value"],j={key:0},z=(0,o._)("option",{value:"asc",selected:""},"возрастанию",-1),Z=(0,o._)("option",{value:"desc"},"убыванию",-1),A=[z,Z],M={key:0,class:"filter__buttons"};function P(e,r,t,n,l,u){return(0,o.wg)(),(0,o.iD)("div",k,[T,(0,o._)("div",B,[(0,o._)("label",null,[(0,o.Uk)(" Логин "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>l.userLogin=e),type:"text",placeholder:"логин"},null,512),[[s.nr,l.userLogin]])])]),(0,o._)("div",S,[H,(0,o._)("label",null,[(0,o.Uk)(" от "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>l.ordersFrom=e),type:"number",min:"0",placeholder:"от",class:"filter__order-input"},null,512),[[s.nr,l.ordersFrom]])]),(0,o._)("label",null,[(0,o.Uk)(" до "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>l.ordersTo=e),type:"number",min:"0",placeholder:"до",class:"filter__order-input"},null,512),[[s.nr,l.ordersTo]])])]),(0,o._)("div",O,[(0,o._)("label",null,[(0,o.Uk)(" Статус "),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>l.userStatus=e),type:"text",placeholder:"статус"},null,512),[[s.nr,l.userStatus]])])]),(0,o._)("div",C,[V,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":r[4]||(r[4]=e=>l.sortBy=e)},[x,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.columnHeaders,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e[1],value:e[1]},(0,i.zw)(e[0]),9,q)))),128))],512),[[s.bM,l.sortBy]]),l.sortBy?((0,o.wg)(),(0,o.iD)("span",j,"по ")):(0,o.kq)("",!0),l.sortBy?(0,o.wy)(((0,o.wg)(),(0,o.iD)("select",{key:1,"onUpdate:modelValue":r[5]||(r[5]=e=>l.sortDir=e)},A,512)),[[s.bM,l.sortDir]]):(0,o.kq)("",!0)]),l.userLogin||l.ordersFrom||l.ordersTo||l.userStatus||l.sortBy?((0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("button",{onClick:r[6]||(r[6]=(...e)=>u.addFilter&&u.addFilter(...e))},"применить"),(0,o._)("button",{onClick:r[7]||(r[7]=(...e)=>u.resetFilter&&u.resetFilter(...e))},"сбросить")])):(0,o.kq)("",!0)])}var W={name:"UserFilter",data(){return{userLogin:"",ordersFrom:null,ordersTo:null,userStatus:"",sortBy:"",sortDir:"asc"}},computed:{...(0,g.Se)(["columnHeaders"])},methods:{...(0,g.OI)(["applyFilter"]),addFilter(){const e={userLogin:this.userLogin.toLowerCase(),ordersFrom:this.ordersFrom,ordersTo:this.ordersTo,userStatus:this.userStatus.toLowerCase(),sortBy:this.sortBy,sortDir:this.sortDir};this.applyFilter(e),this.$router.replace({query:e})},resetFilter(){this.applyFilter(null),this.$router.replace({name:"home"}),this.userLogin="",this.ordersFrom=null,this.ordersTo=null,this.userStatus="",this.sortBy="",this.sortDir="asc"}},watch:{$route(){const e=this.$route.query;if(e.userLogin||e.userStatus||e.ordersFrom||e.ordersTo||e.sortBy){const r={userLogin:e.userLogin.toLowerCase(),ordersFrom:e.ordersFrom,ordersTo:e.ordersTo,userStatus:e.userStatus.toLowerCase(),sortBy:e.sortBy,sortDir:e.sortDir};this.applyFilter(r),this.userLogin=e.userLogin.toLowerCase(),this.ordersFrom=e.ordersFrom,this.ordersTo=e.ordersTo,this.userStatus=e.userStatus.toLowerCase(),this.sortBy=e.sortBy,this.sortDir=e.sortDir}}}};const $=(0,b.Z)(W,[["render",P]]);var K=$,Y={name:"HomeView",components:{UserFilter:K,TotalTable:U}};const E=(0,b.Z)(Y,[["render",l]]);var I=E,G={name:"App",components:{HomeView:I}};const J=(0,b.Z)(G,[["render",n]]);var N=J,Q=t(2483);const R=[{path:"/",redirect:{name:"home"}},{path:"/index.html",name:"home",component:I},{path:"/index.html :queryParams(.*)",name:"query",component:I,props:!0}],X=(0,Q.p7)({history:(0,Q.PO)("/test-task-tl/dist/"),routes:R});var ee=X,re=(0,g.MT)({state:{columnHeaders:[["Место","place"],["Логин","userLogin"],["Подтвержденные заказы","orders"],["Статус","status"]],usersAchievements:[{place:1,userLogin:"smith@gmail.com",orders:312,status:"Ценитель красоты"},{place:2,userLogin:"lenin@gmail.com",orders:120,status:"Поставщик аксессуаров"},{place:3,userLogin:"mask@gmail.com",orders:98,status:"Конкурент минздрава"},{place:4,userLogin:"dog@mail.ru",orders:64,status:"рыбак"},{place:5,userLogin:"nightmare@mail.ru",orders:34,status:"охотник"},{place:6,userLogin:"cat@mail.ru",orders:1,status:"Ценитель красоты"}],search:null,filteredUsers:null},getters:{columnHeaders(e){return e.columnHeaders},filteredUsers(e){return e.filteredUsers?e.filteredUsers:e.usersAchievements},search(e){return e.search}},mutations:{applyFilter(e,r){if(null===r)e.search=null,e.filteredUsers=null;else{e.search=r;let t=e.usersAchievements.filter((e=>!r.userLogin||e.userLogin.includes(r.userLogin))).filter((e=>!r.userStatus||e.status.includes(r.userStatus))).filter((e=>{if(r.ordersFrom||r.ordersTo){const t=r.ordersFrom||0,s=r.ordersTo||9999;return e.orders>=t&&e.orders<=s}return!0}));r.sortBy&&(t.sort(((e,t)=>{const s="number"===typeof e[r.sortBy]?e[r.sortBy]:e[r.sortBy].toLowerCase(),o="number"===typeof t[r.sortBy]?t[r.sortBy]:t[r.sortBy].toLowerCase();if(s<o)return-1})),"desc"===r.sortDir&&t.reverse()),e.filteredUsers=t}},updateUserLogin(e,r){e.search.userLogin=r}},actions:{},modules:{}});(0,s.ri)(N).use(re).use(ee).mount("#app")}},r={};function t(s){var o=r[s];if(void 0!==o)return o.exports;var n=r[s]={exports:{}};return e[s](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(r,s,o,n){if(!s){var l=1/0;for(c=0;c<e.length;c++){s=e[c][0],o=e[c][1],n=e[c][2];for(var i=!0,u=0;u<s.length;u++)(!1&n||l>=n)&&Object.keys(t.O).every((function(e){return t.O[e](s[u])}))?s.splice(u--,1):(i=!1,n<l&&(l=n));if(i){e.splice(c--,1);var a=o();void 0!==a&&(r=a)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,o,n]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,s){var o,n,l=s[0],i=s[1],u=s[2],a=0;if(l.some((function(r){return 0!==e[r]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(u)var c=u(t)}for(r&&r(s);a<l.length;a++)n=l[a],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},s=self["webpackChunktest_task_tl"]=self["webpackChunktest_task_tl"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(5826)}));s=t.O(s)})();
//# sourceMappingURL=app.cc1bcf00.js.map