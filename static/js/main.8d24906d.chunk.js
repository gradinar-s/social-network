(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{128:function(A,e,t){"use strict";t.d(e,"a",(function(){return i}));var n=t(41),r=t(3),a="SEND-MESSAGE",o={dialogsData:[{id:1,name:"Sasha"},{id:2,name:"Alina"}],messagesData:[{id:1,message:"Demo message 1"},{id:2,message:"Demo message 2"}]},i=function(A){return{type:a,textMessage:A}};e.b=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return Object(r.a)(Object(r.a)({},A),{},{messagesData:[].concat(Object(n.a)(A.messagesData),[{id:3,message:e.textMessage}])});default:return A}}},14:function(A,e,t){A.exports={nav:"Navbar_nav__15V6C",wrapper:"Navbar_wrapper__w9e8h",item:"Navbar_item__2NKD2",icon:"Navbar_icon__1dQme",friendsRecomendations:"Navbar_friendsRecomendations__2C1uS",friendsRecomendationsNone:"Navbar_friendsRecomendationsNone__3gVBN",nameLink:"Navbar_nameLink__K-mfl"}},15:function(A,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return i}));var n=t(134),r=t.n(n).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"d734b2e9-499a-4520-8779-b3c38f7c5878"}}),a={getUser:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.get("users?count=".concat(A,"&page=").concat(e)).then((function(A){return A.data}))},follow:function(A){return r.delete("follow/".concat(A)).then((function(A){return A.data}))},unfollow:function(A){return r.post("follow/".concat(A)).then((function(A){return A.data}))}},o={setUserProfile:function(A){return r.get("profile/".concat(A)).then((function(A){return A.data}))},getUserStatus:function(A){return r.get("profile/status/".concat(A)).then((function(A){return A.data}))},updateUserStatus:function(A){return r.put("/profile/status",{status:A}).then((function(A){return A.data}))}},i={me:function(){return r.get("auth/me").then((function(A){return A.data}))},login:function(A,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:A,password:e,rememberMe:t}).then((function(A){return A}))},logout:function(){return r.delete("auth/login").then((function(A){return A}))}}},168:function(A,e,t){},169:function(A,e,t){},21:function(A,e,t){A.exports={row:"Header_row__2qV0t",logo:"Header_logo__3go3g",menu:"Header_menu__1AhSi",search:"Header_search__xtFid",link:"Header_link__2S0IA",userName:"Header_userName__2knrN",avatar:"Header_avatar__1cmZt",authBtn:"Header_authBtn__1hGKi",sectionTitle:"Header_sectionTitle__2TTwH"}},288:function(A,e,t){"use strict";t.r(e);var n=t(1);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=t(0),a=t.n(r),o=t(66),i=t.n(o),s=(t(168),t(27)),c=t(28),S=t(30),u=t(29),l=(t(169),t(10)),g=t(11),d=t(3),b=t(57),j=t(15),m="auth/SET_USER_DATA",f="auth/SET_AUTH_USER_PROFILE",h={userId:null,email:null,login:null,isAuth:!1,authUserProfile:null},O=function(A,e,t,n){return{type:m,data:{userId:A,email:e,login:t,isAuth:n}}},p=function(){return function(A){return j.a.me().then((function(e){if(0===e.resultCode){var t=e.data,n=t.id,r=t.email,a=t.login;A(O(n,r,a,!0)),A(C(n))}}))}},C=function(A){return function(e){j.b.setUserProfile(A).then((function(A){e(function(A){return{type:f,data:A}}(A))}))}},B=function(){return function(A){j.a.logout().then((function(e){0===e.data.resultCode&&A(O(null,null,null,!1))}))}},E=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(d.a)(Object(d.a)({},A),e.data);case f:return Object(d.a)(Object(d.a)({},A),{},{authUserProfile:Object(d.a)({},e.data)});default:return A}},w="app/INITIALIZATION_SUCCESS",N={initializationSuccess:!1},x=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return Object(d.a)(Object(d.a)({},A),{},{initializationSuccess:!0});default:return A}},v=t(9),Q=t(12),I=t(14),R=t.n(I),P=t(41),D="users/FOLLOW",U="users/UNFOLLOW",k="users/SET_USERS",F="users/SET_CURRENT_PAGE",H="users/SET_TOTAL_USERS_COUNT",G="users/TOGGLE_IS_FETCHING",L="users/TOGGLE_IS_FOLLOWING_PROGRESS",y="users/FRIENDS_RECOMENDATIONS",z={users:[],pageSize:10,totalUserCount:0,currentPage:1,isFetching:!0,followingInProgress:[],friendsRecomendations:[]},K=function(A){return{type:D,userId:A}},V=function(A){return{type:U,userId:A}},T=function(A){return{type:k,users:A}},M=function(A){return{type:F,currentPage:A}},Z=function(A){return{type:G,isFetching:A}},q=function(A,e){return{type:L,isFetching:A,userId:e}},J=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:return Object(d.a)(Object(d.a)({},A),{},{users:A.users.map((function(A){return A.id===e.userId?Object(d.a)(Object(d.a)({},A),{},{followed:!0}):A}))});case U:return Object(d.a)(Object(d.a)({},A),{},{users:A.users.map((function(A){return A.id===e.userId?Object(d.a)(Object(d.a)({},A),{},{followed:!1}):A}))});case k:return Object(d.a)(Object(d.a)({},A),{},{users:e.users});case F:return Object(d.a)(Object(d.a)({},A),{},{currentPage:e.currentPage});case H:return Object(d.a)(Object(d.a)({},A),{},{totalUserCount:e.totalUsersCount});case G:return Object(d.a)(Object(d.a)({},A),{},{isFetching:e.isFetching});case L:return Object(d.a)(Object(d.a)({},A),{},{followingInProgress:e.isFetching?[].concat(Object(P.a)(A.followingInProgress),[e.userId]):A.followingInProgress.filter((function(A){return A!==e.userId}))});case y:return Object(d.a)(Object(d.a)({},A),{},{friendsRecomendations:e.users});default:return A}},Y=t(36),W=function(A){return Object(n.jsx)("nav",{className:R.a.nav,children:Object(n.jsx)("div",{className:R.a.wrapper,children:Object(n.jsxs)("div",{className:R.a.item,children:[Object(n.jsxs)(Q.b,{to:"/profile",children:[Object(n.jsx)("span",{className:R.a.nameLink,children:"Profile"})," ",Object(n.jsx)("img",{className:R.a.icon,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQOSURBVHic7ZvPT1xVFMc/5z6gdgbaKmlSMkCKEGXRtQv/ABNtInVVExtduFfjwqVJ/RNc21hTkqqRGCmNia5q3TTuNBGw/GhleAQjUhkYEObe42KgDgwDyPtx6QyfZBZz35t3vvf77j3vzpm5wh6shtqtyoCKXhQ4r9AJZPf6zBFgRSCv8EBURoBvMjmZqXWy7NZYnNGcBu5DkLeBICmlKeGAISPywckOebDzYJUBK6FeAr0BtKYgLjUECqpyJZuT4cp2U/mmGOq7oEPUWecBFNoQ/boY6juV7Y9HwOadH2KHKXWIQ+W1rZEgAMW8dqrRUerwzu+GQEFL0p/tltAAaOA+okE6D5vTocldBZDVULsdOsWTn+3/L1acnDcKl2i8zgMEGjBgFH3ZtxJvqL5iEPp86/CFQK9BOedbiC8UcoYGyv670Frvi559OTbAtwDfNPkKvFFQ7t+0APS9HtByatdv5okjK6HTtIOu/62MfWpZXSiHPvG00P9WwFPtZRMKD5X5ew52KMt2QceL8a7ZUjdg7S9l7Lrln8XtYZtbhf43AzIdwsSXloVfXNVnxcALV5tj1ZNqDlj7Uxm9Vt15gI1l5ddPSixNVnd8C6196NCklgOK8+Vhv7FSe8DZdRgftKnmg1QMWAmVsc9KlIr7n+tK5WmSFokbUHiojA+WsGtJRzociRpQmHaMD1rsepJRopGYAY9+c9y/aXGlpCLEQyIGLI45Jj63OJvE1eMldgMWfnZMDtlEHllJEOs64I+fHJNfJdv58Id4h1VsBszfs0zfsmjCT7CZ7x2/fxefw7FMgbm7NlZRB4kH0P1S9PsX+QrhnXQ7v8XcXUt4J/p0iG7Aj/6yXRyxIxvQ1u2vphJH7Mhfh52FpUn3eLU38UWyD/++y+V6QNACp3oNJmJ5IHISNAGcee6/O5G0Ae0X4h1xDV8TbHgDUi+KtpwRnnlekGB70cM5ZXFMWX+Uboky9RHQfsEQZARzgm2vppMS+/w+CKlHlD1qmnsdS4r0DTjksaRo+CR4bIBvAb45NsC3AN/EbkCSv+q0nI7/2rEb0DNgapogB4hW65yW08KzA/EPWC8/jx8ljnOAbwG+OTYAWPYtwiNLRiH0rcIXAqERmPItxBcKU0ZUbvsW4g2RESnOapeKTtN4ewZK4qTHlDcV6nXfatJHr2U6JV/eNDWjOQIdVWjzLSsllmiW/uxZmTMAmS6ZVZHLwBPwn47IOFSuZM/KHFQshLId8q0g71PealqvOFF5L5uTW1sN1VtnZ/VVER2sw+mwhJE3sudkpLKxaimczcmwFelV9GPgiP/H60A4QW/QLP07Ow/7VKKLee3UgAFULwr0bG6fP+pbbJY3t89PIXJbLMOZTsnXOvlfisRs6lQDzVUAAAAASUVORK5CYII=",alt:""})]}),Object(n.jsxs)(Q.b,{to:"/dialogs",children:[Object(n.jsx)("span",{className:R.a.nameLink,children:"Messages"})," ",Object(n.jsx)("img",{className:R.a.icon,src:"data:image/png;base64,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",alt:""})]}),Object(n.jsxs)(Q.b,{to:"/users",children:[Object(n.jsx)("span",{className:R.a.nameLink,children:"Friends"}),Object(n.jsx)("div",{className:A.isAuth?R.a.friendsRecomendations:R.a.friendsRecomendationsNone,children:A.friendsRecomendations.map((function(A){return Object(n.jsx)(Q.b,{to:"/profile/".concat(A.id),children:Object(n.jsx)("img",{title:A.name,src:A.photos.small?A.photos.small:Y.a,alt:""})})}))}),Object(n.jsx)("img",{className:R.a.icon,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAR8SURBVHic7ZvNb5RFHMc/v3mglZfGA4G22Re2Wys9GGKi0YNgTIwaqKGYaDDaeNAriPHgUaQH/wDlSmKABDgQBVuIRg8GgyeiMSTQGrel+9JAQqIFAsXu/Dzsbmm3b7vZZ2fKLp/L7s4z83u+832emWeemR1hGTSXi6P5fkT7QBMgUWDDcmVWAXdBMyDjqAyBOSuRSHqpzLJYoqbTEQI+B/0ICOom1Q0W5Awy85l0do2XH1xggOYm9gLHgY0OxDlEb6MyIJH4ubmpZl6W3PWDwBkarvIA0obwreaufzwvtfSleOXPUGZKA2JR3irdCQKgmUwUY6/SkFd+MfQ2M9Ir8XiucLUDO0jTVB5A2lijhwFEc7k4zKR49Hv7asljTcLAf3tpvsoDBAS234Ds8q3EG6q7DcJTvnV4pNugdPhW4Q+JGJqq91/AxkYf9KzIYwN8C/DNmnoE1bFRdPgUmk7Bg+nagrW0IvEk0vcukng6FH1zEc1NaJgBdWwUe+QwWBtmWDAGc+AQYZsQ+h2gw6fAWuSVPsyud6CltbaAD6ax50+jv1xAz55ADg6GI7RI6H2AplOFwGFUHqClFbN7XzH2WO3xygi/Dyi1+RUqrz99h734AwDm5V3Iq3uWzlyKlZ8JQ+E86tIJroT+8Rt2+PTsbzt0ErOpHXn2RedavDwGdeTKIml/elDiyQDZtGVh2mY/ryR+DNj5BrL14UuoJHqQHa/7kOKnD6D1CcyBL9CJv0FAYt0Q+JmTcW+AWrgxid7Mgi2MwXTqMrIlAu2dIG5vSrcG/HsLe+xrNDWy6GFJ9mI+2A9PbnImyZ3dapetPICmrmGPHSncJY5wZ8CNyWUrX0JT19CJlANBBZwZoDezlWf+51b9hJThzABpj8C69StnXLcB6YjWX1ARd51ge4Tgy6POTlcpTT8j1PQGOGkCmhpBf/0RNF9ZAQkKw+Wu8KfAynFjwOWL6O+Xqiu0fkPjGGDefA/dtn126LtyAUF6nqmvqCJungLr1iPbX3Byqmp53Ak6Ocu9u+joFah0Ar7UBCoZONWIEwPs0En00s9VlZGXXsO8/WGdFD3EiQHy3E64d6+6x+DzO+orqogbA5LbkOQ2F6eqmvA7wdIcfq1rgnOZvl/4DMK/XqEbIPEkAPb86XBMmL4/u4YgsWTt8coIf3F0fBR7ZBDyFbb3SgkCzP5DSKIn1LChGwCg43+hZ48X1vJqXc4K1iCxJNI/QNiVhzoZ8CjR9CPBxwb4FuAbA9zxLcIjUwbI+VbhD8kZwN0qxKrDpgwqw75leENkSDSbjSH5MZpvz8AM1nSZ4qbCb3yr8cBRiUYzhU1T6XSEwF4FafOtyhFTrLW9sjkxaQAkFssiZh8Q8hvMqsSiOiCbE5MwZyAknbELoJ8C7hbn3WNR+UQiW78vJSzcOpud2IPoiQZsDlMYfV86tg7NTVwwFJZI/BzS0g3yFRD+XzPdY0GOs9b2llceltg9XkIzmSiB7UfpA+kCjbL6t9jcAcmATSEyTN6ck2g0s1Tm/wGGjVoiAfwzqQAAAABJRU5ErkJggg==",alt:""})]}),Object(n.jsxs)(Q.b,{to:"/news",children:[Object(n.jsx)("span",{className:R.a.nameLink,children:"News"})," ",Object(n.jsx)("img",{className:R.a.icon,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQxSURBVHic7ZvPT5xFGMc/z7y7dGEpBCwRXLqBYCPGePDixcR4qqlNoJ40sUYTbx7UmOjRRP8E7yZGPPRCjEBj1IsxmvTYGGPVFGhceKGBaoT9QbP7zuNhobvyqy3zsgPsfk7vzr77zHe+77zPO+/MjrAPpVCzqoyr6EWBIYVBIL3fb44ABYEFhVuiMgN83ZGR3F4ny26FxZxmNLAfgbwFBIeltEFYYNKIfNg+ILe2f7nDgEKol0AngM4GiGsYAuuqcjmdkan6clP/oRjqu6CTnLDGAyicRvSrYqjv1Jff6wGbV36SbaacQCwqL2/1BAEoLuigGr3BCbzyuyGwrhUZTWclNAAa2E9oksbD5u2QsB8DSCnUrEXnOP7Z/mGJxMqQUbhE8zUeINCAcaPoBd9KvKH6kkF43LcOXwiMGJR+30J8oZAxNFH234XOkz7ouS9Nb0AijiA2grsrirVucVK9QpDau45KXmnr3vUF9sA4G7A2a/nzSkS0EYMagYHnArIv1jqmRpD73nL7WoSNIHlaGB4z9IzG03mdo8xP23gaD6Cw9FNEcVnvFYU/Riz9HKEKbV1CeV25eSWiVHeOC84GbPwdj5B6Squ1mKvXq8dPvhnwzAcJHn3WYCNY+eWIGED87f9fzEqp+iF1pnrvp/qq5eVCPBXHkgQPk+4Rw51fLb9/EdE1ZFi5Xs206YF44jv3AHMIr1EmWTvOXjCkzgjFZWX5Wi3Zhj8opdvuvcDZgK6ReIcSQRt0ZmqPurYu4em3E5x7NSB73jD6RkD3OUO5oPwxETnXJ4XQOtlYLii5by3rOa3Ovzpwqkd47AVD19D+z3pbgfnpCGNgeNytCzobcNxpDYVdA2ysKuViHFIenmRH7fF4UJwNuPObohXXKAdDEpB53rMBjzwl3P3HNcrBONXjHqPpk2ArB7iKaOWAVg443rRygKuIVg5o5YDjTetlyDVAOa/89Z0lH8N8wANjoDMrZM8bkmnPOWB20vLvzUa1vMbGqlLJwxOvu02ION8C6/ONb/wWa7PWeVba2QDrPi3nte6mT4LuBsS7Vtnwup0NaO/150B7rzib4GzA0JjZc0n7MEm0V+t2JZaRoEawEcP/Ax4UYyDVJ0gMq1KxrA1KAO39PpPBwWk9BXwL8E3LACDvW4RH1oxC6FuFLwRCIzDnW4gvFOaMqFz1LcQbIjNSXNSzKjpP8+0ZqIiVYVPdVKif+1bTePSzjkFZqG6aymmGQG8onPYtq0GskZTRdJ8sGYCOs7KoIq8AHqc3GoZF5XK6T5agbiCUHpBvBHmfxk1t+sCKynvpjExvFezcOruoYyL65Qm8HdYw8lq6X2bqC3cMhdMZmYpERhT9FPC06BUrVtAJkjK6vfFwn/mU4oIOasA4qhcFhje3zx/1LTb5ze3zc4hclYipjkFZ2Ovk/wC5WoKYN3S0xAAAAABJRU5ErkJggg==",alt:""})]}),Object(n.jsxs)(Q.b,{to:"/settings",children:[Object(n.jsx)("span",{className:R.a.nameLink,children:"Settings"})," ",Object(n.jsx)("img",{className:R.a.icon,src:"data:image/png;base64,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",alt:""})]})]})})})},X=function(A){Object(S.a)(t,A);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.friendsRecomendationsThunk(3)}},{key:"render",value:function(){return Object(n.jsx)(W,Object(d.a)({},this.props))}}]),t}(a.a.Component),_=Object(v.d)(Object(g.b)((function(A){return{friendsRecomendations:A.usersPage.friendsRecomendations,isAuth:A.auth.isAuth}}),{friendsRecomendationsThunk:function(A){return function(e){return j.c.getUser(A).then((function(A){var t;e((t=A.items,{type:y,users:t}))}))}}}))(X),$=t(135),AA=Object($.a)((function(A){return A.usersPage.users}),(function(A){return A.filter((function(A){return!0}))})),eA=function(A){return A.usersPage.pageSize},tA=function(A){return A.usersPage.totalUserCount},nA=function(A){return A.usersPage.currentPage},rA=function(A){return A.usersPage.isFetching},aA=function(A){return A.usersPage.followingInProgress},oA=t(51),iA=t(38),sA=t.n(iA),cA=t(131),SA=t(92),uA=t.n(SA),lA=function(A){for(var e=Math.ceil(A.totalItemsCount/A.pageSize),t=[],a=Math.ceil(e/A.portionSize),o=Object(r.useState)(1),i=Object(cA.a)(o,2),s=i[0],c=i[1],S=(s-1)*A.portionSize+1,u=s*A.portionSize,l=1;l<=e;l++)t.push(l);return Object(n.jsxs)("div",{className:uA.a.pageNav,children:[s>1&&Object(n.jsx)("button",{onClick:function(){return c(s-1)},children:"\u276e"}),t.filter((function(A){return A>=S&&A<=u})).map((function(e){return Object(n.jsx)("span",{className:A.currentPage===e&&uA.a.pageNavActive,onClick:function(){return A.onPageChanged(e)},children:e})})),a>s&&Object(n.jsx)("button",{onClick:function(){return c(s+1)},children:"\u276f"})]})},gA=function(A){var e=A.user;return Object(n.jsxs)("div",{className:sA.a.item,children:[Object(n.jsx)(Q.b,{to:"/profile/".concat(e.id),className:sA.a.avatar,children:Object(n.jsx)("img",{src:null!=e.photos.large?e.photos.large:Y.a,alt:""})}),Object(n.jsx)(Q.b,{to:"/profile/".concat(e.id),children:Object(n.jsx)("div",{className:sA.a.name,children:e.name})}),Object(n.jsx)("div",{className:sA.a.followed,children:e.followed?Object(n.jsx)("button",{disabled:A.followingInProgress.some((function(A){return A===e.id})),onClick:function(){return A.followThunkCreator(e.id)},children:"Unfollow"}):Object(n.jsx)("button",{disabled:A.followingInProgress.some((function(A){return A===e.id})),onClick:function(){return A.unfollowThunkCreator(e.id)},children:"Follow"})})]},e.id)},dA=function(A){return Object(n.jsxs)("div",{className:sA.a.users,children:[Object(n.jsx)(lA,{onPageChanged:A.onPageChanged,totalItemsCount:A.totalUserCount,pageSize:A.pageSize,currentPage:A.currentPage,portionSize:10}),A.users.map((function(e){return Object(n.jsx)(gA,{user:e,followingInProgress:A.followingInProgress,followThunkCreator:A.followThunkCreator,unfollowThunkCreator:A.unfollowThunkCreator},e.id)}))]})},bA=function(A){Object(S.a)(t,A);var e=Object(u.a)(t);function t(){var A;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(A=e.call.apply(e,[this].concat(r))).onPageChanged=function(e){A.props.onPageChangedThunkCreator(A.props.pageSize,e)},A}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFetching?Object(n.jsx)(oA.a,{}):null,Object(n.jsx)(dA,Object(d.a)(Object(d.a)({},this.props),{},{onPageChanged:this.onPageChanged}))]})}}]),t}(a.a.Component),jA=Object(g.b)((function(A){return{users:AA(A),pageSize:eA(A),totalUserCount:tA(A),currentPage:nA(A),isFetching:rA(A),followingInProgress:aA(A)}}),{follow:K,unfollow:V,setCurrentPage:M,toggleIsFollowingProgress:q,getUsersThunkCreator:function(A,e){return function(t){t(Z(!0)),j.c.getUser(A,e).then((function(A){var e;t(T(A.items)),t(Z(!1)),t((e=A.totalCount,{type:H,totalUsersCount:e}))}))}},onPageChangedThunkCreator:function(A,e){return function(t){t(M(e)),t(Z(!0)),j.c.getUser(A,e).then((function(A){t(T(A.items)),t(Z(!1))}))}},followThunkCreator:function(A){return function(e){e(q(!0,A)),j.c.follow(A).then((function(t){0===t.resultCode&&(e(V(A)),e(q(!1,A)))}))}},unfollowThunkCreator:function(A){return function(e){e(q(!0,A)),j.c.unfollow(A).then((function(t){0===t.resultCode&&(e(K(A)),e(q(!1,A)))}))}}})(bA),mA=t(21),fA=t.n(mA),hA=t.p+"static/media/socialNetvorkMainLogo.d7afdff8.png",OA=function(A){return Object(n.jsx)("header",{className:fA.a.header,children:Object(n.jsxs)("div",{className:fA.a.row,children:[Object(n.jsx)("h1",{className:fA.a.sectionTitle,children:"Section title"}),Object(n.jsx)(Q.b,{to:"/profile",children:Object(n.jsx)("div",{className:fA.a.logo,children:Object(n.jsx)("img",{src:hA,alt:""})})}),A.isAuth?Object(n.jsx)("span",{className:fA.a.search,children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEoSURBVDiNldK/LoNhGAXw3yMG6WyoiLgBEoOli3QUC4PJTTC4A6Oh3azGLjaxCJFIpZNBCEsXERMJF8Br+N42n09TnORJ3uQ55zz/Xiklg0ATh7jFOy6xj3qZV44JiIhaRBzgHLM4wi6usYG7iNgyCrnyAd6wWa2AKbTwieaIvGZO/hBXiB30UasaHOJ0nDgTp/GB1eoOlnE1cr7vo77gPvOHmMAcnn4zyHjEfNXgBgt/NFjCQ9Wgh7WImBqnjIgGZtCt5up4RWvMAmuK+Y9/5DJhS3HKDqYr4kYWJ+yNNCh9477iVLc4wXMWHmMvv3fKBpODOVJKFxGxiBXFqeZxhm5KqZf38IpWREgptQfCfwV2yp0MO/grUkrtiJA7+YzBf/4vImIb61+ORyh//I2xTgAAAABJRU5ErkJggg==",alt:""})}):null,A.isAuth?Object(n.jsxs)("div",{className:fA.a.menu,children:[Object(n.jsx)(Q.b,{to:"/profile/"+A.userId,className:fA.a.userName,children:A.login}),Object(n.jsx)("div",{className:fA.a.avatar,children:Object(n.jsx)("img",{src:A.authUserProfile&&A.authUserProfile.photos.small?A.authUserProfile.photos.small:Y.a,alt:""})}),Object(n.jsx)("button",{className:fA.a.authBtn,onClick:A.logout,children:"Log out"})]}):Object(n.jsx)(Q.b,{to:"/login",className:fA.a.auth,children:Object(n.jsx)("button",{className:fA.a.authBtn,children:"Sign Up"})})]})})},pA=function(A){Object(S.a)(t,A);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(n.jsx)(OA,Object(d.a)({},this.props))}}]),t}(a.a.Component),CA=Object(g.b)((function(A){return{isAuth:A.auth.isAuth,login:A.auth.login,userId:A.auth.userId,authUserProfile:A.auth.authUserProfile}}),{logout:B})(pA),BA=t(56),EA=t(45),wA=t.n(EA),NA=t(129),xA=t(130),vA=t(73),QA=t(96),IA=t(33),RA=t.n(IA),PA=Object(xA.a)({form:"login"})((function(A){var e=Object(QA.a)("input");return Object(n.jsxs)("form",{onSubmit:A.handleSubmit,className:wA.a.loginForm,children:[A.error&&Object(n.jsxs)("div",{className:RA.a.generalFormError,children:[Object(n.jsx)("span",{className:RA.a.errorTitle,children:"Title"}),Object(n.jsx)("p",{className:RA.a.errorDescription,children:A.error})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(NA.a,{component:e,name:"email",validate:[vA.c]}),Object(n.jsx)(NA.a,{component:e,name:"password",type:"password",validate:[vA.c]})]}),Object(n.jsxs)("div",{className:wA.a.rememberMe,children:[Object(n.jsx)(NA.a,{component:e,type:"checkbox",name:"rememberMe"}),Object(n.jsx)("span",{children:"Rememder me"})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:wA.a.btn,children:"Login"})})]})})),DA=Object(g.b)((function(A){return{isAuth:A.auth.isAuth}}),{login:function(A,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(n){j.a.login(A,e,t).then((function(A){if(0===A.data.resultCode)n(p());else{var e=A.data.messages.length>0?A.data.messages[0]:"Error";n(Object(b.a)("login",{_error:e}))}}))}}})((function(A){return A.isAuth?Object(n.jsx)(l.a,{to:"/profile"}):Object(n.jsxs)("section",{className:wA.a.login,children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsx)("span",{className:wA.a.info,children:"Please log in to the social network"}),Object(n.jsx)(PA,{onSubmit:function(e){var t=e.email,n=e.password,r=e.rememberMe;Object(BA.a)(e,["email","password","rememberMe"]);A.login(t,n,r)}})]})})),UA=t(95),kA=t.n(UA),FA=Object(g.b)(null,{logout:B})((function(A){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:kA.a.title,children:"Settings"}),Object(n.jsx)("button",{className:kA.a.importantly,onClick:A.logout,children:"Sign out account"})]})})),HA=a.a.lazy((function(){return t.e(3).then(t.bind(null,295))})),GA=a.a.lazy((function(){return t.e(4).then(t.bind(null,296))})),LA=function(A){Object(S.a)(t,A);var e=Object(u.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initializationSuccess?Object(n.jsxs)("div",{className:"main-wrapper",children:[Object(n.jsx)(CA,{}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(_,{}),Object(n.jsxs)("div",{className:"wrapper-content",children:[Object(n.jsxs)(r.Suspense,{fallback:Object(n.jsx)(oA.a,{}),children:[Object(n.jsx)(l.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(GA,{})}}),Object(n.jsx)(l.b,{path:"/dialogs",render:function(){return Object(n.jsx)(HA,{})}})]}),Object(n.jsx)(l.b,{path:"/users",render:function(){return Object(n.jsx)(jA,{})}}),Object(n.jsx)(l.b,{path:"/settings",render:function(){return Object(n.jsx)(FA,{})}}),Object(n.jsx)(l.b,{path:"/login",render:function(){return Object(n.jsx)(DA,{})}})]})]})]}):Object(n.jsx)(oA.a,{})}}]),t}(a.a.Component),yA=Object(v.d)(l.f,Object(g.b)((function(A){return{initializationSuccess:A.app.initializationSuccess}}),{initializeApp:function(){return function(A){var e=A(p());Promise.all([e]).then((function(){A({type:w})}))}}}))(LA),zA=t(128),KA=t(97),VA=t(137),TA=t(132),MA=Object(v.c)({profilePage:KA.b,dialogsPage:zA.b,usersPage:J,auth:E,form:TA.a,app:x}),ZA=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,qA=Object(v.e)(MA,ZA(Object(v.a)(VA.a)));i.a.render(Object(n.jsx)(Q.a,{children:Object(n.jsx)(g.a,{store:qA,children:Object(n.jsx)(yA,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))},33:function(A,e,t){A.exports={formControl:"FormsControls_formControl__11eJF",error:"FormsControls_error__33ZZc",generalFormError:"FormsControls_generalFormError__3Bypq",errorTitle:"FormsControls_errorTitle__2ph1h",errorDescription:"FormsControls_errorDescription__N8ngy"}},36:function(A,e,t){"use strict";e.a="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/bAEMABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fH//bAEMBBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//CABEIAZ8BnwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQHAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAfRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWRZHHGaj6bTsJMkzIAAAAAAAAAAAAAAAAAAAHIVohDUAAADeTpZDoAAAAAAAAAAAAAAAAABiVkrRgAAAAADaWksQAAAAAAAAAAAAAAAANJSSLAAAAAAABNFzMwAAAAAAAAAAAAAADUUM4AAAAAAAAASxdzMAAAAAAAAAAAAAA+FHIgAAAAAAAAAE+XEAAAAAAAAAAAAAArhUgAAAAAAAAAAXYmgAAAAAAAAAAAADSedGoAAAAAAAAAAHUeiGQAAAAAAAAAAAAKyVUAAAAAAAAAAAFyJ4AAAAAAAAAAAAHnZxgAAAAAAAAAAAlS9gAAAAAAAAAAAHGedgAAAAAAAAAAAGR6SbQAAAAAAAAAAAQRTAAAAAAAAAAAAAX0kwAAAAAAAAAAAVgqwAAAAAAAAAAAALkTwAAAAAAAAAAAKoVoAAAAAAAAAAAAFuLEAAAAAAAAAAACrFYAAAAAAAAAAAABcCwAAAAAAAAAAAArpUQAAAAAAAAAAAAXcmQAAAAAAAAAAARRRAAAAAAAAAAAAAeiHYAAAAAAAAAAADWebGAAAAAAAAAAAAOk9HAAAAAAAAAAAABSSFAAAAAAAAAAABYy2gAAAAAAAAAAAAiiiAAAAAAAAAAAGR6EdgAAAAAAAAAAAABRSJAAAAAAAAAABPlxAAAAAAAAAAAAABxlANQAAAAAAAAAOk9AN4AAAAAAAAAAAAABClLMQAAAAAAAAZl6JMAAAAAAAAAAAAAAAgSnmIAAAAAAANhdSXAAAAAAAAAAAAAAAAIkppzgAAAAAA6y6EiAAAAAAAAAAAAAAAAAaCrEEYAAAAA2FhLObAAAAAAAAAAAAAAAAAAAcxBEOcBgADMkSZJw3gAAAAAAAAAAAAAAAA5TqAAABgcxqBuOo+gAAHwwNgAAAAAAAAAAAAI8qxEk0W83AAAAAAAAA5inEcWIshtAAAAAAAAAABgVYrpiAby0E+ZAAAAAAA1ldK0agDpLiSwAAAAAAAAANJSCMAAAOknycOwAAAAHAQRAmkAAGRaiyAAAAAAAAA0FFOAAAAAA6ySO06TMGs5jhI05gAAAACzlpAAAAAAABiUMjQAAAAAAAAAAAAAAAAW8sIAAAAAABTyvgAAAAAAAAAAAAAAAAGReyTAAAAAAIYpAAAAAAAAAAAAAAAAAAB1noJsAAAAANZ56coAAAAAAAAAAAAAAAAAALKWsAAAAArBVgAAAAAAAAAAAAAAAAAADM9COsAAAA1HnRpAAAAAAAAAAAAAAAAAAABPlxAAAAK2VMAAAAAAAAAAAAAAAAAAAAzPRToAAAB54cQAAAAAAAAAAAAAAAAAAAALUWYAAAjzz8AAAAAAAAAAAAAAAAAAAAA7T0MAAAqxWAAAAAAAAAAAAAAAAAAAAAAeiHYAACgEcAAAAAAAAAAAAAAAAAAAAAC3FiAAMDzUwAAAAAAAAAAAAAAAAAAAAABOF0AAOI88AAAAAAAAAAAAAAAAAAAAAAJA9AAP//EACkQAAICAgEDBAICAwEAAAAAAAIDAQQFQAATMFAREhUgECEjMSQyM4D/2gAIAQEAAQUC/wDQJGAQzK1A4eank5a3PPk7vPlLnBy9qOBmuLydQ+RMFHiH2Uoh+XaXDMznsLaxcozBRxL1NHwkzERby3CKSnuAw1lUyol4NrQUFy8yxOhSyJJ4BCQ77GAsLds7B6VG6VchKCjeyFyXs1MZd6ZbuWte0dbGWuqrba0VLYZMPWrOlLomCjazD9nEv96Nq03q2NjGt6dvZuM6dbZiZiVn717GXL0rbWNP3U9jNT+trDz/AI2xmv8Abaw3/LYzUfvaw0fwbGZH+LaxI+lTYyYe6ntVA9lbYMIMCGRLYrr6jtrKp6dnYw6fVm1kUdatr/3yojoI28jW6L9bFVuo3ctVxekwID1EJNzUqFS93I0esOmIkRUacV17+Qx/V5MTE6ACRlRoQiPA3MeD+NSxR96vWa8qlJVePBtSto2cSweTExPaECOa2ImeAsFj4Z1dLobho4zH2w5MTH1gSLi8dbPicOEcUlSo8EdlAF2JES5NOrPPj6XPj6XBqVR5ERHZAwONqzeQjljJWG/inkmJ4pq2jpPsKQNvINscWxi5r5eeLYDB1pmBi3lZnn9/RTmKKtlwLgkJR3jMAizl44ZmZflL2pKpkFv1WtBQW7rLE/dT3KlOZ4q3Wb223qquOzBzxjWMn70Ml7tNrQUFq0dg+2u1YXwMvZjg5oeRmK3PlqfPlqfJzFbhZrh5a1PGWHs7mOyGiRCI3bZWGeCxt736GTue8vBxMxNG3FhXdyVvoq8LWeSGgYmHbMxAbDic3w2Jtek9vL2PERMjNZ8PR2WHCwawmM8RibHsb2cw/wBA8SMyMobDVdi27rWPFYZ36+99vTq+Lpt6Vn75lv78ZUb1K32vs6lvxmGZ6q+pT7RmfWfGYg/Sz9bkzFXxtCZi3+f/xAAUEQEAAAAAAAAAAAAAAAAAAACw/9oACAEDAQE/ASkP/8QAFBEBAAAAAAAAAAAAAAAAAAAAsP/aAAgBAgEBPwEpD//EADcQAAEBBAYGCQQCAwAAAAAAAAECAAMREiExQEFRcSIwMlBSYRMgM0KBkaHB0SNicoIQsYCS8f/aAAgBAQAGPwL/ACBiohI5tQSvJtB35lu6PBtv0DbXoGplPg2m68i21KfuaIMRiN0xeK8L2g6EgxvaKyVHnqYoUU5NB8mI4hW0Xao7liaAL2lcf7/DRUYnHWzIMpxDSP8ARVx3bjK1mCQ0Nl3cn5sMi9J1/TBSTFJqO4CtZgkNE0JGymxwNLo1j3YKTSDUbfBPZJq587L0Sz9NVXI27oE1q28rPIrtEeotiniqksVqrVTZ0vBdXkwIqNVrS5H5K9rSXZrd1ZG1rXiaMrSnBWibU8VyotURWGSviEbSBxKtbvlRaXQztahgq0usja3mdpdHO1r/ACtLtWB/v/lrzJNpV9tNrdp5WkpNShBik1ii0oRxG1zXPKfG0qempNAzNrMNpFItEGSi+tWdsiNhdKfiz9KrYRVnbSg/qebFCqFCuyh2mssHaahbp0dqn1sgSkRJqDYvFbR9twdK67S8YtA12EJSIqNQaZVL0+m4phovccc2leCB18qBmbg1FK71bkleCIaLnTTw3tA0HDVypExwDTPzD7A0qBKnAbn+omPO9vpL8FNS7iMRS1Ih1aBFtiUYqoaL1U3IUNB2kJG4wlTwBRu1OkAc2pdJbsg3ZBqHSWoEMtTFBChytekYr4Q0AZEYD5/iR5pu/UNMgxFjmeGGAvaXZd8Py0UKKTyaV+P3Hw0yDMLPEmAFZaRxQOO/w6sztUpaV+JTxXNFJiMRr5lmUYlpXA/ctMszKxPUmdmDSnRecPxZStZgA3C7uT86iLtUrQfI/ZPw2gsRwqOr0l04CloOUy/cWitRUdQHT8091fzYytZgkNE0JGynWaDwjk2kEq9G0nXkWpCg1avJu95NQlRbRdeZaiCW01k6wOXx/BXtYSpRgBWWwdjZG4+heHTGycbB0KDoJ2uZ3JEUEVNT2idoe+ulT2i6uQx3MFjxHJgtNKVVawrVUKSxeG+rLc/QKqNKM9YHCc1+26ARWKmS8xrz1SlmpIiylqrVukujsrqz1SXI71Kst1AisVMl4O8NStd1Schutbk3aSdQs3nRHjuxC7owOR1Dt1+x3a7VfCnw67w3CgeG7Vo4THz6xODE407tl4k9Z7CuXdzqGPU//8QAKxAAAQEGBAYDAQEBAAAAAAAAAREAITFAQVFhcYGxMFCRocHwINHh8RCA/9oACAEBAAE/If8AoHGDBIziMYXdS1CjHxBoZo/cthGMGxAgcSGxb7LxFnUTtAndk4rwo5S7oNBeejKeIz/qGxfQS8FXIxMlaKdQgyGg1FRmOSkRA8EoBiP1z8PLEph4k88UQJDBgiEIACLO3I7tKeA1DnVxkRsK93LhgwUgqg5BXaEt2PrH7JvS6PwMThEoKieJAClwESyqnrt13iVQ34fPshnnoulK1msu9tXOwZyEQL9BinKZUvVwO3KIY5aiUsDNpA6P4plYT71YGbNR0chwmXp+8h3mkFiDGYuG80ARBRmGAAgDqEzgqDQPm8SLPQ/Uzrs9ptW4e4Ez6i82bqw7TOlg2m3nfYJla8R0TZBPuJ4mcSoHQv7Td7gJOZed5mIMC1aIAktJkttQcq9mg6aURDrxGZSM53ztNuwX98dJgAkACkuAYGa3HGcVw9oNZc5Ld/mdcZmNihhaqUCVCLcNhUlgWu+tyc55xzqFts7MQQULiIiTIgKQFWeb0aMByAKgJ7+bEAEBxBkSgnQDQvR5pgHIhZwan0qxsbTscjXjvCrvcLVC48chYckQ9x4jI0ZTPjIftjoJBEnHhipZYAUshImpqWEBQQ5OIANtDVoxL2iGiZlLsxdCFiE+JhDkbBW9cDCLIxejdYtkGjyeRkqQgVvbg9oUDu0bmibN7Bb2C0Bmi7sLQQWBNuASACSUAiWxTQSzYFLFG1syn1F6xf4iKUfBfJkX8OmdpPchDIMYIYYVzNinEmGRWNXVgYCWolz0Z6JAMt2c1vBiSSkqTEn4KcYMDmKsl4Dx51DAAh4EUcc7BDgMAqo6OgYqJJH4C9JVFDmGS9jHNK7sJYBk3A/vceAujcKHMQaF6K5ooruweHCE5v2ZcBDNPSDZnw8fMEgqChECGyRT1wxYyff7A4Bu38AH3xIUQuUdCoaHrkrs1Re12J2Rf8zjsjbAAw/a7NR/gFPdoB9iXdIcR44YF3HaRSQNSWZVenecTyNKL46LZyC+8TwoeByQCOoUhQssnHHiZ8Z5dHuOTIN4deqDGdQKXEIYg1Gy3S1A5Otm/qBrxEwdH8nKD1oZSxDCBFwbBHhR6YWjREpT9cpWXsh+xwlIP6JDvyopaFBLENcMCLGo68F8EXYBytUx9mPARkoLV/PLHrJsIeA6FF2By2tpIzOH53kNLlpRbLL+PkEjACToxzsTJav5ap0GGoePkaBJUDsXcuIQE1gWIT4f/9oADAMBAAIAAwAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQCQSAAAAAAAAAAAAAAAAAAAAASCSSSQSAAAAAAAAAAAAAAAAAAQSSSSSSQAAAAAAAAAAAAAAAAAASSSSSSSSSAAAAAAAAAAAAAAAACSSSSSSSSSCAAAAAAAAAAAAAACCSSSSSSSSSQAAAAAAAAAAAAAACSSSSSSSSSSSQAAAAAAAAAAAAACSSSSSSSSSSSQAAAAAAAAAAAAACSSSSSSSSSSSSAAAAAAAAAAAAACSSSSSSSSSSSQAAAAAAAAAAAAASSSSSSSSSSSSSQAAAAAAAAAAACSSSSSSSSSSSSSAAAAAAAAAAAACSSSSSSSSSSSSSQAAAAAAAAAAACSSSSSSSSSSSSSAAAAAAAAAAAAASSSSSSSSSSSSSAAAAAAAAAAAACSSSSSSSSSSSSSAAAAAAAAAAAAASSSSSSSSSSSSSAAAAAAAAAAAACSSSSSSSSSSSSQAAAAAAAAAAAAASSSSSSSSSSSSQAAAAAAAAAAAAASSSSSSSSSSSSCAAAAAAAAAAAAACSSSSSSSSSSSAAAAAAAAAAAAAACCSSSSSSSSSQQAAAAAAAAAAAAAAQSSSSSSSSSSAAAAAAAAAAAAAAAASSSSSSSSQAAAAAAAAAAAAAAAAAQSSSSSSSAAAAAAAAAAAAAAAAAACQSSSSSSAAAAAAAAAAAAAAAAAAACACSSQQAAAAAAAAAAAAAAAACAAAAQAAAAACAAAAAAAAAAAAAAAQAAAAAAAAAAQQAAAAAAAAAACASSAAAAAAAAACSAAAAAAAAAAAASSSQQAAAAASSSSQAAAAAAAAACCSSSSSSQSSSSSSSSSAAAAAAAACSSSSSSSSSSSSSSSSSAAAAAAAACSSSSSSSSSSSSSSSSSSAAAAAACSSSSSSSSSSSSSSSSSSQAAAAAAQSSSSSSSSSSSSSSSSSSSAAAAAASSSSSSSSSSSSSSSSSSSSCAAAACSSSSSSSSSSSSSSSSSSSSSAAAACSSSSSSSSSSSSSSSSSSSSSQAAAASSSSSSSSSSSSSSSSSSSSSQAAACSSSSSSSSSSSSSSSSSSSSSQAAACSSSSSSSSSSSSSSSSSSSSSQAAASSSSSSSSSSSSSSSSSSSSSSSAACCSSSSSSSSSSSSSSSSSSSSSSAACSSSSSSSSSSSSSSSSSSSSSSSAD/xAAUEQEAAAAAAAAAAAAAAAAAAACw/9oACAEDAQE/ECkP/8QAFBEBAAAAAAAAAAAAAAAAAAAAsP/aAAgBAgEBPxApD//EACsQAQABAgMHBAMBAQEAAAAAAAERITEAQVFAUGFxgZGhMLHB8CDR8eEQgP/aAAgBAQABPxD/ANA8I8YvKb4YQvJvYGFqGZOXsR5w9b5TL5MfYvjAKM/Bi8GEDVkh3+DDyFDOU9k98KiFmBOkJMHX2wO4TumFBye2BriIdKEbH01wgSbuXn0Tp3mgPMs4TGtJgcbrpGNFflOElTcp3yVIAzVwhpyoKvW92EmDLVF1X1blaxD/ALicQQJDcOfjblgRBERJEqI6biDLeK65BmumHBVdJyWhu8LGwtuhgLzZ6/4YDkBCRHcBCCS3gDNcsTMVoDR1dVm7HK5S5M9HXUzwFE5iRLJtyJwSpQAqriRQYdIfspsqZiDUX6c9uUo5DN23z8NnWmQJb2eYWdsuKdma2Dm0xP6VdJsHAKGzyOxEPBdrzg6hRbISO1rVagNLJ5dpeQrhdSTyG1SFVgKrwwqGWcGydCdpqZEunreG1K2hw0+ewCCNNpRaAPokj3xa3P0naXNatHBV5Da2Us9yceRtKRM09ibWzLMw5fpbT9xo2t3JLOr/AFtKaB7JXztcEG0Tr/XaUgKPvV2tQu3PAjaeUhKdtLudrdUgJ0+W2kR0gXApgN458uH22kHkgHhZ8TgAAsUORtSwMYOUKPztK3yN9FBtapmSZdgpc/INoeksFdVgDEZiJAzq9lum2PFDr5I+Jtw2d1mpdbL7a7bCsvK13LJwpFJuSfDlss2JeCfZGIdEIc15C24I0QAUhz8H6YQAoRKIlxNjMA4CVORiCREIVDRP6bgFLIkaBMz7nCAGo0IlxHYVqjAyq4DQxx1Fv87uJMgCzYyB/rANRmqGtgevQ7Dlg1+C+JOYsDq4O5BylWzGoVXLCrgVoAcMvfihVYKHR9OlSpDsGGs65ZfLocjFi1Ig58Xc8s/ZCOQa4Yr9JydK3ccMqU0Ytcx1MMBCiN7sSNv+qF3B22waXbDgjbNIdU+OFETPtqqvGMjBMYXyO4xDsSJFtR7vRIgDT2U4Zn61mMf1f2wCjPGSo98IC2Wp+THBAwPYHoH2FKMAGa4DLOWPja2FITDeGVjzw5LVBUR3HTDVVqtVwBEFEsnxNnFgItXbloLrnscJIZhqplmYmhNqq8edytgSRZwnmWeuGMqooHHO6YsF6eTk6PB2c5yKMAZq4fe3URyDZxvh45UoVVzV/AAS3VQ0sDnipV0hVOD9uKhBwE5J69zjSA/3BmQyUD3+bi88kS8uBwPwFc+8zK04Jgx1TzVL8r7KfXPN1kGa4cuVyLfSD/D0JGpZFnnMrClS199+BweSjN6FCenpNCWxdwAg/wCrQdXAa4oeHNHXGme1yHJY6fmCcqUQiWRMChBxSB2NDYyI4a6mQZrh7XSG806rN9QcLDKH9y2IAAapOqTxh0Q3OB9hgip6R9jj+j/eP6f94DrenyXEFnXKM9rglC6zHdWnjEqKrtO3Hh6jEkUL1HJ3lsIhHqYAu4jSUo+n2NNxpKRQyp51y+TYGzmGplvrXcj2REoQqJgShDNm5Bp7vWtZJQvY5mRuaZNTRtc+OOIYIk0deJn6k7L0ZBig6uNOtcjc9xeVcrvfHqLkKj0zffdDlDi3EkcRzhQ+CPevpLXHEGFji2MKVK+FNhwCm6VzAZ2D/h6V17o6tPWrpupahyXEke+I/oAHJ6XoKFWxfCCyftI533XcEUTpQTrD6C18Ys2qcpO7J5gjRzDlM9PQkWoA8Wi9l3bNLAvnnXOJ/OMGR8pj3ndsjqkfBh8/keeFrQE48/dDV77tn5jmhT5PygIFBVok00K7us9kBWQmDIv+H//Z"},38:function(A,e,t){A.exports={avatar:"Users_avatar__3yh5q",item:"Users_item__rwyZ9",name:"Users_name__-CNdu",followed:"Users_followed__3XwjY"}},45:function(A,e,t){A.exports={info:"Login_info__2DRip",loginForm:"Login_loginForm__2YIZ7",rememberMe:"Login_rememberMe__smbfr",btn:"Login_btn__WdPWk"}},51:function(A,e,t){"use strict";var n=t(1),r=(t(0),t.p+"static/media/preloader.41747e97.svg"),a=t(91),o=t.n(a);e.a=function(A){return Object(n.jsx)("div",{className:o.a.preloader,children:Object(n.jsx)("img",{src:r,alt:"",className:o.a.gif})})}},73:function(A,e,t){"use strict";t.d(e,"c",(function(){return n})),t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return a}));var n=function(A){if(!A)return"Field is required"},r=function(A){return function(e){if(e&&e.length<A)return"Min length sting is ".concat(A," symbols")}},a=function(A){return function(e){if(e&&e.length>A)return"Max length sting is ".concat(A," symbols")}}},91:function(A,e,t){A.exports={preloader:"Preloader_preloader__2ZQKd",gif:"Preloader_gif__1bIQd"}},92:function(A,e,t){A.exports={pageNav:"Pagination_pageNav__1h-tT",pageNavActive:"Pagination_pageNavActive__pLmTm"}},95:function(A,e,t){A.exports={title:"Settings_title__295XZ",importantly:"Settings_importantly__2O6bd"}},96:function(A,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return c}));var n=t(3),r=t(56),a=t(1),o=(t(0),t(33)),i=t.n(o),s=function(A,e){return function(t){var o=t.input,s=t.meta,c=Object(r.a)(t,["input","meta"]);return Object(a.jsxs)("div",{className:i.a.formControl,children:[Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},o),c)),s.error?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)("button",{className:A,children:e})]})}},c=function(A){return function(e){var t=e.input,o=e.meta,s=Object(r.a)(e,["input","meta"]),c=o.touched&&o.error;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:0),children:[Object(a.jsx)(A,Object(n.a)(Object(n.a)({},t),s)),c&&Object(a.jsx)("span",{children:o.error})]})}}},97:function(A,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"c",(function(){return g})),t.d(e,"d",(function(){return d})),t.d(e,"e",(function(){return b}));var n=t(41),r=t(3),a=t(15),o="ADD-POST",i="SET_USER_PROFILE",s="SET_USER_STATUS",c="UPDATE_USER_STATUS",S={posts:[{id:1,post:"Demo post. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",likesCount:1}],profile:null,status:""},u=function(A){return{type:o,newPostMessage:A}},l=function(A){return{type:s,status:A}},g=function(A){return function(e){a.b.setUserProfile(A).then((function(A){e({type:i,profile:A})}))}},d=function(A){return function(e){a.b.getUserStatus(A).then((function(A){e(l(A))}))}},b=function(A){return function(e){a.b.updateUserStatus(A).then((function(t){0===t.resultCode&&e(l(A))}))}};e.b=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:var t={id:5,post:e.newPostMessage,likesCount:0};return Object(r.a)(Object(r.a)({},A),{},{posts:[].concat(Object(n.a)(A.posts),[t])});case i:return Object(r.a)(Object(r.a)({},A),{},{profile:e.profile});case s:case c:return Object(r.a)(Object(r.a)({},A),{},{status:e.status});default:return A}}}},[[288,1,2]]]);
//# sourceMappingURL=main.8d24906d.chunk.js.map