(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{49:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a,r,i=n(0),c=n.n(i),o=n(22),s=n.n(o),d=(n(49),n(4)),p=n(7),l=n(5),h=n(6),b=Object(l.a)(a||(a=Object(d.a)(["\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    text-decoration: none!important;\n}\nbody{\n    background:#90cea1;\n    width:100%;\n}\nh1,h2,h3,h4{\n    text-decoration: none !important;\n}\nh2{\n    font-size:2rem;\n    text-align:center\n   \n}\nh3{\n    font-size:1.3rem;\n    color: rgb(13, 37, 63);\n    text-decoration: none!important;\n}\np{\n    font-size:1.1rem;\n    line-height:200%;\n    color: rgb(13, 37, 63);\n}\n"]))),j=n(18),u=n(16),m=n.n(u),g=n(21),O=n(13),x=n.n(O),v="https://api.themoviedb.org/3/movie/",f="76092255094f42d113219df9cd6d44b0",w=function(e){return"".concat(v).concat(e,"?api_key=").concat(f)},y=function(e){return"".concat(v).concat(e,"/images?api_key=").concat(f)},_=function(e){return"".concat(v).concat(e,"/similar?api_key=").concat(f)},k=function(e){return"".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(f,"&query=").concat(e)},S=n(17),M={detail:[],images:[],similar:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Fetch_Detail":return Object(S.a)(Object(S.a)({},e),{},{detail:t.payload.details,images:t.payload.image,similar:t.payload.similar});default:return Object(S.a)({},e)}},P=n(1);var z,R,C,D=Object(l.b)(h.a.div)(r||(r=Object(d.a)(["\n  min-height: 50vh;\n  box-shadow: 0px 0px 30px rgba(1, 180, 228, 0.8);\n  overflow: hidden;\n  img {\n    width: 100%;\n    display: block;\n    object-fit: cover;\n    height: 70vh;\n  }\n  h3 {\n    color: rgb(13, 37, 63);\n    text-decoration: none !important;\n  }\n  p {\n    color: white;\n    text-decoration: none !important;\n  }\n  text-align: center;\n  border-radius: 2rem;\n"]))),E=function(e){var t=e.name,n=e.id,a=e.released,r=e.image,i=Object(p.b)();return Object(P.jsx)(j.b,{to:"/movie/".concat(n),children:Object(P.jsxs)(D,{onClick:function(){var e;i((e=n,function(){var t=Object(g.a)(m.a.mark((function t(n){var a,r,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get(w(e));case 2:return a=t.sent,t.next=5,x.a.get(y(e));case 5:return r=t.sent,t.next=8,x.a.get(_(e));case 8:i=t.sent,n({type:"Fetch_Detail",payload:{details:a.data,image:r,similar:i.data.results}});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(P.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(r)}),Object(P.jsx)("h3",{children:t}),Object(P.jsxs)("p",{children:["Released Date: ",a]})]})})};var T,N=Object(l.b)(h.a.div)(z||(z=Object(d.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  position: fixed;\n  top: 0;\n  left: 0;\n  border-radius: 1rem;\n"]))),I=Object(l.b)(h.a.div)(R||(R=Object(d.a)(["\n  width: 80%;\n  background: white;\n  min-height: 100vh;\n  padding: 2rem 20rem;\n  left: 10%;\n  position: absolute;\n  color: black;\n  img {\n    width: 100%;\n  }\n  p,\n  h2,\n  h3 {\n    color: white;\n  }\n  h2,\n  h3 {\n    text-aling: center;\n  }\n  background: #080e29;\n"]))),L=Object(l.b)(h.a.div)(C||(C=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  grid-gap: 2rem;\n  h2 {\n    text-align: center;\n  }\n"]))),U=function(){var e=Object(p.c)((function(e){return e.details})),t=e.detail,n=e.images,a=e.similar;return Object(P.jsx)(N,{children:Object(P.jsxs)(I,{children:[Object(P.jsx)("h2",{children:t.title}),Object(P.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path)}),Object(P.jsx)("p",{children:t.overview}),Object(P.jsx)("h3",{children:"Screen Shots"}),n.data&&Object(P.jsx)(L,{children:n.data.backdrops.map((function(e){return Object(P.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.file_path)})}))}),Object(P.jsx)("h2",{children:"Similar Movies"}),a&&Object(P.jsx)(L,{children:a.map((function(e){return Object(P.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(e.poster_path)})}))})]})})};var B,J,X=Object(l.b)(h.a.div)(T||(T=Object(d.a)(["\n  min-height: 50vh;\n  box-shadow: 0px 0px 30px rgba(1, 180, 228, 0.8);\n  overflow: hidden;\n  img {\n    width: 100%;\n    display: block;\n    object-fit: cover;\n    height: 70vh;\n  }\n  h3 {\n    color: rgb(13, 37, 63);\n    text-decoration: none !important;\n  }\n  p {\n    color: white;\n    text-decoration: none !important;\n  }\n  text-align: center;\n  border-radius: 2rem;\n"]))),q=function(e){var t=e.title,n=e.image;return Object(P.jsxs)(X,{children:[Object(P.jsx)("img",{src:n}),Object(P.jsx)("h3",{children:t})]})};var A,V,G=Object(l.b)(h.a.div)(B||(B=Object(d.a)(["\n  padding: 0rem 4rem;\n  h2 {\n    padding: 4rem 0rem;\n    text-decoration: none !important;\n    color: white;\n  }\n"]))),H=Object(l.b)(h.a.div)(J||(J=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  grid-gap: 2rem;\n"]))),K=function(){var e=Object(p.c)((function(e){return e.movies})),t=(e.popular,e.topRated,e.upcoming,e.searched,e.nowPlaying);return Object(P.jsxs)(G,{children:[Object(P.jsx)("h2",{children:"Now Playing Movies"}),Object(P.jsx)(H,{children:t&&t.map((function(e){return Object(P.jsx)(q,{title:e.title,image:"https://image.tmdb.org/t/p/w300".concat(e.poster_path)})}))})]})},Q=n(3),W=function(){return function(){var e=Object(g.a)(m.a.mark((function e(t){var n,a,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(v,"popular?api_key=").concat(f,"&page_size=10"));case 2:return n=e.sent,e.next=5,x.a.get("".concat(v,"top_rated?api_key=").concat(f,"&page_size=10"));case 5:return a=e.sent,e.next=8,x.a.get("".concat(v,"upcoming?api_key=").concat(f,"&page_size=10"));case 8:return r=e.sent,e.next=11,x.a.get("".concat(v,"now_playing?api_key=").concat(f,"&region=US"));case 11:i=e.sent,t({type:"Fetch_Movies",payload:{popular:n.data.results,topRated:a.data.results,upcoming:r.data.results,nowPlaying:i.data.results}});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var Y,Z=Object(l.b)(h.a.div)(A||(A=Object(d.a)(["\n  padding: 0rem 4rem;\n  h2 {\n    padding: 4rem 0rem;\n    text-decoration: none !important;\n    color: white;\n  }\n"]))),$=Object(l.b)(h.a.div)(V||(V=Object(d.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n  grid-gap: 2rem;\n"]))),ee=function(){var e=Object(Q.e)().pathname.split("/")[2],t=Object(p.b)();Object(i.useEffect)((function(){t(W())}),[]);var n=Object(p.c)((function(e){return e.movies})),a=n.popular,r=n.topRated,c=n.upcoming,o=n.searched;return Object(P.jsxs)(Z,{children:[e&&Object(P.jsx)(U,{}),o&&Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Searched Movies"}),Object(P.jsx)($,{children:o&&o.map((function(e){return Object(P.jsx)(E,{name:e.title,released:e.release_date,id:e.id,image:e.poster_path})}))})]}),Object(P.jsx)(K,{}),Object(P.jsx)("h2",{children:"Upcoming Movies"}),Object(P.jsx)($,{children:c&&c.map((function(e){return Object(P.jsx)(E,{name:e.title,released:e.release_date,id:e.id,image:e.poster_path})}))}),Object(P.jsx)("h2",{children:"Popular Movies"}),Object(P.jsx)($,{children:a&&a.map((function(e){return Object(P.jsx)(E,{name:e.title,released:e.release_date,id:e.id,image:e.poster_path})}))}),Object(P.jsx)("h2",{children:"Top Rated Movies"}),Object(P.jsx)($,{children:r&&r.map((function(e){return Object(P.jsx)(E,{name:e.title,released:e.release_date,id:e.id,image:e.poster_path})}))})]})},te=n(44);var ne=Object(l.b)(h.a.div)(Y||(Y=Object(d.a)(["\n  padding: 3rem 5rem;\n  min-height: 30vh;\n  text-align: center;\n  input {\n    width: 40%;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    margin-top: 1rem;\n    border: none;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);\n    border-radius: 1rem;\n    outline: none;\n  }\n  h2 {\n    padding-right: 2rem;\n    color: white;\n  }\n  button {\n    border: none;\n    outline: none;\n    font-size: 1.3rem;\n    padding: 0.5rem;\n    color: white;\n    border-radius: 1rem;\n    margin-left: 1rem;\n    background: rgb(13, 37, 63);\n  }\n"]))),ae=function(){var e=Object(p.b)(),t=Object(i.useState)(""),n=Object(te.a)(t,2),a=n[0],r=n[1];return Object(P.jsxs)(ne,{children:[Object(P.jsx)("h2",{children:"\ud83d\udd0e Search Movie \ud83d\udd0e"}),Object(P.jsxs)("form",{children:[Object(P.jsx)("input",{value:a,onChange:function(e){r(e.target.value)},type:"text"}),Object(P.jsx)("button",{onClick:function(t){var n;t.preventDefault(),e((n=a,function(){var e=Object(g.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(k(n));case 2:a=e.sent,t({type:"Fetch_Search",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(W()),r("")},type:"submit",children:"Search"})]})]})};var re=function(){return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(b,{}),Object(P.jsx)(ae,{}),Object(P.jsx)(Q.a,{path:["/movie/:id","/"],children:Object(P.jsx)(ee,{})})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},ce=n(15),oe={popular:[],topRated:[],upcoming:[],searched:[],nowPlaying:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Fetch_Movies":return Object(S.a)(Object(S.a)({},e),{},{popular:t.payload.popular,topRated:t.payload.topRated,upcoming:t.payload.upcoming,nowPlaying:t.payload.nowPlaying});case"Fetch_Search":return{searched:t.payload.searched};default:return Object(S.a)({},e)}},de=Object(ce.c)({movies:se,details:F}),pe=n(43),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,he=Object(ce.e)(de,le(Object(ce.a)(pe.a)));s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(p.a,{store:he,children:Object(P.jsx)(j.a,{children:Object(P.jsx)(re,{})})})}),document.getElementById("root")),ie()}},[[74,1,2]]]);
//# sourceMappingURL=main.79f5bac3.chunk.js.map