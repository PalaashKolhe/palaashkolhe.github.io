(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{15:function(e,t,s){},18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(9),n=s.n(c),i=(s(15),s(2)),r=s(3),o=s(5),l=s(4),d=s(8),j=s(10),h=s.n(j),p=(s(18),s(0)),u=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=this.props.data.description,a=(this.props.data.address.city,this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,target:"_blank",children:Object(p.jsx)("i",{className:e.className})})},e.name)})));return Object(p.jsxs)("header",{id:"home",children:[Object(p.jsx)("div",{className:"row banner",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsxs)("h1",{className:"responsive-headline",children:["Hi! My name is ",e,"."]}),Object(p.jsxs)("h3",{children:["I'm a ",Object(p.jsx)("span",{children:t})," ",s,"."]}),Object(p.jsx)("hr",{}),Object(p.jsx)("ul",{className:"social",children:a})]})}),Object(p.jsx)("p",{className:"scrolldown",children:Object(p.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:Object(p.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component),b=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:e.url,target:"_blank",children:Object(p.jsx)("i",{className:e.className})})},e.name)}));return Object(p.jsx)("footer",{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"twelve columns",children:[Object(p.jsx)("ul",{className:"social-links",children:e}),Object(p.jsx)("ul",{className:"copyright",children:Object(p.jsx)("li",{children:"\xa9 Copyright 2021 Palaash Kolhe"})})]}),Object(p.jsx)("div",{id:"go-top",children:Object(p.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(p.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.school}),Object(p.jsxs)("p",{className:"info",children:[e.degree," ",Object(p.jsx)("span",{children:"\u2022"}),Object(p.jsx)("em",{className:"date",children:e.graduated})]}),Object(p.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:e.company}),Object(p.jsxs)("p",{className:"info",children:[e.title,Object(p.jsx)("span",{children:"\u2022"})," ",Object(p.jsx)("em",{className:"date",children:e.years})]}),Object(p.jsx)("p",{children:e.description})]},e.company)}));this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{style:{width:e.level},className:t}),Object(p.jsx)("em",{children:e.name})]},e.name)}))}return Object(p.jsxs)("section",{id:"resume",children:[Object(p.jsxs)("div",{className:"row education",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Education"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:Object(p.jsx)("div",{className:"row item",children:Object(p.jsx)("div",{className:"twelve columns",children:e})})})]}),Object(p.jsxs)("div",{className:"row work",children:[Object(p.jsx)("div",{className:"three columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Experiences"})})}),Object(p.jsx)("div",{className:"nine columns main-col",children:t})]})]})}}]),s}(a.Component),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)this.props.data.name,this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.contactmessage;return Object(p.jsx)("section",{id:"contact",children:Object(p.jsxs)("div",{className:"row section-head",children:[Object(p.jsx)("div",{className:"two columns header-col",children:Object(p.jsx)("h1",{children:Object(p.jsx)("span",{children:"Get In Touch."})})}),Object(p.jsx)("div",{className:"ten columns",children:Object(p.jsxs)("p",{className:"lead",children:["Feel free to contact me at ",Object(p.jsx)("a",{href:"mailto:pkolhe@uwaterloo.ca",children:"pkolhe@uwaterloo.ca"})," if you have any questions!"]})})]})})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(p.jsx)("div",{className:"columns portfolio-item",children:Object(p.jsx)("div",{className:"item-wrap",children:Object(p.jsxs)("a",{href:e.url,target:"_blank",title:e.title,children:[Object(p.jsx)("img",{alt:e.title,src:t}),Object(p.jsx)("div",{className:"overlay",children:Object(p.jsxs)("div",{className:"portfolio-item-meta",children:[Object(p.jsx)("h5",{children:e.title}),Object(p.jsx)("p",{children:e.category}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Technologies used: "}),e.technologies]})]})}),Object(p.jsx)("div",{className:"link-icon",children:Object(p.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(p.jsx)("section",{id:"portfolio",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"twelve columns collapsed",children:[Object(p.jsx)("h1",{children:"Check out some of my projects."}),Object(p.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),f=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),a}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u,{data:this.state.resumeData.main}),Object(p.jsx)(x,{data:this.state.resumeData.portfolio}),Object(p.jsx)(m,{data:this.state.resumeData.resume}),Object(p.jsx)(O,{data:this.state.resumeData.main}),Object(p.jsx)(b,{data:this.state.resumeData.main})]})}}]),s}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(p.jsx)(f,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");v?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.aec965d3.chunk.js.map