(this["webpackJsonpweather-forcast"]=this["webpackJsonpweather-forcast"]||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(31),s=n.n(r),i=n(16),o=n.n(i),u=n(20),l=n(21),d=n.n(l),j=n(13),m=n.n(j),b="position-relative d-flex ",h="flex-row justify-content-between",x="72b9218524d32ec84297f8d1c555ef67",f=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("https://api.openweathermap.org/data/2.5/weather?q=").concat(t,"&units=metric&appid=").concat(x));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat("https://api.openweathermap.org/data/2.5/onecall/timemachine?units=metric&lat=").concat(t.lat,"&lon=").concat(t.lon,"&dt=").concat(y(n),"&appid=").concat(x),e.next=3,d.a.get(c);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){return{temp:"".concat(Math.round(e.current.temp),"\xb0C"),main:e.current.weather.main,desc:e.current.weather.description,icon:"http://openweathermap.org/img/wn/".concat(e.current.weather[0].icon,"@2x.png"),date:"".concat(m.a.unix(e.current.dt).format("ddd D")),key:e.current.dt}},y=function(e){return m()().subtract(e,"days").unix()},v=n(11),g=n(22),w=n(70),N=n(71),F=n(1),C=Object(c.createContext)(),S=function(e){var t=Object(c.useState)(""),n=Object(v.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(v.a)(s,2),o=i[0],u=i[1],l=Object(c.useState)([]),d=Object(v.a)(l,2),j=d[0],b=d[1],h=Object(c.useState)(""),x=Object(v.a)(h,2),y=x[0],S=x[1],k=Object(c.useState)(!0),q=Object(v.a)(k,2),M=q[0],L=q[1],_=function(e){j.length<1?b([O(e)]):j.length<4?b([].concat(Object(g.a)(j),[O(e)])):4===j.length&&(b([].concat(Object(g.a)(j),[O(e)]).sort((function(e,t){return e.key-t.key}))),u(""),L(!1))},I=function(e){var t;u(e.coord),S({name:(t=e).name,country:t.sys.country,date:m.a.unix(t.dt).format("ddd, MMM D, h:ssa"),temp:"".concat(Math.round(t.main.temp),"\xb0C"),icon:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),desc:t.weather[0].description,main:t.weather[0].main,sunrise:t.sys.sunrise,sunset:t.sys.sunset,feel:"".concat(Math.round(t.main.feels_like),"\xb0C"),temp_min:"".concat(Math.round(t.main.temp_min),"\xb0C"),temp_max:"".concat(Math.round(t.main.temp_max),"\xb0C")}),b([]),r("")};return Object(w.a)("weather",(function(){return f(a)}),{onSuccess:function(e){return I(e)},cacheTime:1/0,enabled:a.length>0}),Object(N.a)([{queryKey:["day",1],queryFn:function(){return p(o,1)},onSuccess:function(e){return _(e)},retry:1,enabled:"object"===typeof o},{queryKey:["day",2],queryFn:function(){return p(o,2)},onSuccess:function(e){return _(e)},retry:1,enabled:"object"===typeof o},{queryKey:["day",3],queryFn:function(){return p(o,3)},onSuccess:function(e){return _(e)},retry:1,enabled:"object"===typeof o},{queryKey:["day",4],queryFn:function(){return p(o,4)},onSuccess:function(e){return _(e)},retry:1,enabled:"object"===typeof o},{queryKey:["day",5],queryFn:function(){return p(o,5)},onSuccess:function(e){return _(e)},retry:1,enabled:"object"===typeof o}]),Object(F.jsx)(C.Provider,{value:{city:a,setCity:r,coordinates:o,getLocalForcast:I,currentForcast:y,setCurrentForcast:S,previousForcast:j,getForcastHistory:_,isFirstLoad:M,setIsFirstLoad:L},children:e.children})},k=n(66),q="Enter city name",M=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(c.useContext)(C).setCity;return Object(F.jsx)("div",{className:"position-relative d-block mb-5 ",children:Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),a("")},children:[Object(F.jsx)("input",{type:"search",tabIndex:"0",value:n,required:!0,"aria-placeholder":q,placeholder:q,onChange:function(e){return a(e.target.value)}}),Object(F.jsx)("button",{title:"Submit ",type:"submit",tabIndex:"0",disabled:n.length<1,children:Object(F.jsx)(k.a,{})})]})})},L=n(33),_=n(67),I=n(68),K="fs-1",D=function(e){return Object(F.jsxs)("div",{className:"".concat(b," flex-column align-items-center justify-content-end ").concat(E),children:["sunrise"===e.time?Object(F.jsx)(_.a,{className:"".concat(K," "),style:{color:"#0073e6"}}):Object(F.jsx)(I.a,{className:"".concat(K," "),style:{color:"#ff5e4b"}}),Object(F.jsx)("div",{children:m.a.unix(e.data).format("h:mm a")})]})},E="px-3",P=function(){var e=Object(c.useContext)(C).currentForcast;return Object(F.jsxs)("div",{className:"".concat(b," flex-column justify-content-start align-items-between current-forcast mb-3"),children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{className:"text-center",children:"".concat(e.name,", ").concat(e.country)}),Object(F.jsx)("div",{className:"text-center",children:e.date})]}),Object(F.jsxs)("div",{className:"".concat(b," ").concat(h," align-items-center pb-3 px-4"),children:[Object(F.jsx)("h1",{className:"current-temp m-0 align-middle  fw-bold",children:e.temp}),Object(F.jsxs)("div",{className:"".concat(b," flex-column justify-content-center "),children:[Object(F.jsx)("img",{src:e.icon,alt:e.desc}),Object(F.jsx)("div",{className:"text-center",children:e.main})]})]}),Object(F.jsxs)("div",{className:"".concat(b," ").concat(h," "),children:[Object(F.jsx)(D,{time:"sunrise",data:e.sunrise}),Object(F.jsx)(D,{time:"sunset",data:e.sunset}),Object(F.jsxs)("div",{className:"".concat(b," flex-column justify-content-end ").concat(E),children:[Object(F.jsx)("div",{children:"Feels"}),Object(F.jsx)("div",{className:"text-center",children:e.feel})]}),Object(F.jsxs)("div",{className:"".concat(b," flex-row justify-content-center align-items-end ").concat(E),children:[Object(F.jsx)("span",{className:"position-relative d-inline-block min-temp ",children:e.temp_min}),Object(F.jsx)("span",{className:"position-relative d-inline-block fs-2  lh-base division",children:"/"}),Object(F.jsx)("span",{className:"position-relative d-inline-block max-temp",children:e.temp_max})]})]})]})},T=function(e){var t=Object(c.useContext)(C).previousForcast;return Object(c.useEffect)((function(){}),[t]),Object(F.jsx)(F.Fragment,{children:t.length>=5&&Object(F.jsxs)("div",{className:"".concat(b," flex-column justify-content-center align-items-center my-2"),children:[Object(F.jsx)("div",{children:e.date}),Object(F.jsx)("div",{children:e.temp}),Object(F.jsxs)("div",{className:"".concat(b," flex-row justify-content-center "),children:[Object(F.jsx)("img",{src:e.icon,className:"w-50 ",alt:e.desc}),Object(F.jsx)("div",{className:"text-center",children:e.main})]})]})})},B=function(){var e=Object(c.useContext)(C),t=e.previousForcast,n=e.isFirstLoad;return Object(F.jsx)(F.Fragment,{children:5===t.length?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(P,{}),Object(F.jsx)("div",{className:"".concat(b," flex-row flex-wrap justify-content-center align-items-center "),children:t.map((function(e){return Object(F.jsx)(T,Object(L.a)({},e),e.key)}))})]}):Object(F.jsx)("div",{className:"welcome",children:Object(F.jsx)("h2",{children:"".concat(n?"Welcome":"Loading.........")})})})},J=n(69),W=n(18),H=new J.a,z=function(e){return Object(F.jsx)(W.a,{client:H,children:e.children})},A=function(){return Object(F.jsx)(z,{children:Object(F.jsx)(S,{children:Object(F.jsxs)("div",{className:"".concat(b," flex-column justify-content-start align-items-center py-5 px-3 bg-purple vw-100 min-vh-100"),children:[Object(F.jsx)("h1",{className:"mb-4 fw-bold ",children:"Weather Forcast"}),Object(F.jsx)(M,{}),Object(F.jsx)(B,{})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(62),n(63);s.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(A,{})}),document.getElementById("root")),G()}},[[64,1,2]]]);
//# sourceMappingURL=main.26bbe601.chunk.js.map