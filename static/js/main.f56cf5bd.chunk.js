(this.webpackJsonpgabrielejandres=this.webpackJsonpgabrielejandres||[]).push([[0],{23:function(e,t,s){},26:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(13),n=s.n(a),i=(s(23),s(6)),r=s(7),l=s(9),j=s(8),o=s(14),d=s(16),h=s.n(d),b=(s(26),s(17)),m=s(5),O=s.n(m),u=s(1),x=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.behance,t=this.props.data.github,s=this.props.data.name,c=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{num:40,color:"#8836C9",config:{num:[20,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[1,.1],position:"center",cross:"dead",random:15,type:"cobweb",g:5,onParticleUpdate:function(e,t){e.beginPath(),e.rect(t.p.x,t.p.y,2*t.radius,2*t.radius),e.fillStyle=t.color,e.fill(),e.closePath()}},type:"cobweb",bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"Sobre"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Experi\xeancia"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#tech",children:"Tecnologias"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projetos"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:s})}),Object(u.jsx)(O.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{children:[c,"."]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(u.jsxs)("ul",{className:"social",children:[Object(u.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]}),Object(u.jsxs)("a",{href:e,className:"button btn behance-btn",children:[Object(u.jsx)("i",{className:"fa fa-dribbble"}),"Behance"]})]})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),p=x,f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsx)("ul",{className:"copyright",children:Object(u.jsx)("li",{children:"\xa9 Copyright 2021 Gabriele Jandres"})})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),v=f,N=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e="images/"+this.props.data.image,t=this.props.data.bio,s=this.props.data.email,c=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:e.url,children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{className:e.className,"aria-hidden":"true"})]})},e.name)}));return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(O.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:e,alt:"Gabriele Jandres"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"Sobre mim"}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contato"}),Object(u.jsx)("p",{className:"address",children:Object(u.jsx)("span",{children:s})})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("div",{className:"icons",children:Object(u.jsx)("ul",{children:c})})})]})]})]})})})}}]),s}(c.Component),g=N,w=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("ul",{className:"activities-list",children:e.description.map((function(e){return Object(u.jsx)("li",{children:e})}))})]},e.school)})),t=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[!e.ignoreCompany&&Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("ul",{className:"activities-list",children:e.description.map((function(e){return Object(u.jsx)("li",{children:e})}))})]},e.company)})),s=this.props.data.extra.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:e.credential,children:Object(u.jsx)("h3",{children:e.title})}),Object(u.jsxs)("p",{className:"info",children:[e.dispatcher,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.date})]})]},e.title)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Forma\xe7\xe3o"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Profissional"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:t})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Extras"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:s})})})]})})]})}}]),s}(c.Component),y=w,k=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.map((function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{className:"card-img",src:e.image,alt:e.name}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h4",{className:"card-title",children:e.name}),Object(u.jsx)("p",{className:"card-subtitle",children:e.description})]})]})}));return Object(u.jsx)("section",{id:"tech",children:Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Tecnologias"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"cards",children:e})})]})})})}}]),s}(c.Component),C=k,D=s(18),P=s.n(D),S=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(u.jsx)("div",{className:"columns portfolio-item",children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsxs)("div",{className:"item-wrap",children:[Object(u.jsx)(P.a,{alt:e.title,src:t}),Object(u.jsx)("div",{style:{textAlign:"center"},children:e.title})]})})},e.title)}));return Object(u.jsx)("section",{id:"portfolio",children:Object(u.jsx)(O.a,{left:!0,duration:1e3,distance:"40px",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"twelve columns collapsed",children:[Object(u.jsx)("h1",{children:"Alguns projetos"}),Object(u.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),T=S,F=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{data:this.state.resumeData.main}),Object(u.jsx)(g,{data:this.state.resumeData.main}),Object(u.jsx)(y,{data:this.state.resumeData.resume}),Object(u.jsx)(C,{data:this.state.resumeData.skills}),Object(u.jsx)(T,{data:this.state.resumeData.portfolio}),Object(u.jsx)(v,{})]})}}]),s}(c.Component),A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(u.jsx)(F,{}),document.getElementById("root")),A()}},[[38,1,2]]]);
//# sourceMappingURL=main.f56cf5bd.chunk.js.map