(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{290:function(t,e,s){t.exports={content__image:"Profile_content__image__108Vi",content__background:"Profile_content__background__3PGvE",content__edit:"Profile_content__edit__1dxjH",content__userPhoto:"Profile_content__userPhoto__3cBXq",content__editPhoto:"Profile_content__editPhoto__3zsf7",content__info:"Profile_content__info__2_0bz",content__name:"Profile_content__name__GKblb",content__data:"Profile_content__data__Jefik",editStatus:"Profile_editStatus__JKRcK",editStatusText:"Profile_editStatusText__19zWF",addStatus:"Profile_addStatus__rDBlk"}},291:function(t,e,s){t.exports={wrapperTextarea:"MyPosts_wrapperTextarea__T1NCH",myPostForm:"MyPosts_myPostForm__3YMBI",postsTextarea:"MyPosts_postsTextarea__VyBsg"}},294:function(t,e,s){t.exports={posts__item:"Post_posts__item__3d1SX",posts__image:"Post_posts__image__2fjvP",postWrapper:"Post_postWrapper__2b5-e",postSender:"Post_postSender__1qefa",posts__post:"Post_posts__post__11AZl",likesCount:"Post_likesCount__2yveC",likesCountNumeral:"Post_likesCountNumeral__38Nhz"}},296:function(t,e,s){"use strict";s.r(e);var a=s(3),n=s(27),o=s(28),c=s(30),r=s(29),i=s(1),u=s(0),_=s.n(u),l=s(11),p=s(290),d=s.n(p),j=s(97),b=s(41),h=s(129),f=s(130),m=s(73),O=s(96),x=s(291),P=s.n(x),v=Object(m.a)(50),g=Object(m.b)(3),N=Object(O.a)("textarea"),S=Object(f.a)({form:"newPostMessage"})((function(t){return Object(i.jsxs)("form",{className:P.a.myPostForm,onSubmit:t.handleSubmit,children:[Object(i.jsx)(h.a,{component:N,name:"newPostMessage",validate:[v,g]}),Object(i.jsx)("button",{children:"Send"})]})})),k=s(294),y=s.n(k),C=function(t){return Object(i.jsxs)("div",{className:y.a.posts__item,children:[Object(i.jsx)("div",{className:y.a.posts__image}),Object(i.jsxs)("div",{className:y.a.postWrapper,children:[Object(i.jsx)("div",{className:y.a.postSender,children:t.name}),Object(i.jsx)("div",{className:y.a.posts__post,children:t.post})]}),Object(i.jsx)("div",{className:y.a.likes,children:Object(i.jsxs)("span",{className:y.a.likesCount,children:["LIKE ",Object(i.jsx)("span",{className:y.a.likesCountNumeral,children:t.likesCount})]})})]})},T=_.a.memo((function(t){var e=Object(b.a)(t.posts).reverse().map((function(t){return Object(i.jsx)(C,{name:"Name Surname",id:t.id,post:t.post,likesCount:t.likesCount},t.id)}));return Object(i.jsxs)("div",{className:P.a.postsWrapper,children:[Object(i.jsx)("h2",{className:P.a.title,children:"My posts"}),Object(i.jsx)("div",{className:P.a.postsTextarea,children:Object(i.jsx)("div",{className:P.a.wrapperTextarea,children:Object(i.jsx)(S,{onSubmit:function(e){t.addPost(e.newPostMessage)}})})}),e]})})),w=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))(T),M=s(51),I=s(36),U=s(10),z=s(131),A=s.p+"static/media/edit.1f85f626.png",B=s(9),F=Object(B.d)(Object(l.b)((function(t){return{userId:t.auth.userId,isAuth:t.auth.isAuth,authUserProfile:t.auth.authUserProfile}}),{}),U.f)((function(t){var e=Object(u.useState)(t.status),s=Object(z.a)(e,2),a=s[0],n=s[1],o=Object(u.useState)(!1),c=Object(z.a)(o,2),r=c[0],_=c[1];Object(u.useEffect)((function(){n(t.status)}),[t.status]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:!r&&Object(i.jsxs)("div",{className:d.a.editStatus,children:[Object(i.jsx)("span",{onClick:function(){_(!0)},className:d.a.editStatusText,children:t.status||"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"}),Object(i.jsx)("img",{src:A,alt:""})]})}),r&&Object(i.jsx)("div",{children:Object(i.jsx)("input",{autoFocus:!0,onBlur:function(){_(!1),t.updateStatus(a)},onChange:function(t){n(t.currentTarget.value)},value:a})})]})})),W=function(t){return t.profile?t.isAuth||t.match.params?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:d.a.content__header,children:[Object(i.jsxs)("div",{className:d.a.content__image,children:[Object(i.jsx)("div",{className:d.a.content__background,children:Object(i.jsx)("img",{src:"https://coremission.net/wp-content/uploads/2019/10/bezshovnaya-tekstura-6.jpg",alt:""})}),Object(i.jsx)("div",{className:d.a.content__userPhoto,children:Object(i.jsx)("img",{src:null!=t.profile.photos.large?t.profile.photos.large:I.a,alt:""})})]}),Object(i.jsxs)("div",{className:d.a.content__info,children:[Object(i.jsx)("h1",{className:d.a.content__name,children:t.profile.fullName}),Object(i.jsx)(F,{status:t.status,updateStatus:t.updateStatus})]})]}),Object(i.jsx)(w,{})]}):Object(i.jsx)(U.a,{to:"/login"}):Object(i.jsx)(M.a,{})},J=function(t){Object(c.a)(s,t);var e=Object(r.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authUserId)||this.props.history.push("/users"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(i.jsx)(W,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(_.a.Component);e.default=Object(B.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.userId,isAuth:t.auth.isAuth,fake:t.profilePage.fake}}),{getUserProfile:j.c,getUserStatus:j.d,updateStatus:j.e}),U.f)(J)}}]);
//# sourceMappingURL=4.2325dbff.chunk.js.map