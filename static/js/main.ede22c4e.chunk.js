(this.webpackJsonpgabrielejandres=this.webpackJsonpgabrielejandres||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(8),s=a.n(n),c=a(57),o=a(13),r=a.n(o),l=a(69),d=a(148),m=a(38),h=a(62),j=a.n(h),u=a(141),g=a(147),p=a(144),b=a(146),v=a(145),x=(a(90),a(2)),O={pt:{label:"Portugu\xeas",dir:"ltr",active:!0},en:{label:"English",dir:"ltr",active:!1}},f=function(){var e,t=localStorage.getItem("i18nextLng")||"pt",a=Object(d.a)().t,n=Object(i.useState)(null),s=Object(l.a)(n,2),c=s[0],o=s[1];return Object(i.useEffect)((function(){document.body.dir=O[t].dir}),[c,t]),Object(x.jsxs)("div",{className:"language-select",children:[Object(x.jsxs)(u.a,{onClick:function(e){var t=e.currentTarget;return o(t)},style:{color:"#fff",fontFamily:"Poppins",fontSize:"1em"},children:[O[t].label,Object(x.jsx)(j.a,{fontSize:"small",style:{color:"#A15A9E",fontSize:"1.7em"}})]}),Object(x.jsx)("hr",{}),Object(x.jsx)(g.a,{open:!!c,anchorEl:c,onClose:function(){return o(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(x.jsx)("div",{children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(v.a,{children:a("select_language")}),null===(e=Object.keys(O))||void 0===e?void 0:e.map((function(e){return Object(x.jsx)(b.a,{button:!0,onClick:function(){m.a.changeLanguage(e),o(null)},children:O[e].label},e)}))]})})})]})},y=a.p+"static/media/hand.fe0b1cc7.svg";a(103);function w(e){var t=Object(d.a)().t,a=e.data.behance,i=e.data.github,n=e.data.name,s=t("header.description");return Object(x.jsxs)("header",{id:"home",children:[Object(x.jsx)(c.a,{num:40,color:"#480048",config:{num:[20,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[1,.1],position:"center",cross:"dead",random:15,type:"cobweb",g:5,onParticleUpdate:function(e,t){e.beginPath(),e.rect(t.p.x,t.p.y,2*t.radius,2*t.radius),e.fillStyle=t.color,e.fill(),e.closePath()}},type:"cobweb",bg:!0}),Object(x.jsxs)("nav",{id:"nav-wrap",children:[Object(x.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(x.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(x.jsxs)("ul",{id:"nav",className:"nav",children:[Object(x.jsx)("li",{className:"current",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#home",children:t("header.home")})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:t("header.about")})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#resume",children:t("header.experience")})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#tech",children:t("header.technologies")})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:t("header.projects")})}),Object(x.jsx)("li",{children:Object(x.jsx)(f,{})})]})]}),Object(x.jsx)("div",{className:"banner",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsx)(r.a,{bottom:!0,children:Object(x.jsx)("h1",{className:"responsive-headline",children:n})}),Object(x.jsx)(r.a,{bottom:!0,duration:1200,children:Object(x.jsxs)("h3",{children:[s,"."]})}),Object(x.jsx)("hr",{}),Object(x.jsx)(r.a,{bottom:!0,duration:2e3,children:Object(x.jsxs)("ul",{className:"social",children:[Object(x.jsxs)("a",{href:i,className:"button btn github-btn",children:[Object(x.jsx)("i",{className:"fa fa-github"}),"Github"]}),Object(x.jsxs)("a",{href:a,className:"button btn behance-btn",children:[Object(x.jsx)("i",{className:"fa fa-dribbble"}),"Behance"]})]})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:y,alt:"Coding"})})]})}),Object(x.jsx)("p",{className:"scrolldown",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(x.jsx)("i",{className:"icon-down-circle"})})})]})}a(104);function N(){return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(r.a,{bottom:!0,children:Object(x.jsx)("ul",{className:"copyright",children:Object(x.jsx)("li",{children:"\xa9 Copyright 2021 Gabriele Jandres"})})}),Object(x.jsx)("div",{id:"go-top",children:Object(x.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(x.jsx)("i",{className:"icon-up-open"})})})]})})}a(105);function C(e){var t=Object(d.a)().t,a="images/"+e.data.image,i=e.data.email,n=t("about.bio"),s=e.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsxs)("a",{href:e.url,children:[Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{className:e.className,"aria-hidden":"true"})]})},e.name)}));return Object(x.jsx)("section",{id:"about",children:Object(x.jsx)(r.a,{duration:1e3,children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"three columns",children:Object(x.jsx)("img",{className:"profile-pic",src:a,alt:"Gabriele Jandres"})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsx)("h2",{children:t("about.title")}),Object(x.jsx)("p",{children:n}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"columns contact-details",children:[Object(x.jsx)("h2",{children:t("about.contact")}),Object(x.jsx)("p",{className:"address",children:Object(x.jsx)("span",{children:i})})]}),Object(x.jsx)("div",{className:"columns download",children:Object(x.jsx)("div",{className:"icons",children:Object(x.jsx)("ul",{children:s})})})]})]})]})})})}a(106);function k(){var e=Object(d.a)().t,t=e("resume.education.data",{returnObjects:!0}),a=e("resume.work.data",{returnObjects:!0}),i=e("resume.extra.data",{returnObjects:!0}),n=t.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.school}),Object(x.jsxs)("p",{className:"info",children:[e.degree," ",Object(x.jsx)("span",{children:"\u2022"}),Object(x.jsx)("em",{className:"date",children:e.graduated})]}),Object(x.jsx)("ul",{className:"activities-list",children:e.description.map((function(e){return Object(x.jsx)("li",{children:e})}))})]},e.school)})),s=a.map((function(e){return Object(x.jsxs)("div",{children:[!e.ignoreCompany&&Object(x.jsx)("h3",{children:e.company}),Object(x.jsxs)("p",{className:"info",children:[e.title,Object(x.jsx)("span",{children:"\u2022"})," ",Object(x.jsx)("em",{className:"date",children:e.years})]}),Object(x.jsx)("ul",{className:"activities-list",children:e.description.map((function(e){return Object(x.jsx)("li",{children:e})}))})]},e.title)})),c=i.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("a",{href:e.credential,children:Object(x.jsx)("h3",{children:e.title})}),Object(x.jsxs)("p",{className:"info",children:[e.dispatcher,Object(x.jsx)("span",{children:"\u2022"})," ",Object(x.jsx)("em",{className:"date",children:e.date})]})]},e.title)}));return Object(x.jsxs)("section",{id:"resume",children:[Object(x.jsx)(r.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row education",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:e("resume.education.title")})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"row item",children:Object(x.jsx)("div",{className:"twelve columns",children:n})})})]})}),Object(x.jsx)(r.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row work",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:e("resume.work.title")})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:s})]})}),Object(x.jsx)(r.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row education",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:e("resume.extra.title")})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"row item",children:Object(x.jsx)("div",{className:"twelve columns",children:c})})})]})})]})}a(107);function S(e){var t=Object(d.a)().t,a=e.data.map((function(e){return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("img",{className:"card-img",src:e.image,alt:e.name}),Object(x.jsx)("div",{className:"card-body",children:Object(x.jsx)("h4",{className:"card-title",children:e.name})})]})}));return Object(x.jsx)("section",{id:"tech",children:Object(x.jsx)(r.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row skill",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:t("technologies.title")})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"cards",children:a})})]})})})}var U=a(63),F=a.n(U);a(116);function E(e){var t=Object(d.a)().t,a=e.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(x.jsx)("div",{className:"columns portfolio-item",children:Object(x.jsx)("a",{href:e.url,children:Object(x.jsxs)("div",{className:"item-wrap",children:[Object(x.jsx)("p",{className:"category",children:e.category}),Object(x.jsx)(F.a,{alt:e.title,src:t}),Object(x.jsx)("div",{style:{textAlign:"center"},children:e.title})]})})},e.title)}));return Object(x.jsx)("section",{id:"portfolio",children:Object(x.jsx)(r.a,{left:!0,duration:1e3,distance:"40px",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"twelve columns collapsed",children:[Object(x.jsx)("h1",{children:t("portfolio.title")}),Object(x.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:a})]})})})})}var J=a(40);a(117);function T(){return Object(x.jsx)(i.Suspense,{fallback:"Loading...",children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(w,{data:J.main}),Object(x.jsx)(C,{data:J.main}),Object(x.jsx)(k,{}),Object(x.jsx)(S,{data:J.skills}),Object(x.jsx)(E,{data:J.portfolio}),Object(x.jsx)(N,{})]})})}var I=a(39),A=a(64),H=a(66),P=a(67),M={pt:{translation:a(68)},en:{translation:P}};m.a.use(A.a).use(H.a).use(I.e).init({resources:M,lng:"pt",detection:{checkWhitelist:!0},debug:!1,whitelist:["pt","en"],interpolation:{escapeValue:!1}});m.a;s.a.render(Object(x.jsx)(T,{}),document.getElementById("root"))},40:function(e){e.exports=JSON.parse('{"main":{"name":"Gabriele Jandres","image":"profile.png","email":"gabrielejc@dcc.ufrj.br","github":"https://github.com/gabrielejandres","behance":"https://www.behance.net/gabrielejandres","social":[{"name":"email","url":"mailto:gabrielejc@dcc.ufrj.br","className":"fa fa-envelope"},{"name":"linkedin","url":"https://www.linkedin.com/in/gabriele-jandres-249107175/","className":"fa fa-linkedin"},{"name":"instagram","url":"https://www.instagram.com/gabs.experience/","className":"fa fa-instagram"}]},"skills":[{"name":"Figma","image":"images/skills/figma.png"},{"name":"CSS","image":"images/skills/css.png"},{"name":"HTML","image":"images/skills/html.jpg"},{"name":"Javascript","image":"images/skills/js.png"},{"name":"React JS","image":"images/skills/react.png"},{"name":"React Native","image":"images/skills/react.png"},{"name":"Angular","image":"images/skills/angular.png"},{"name":"VueJs","image":"images/skills/vue.png"},{"name":"Ionic","image":"images/skills/ionic.png"},{"name":"Laravel","image":"images/skills/laravel.png"},{"name":"Java","image":"images/skills/java.png"},{"name":"Python","image":"images/skills/python.png"}],"portfolio":{"projects":[{"title":"nutri.me","category":"UI/UX","image":"ui/nutri.png","url":"https://www.behance.net/gallery/140113727/nutrime"},{"title":"Daily UI","category":"UI/UX","image":"ui/dailyui.jpg","url":"https://www.behance.net/gallery/115168171/Daily-UI-001"},{"title":"Healthood","category":"UI/UX","image":"ui/healthood.png","url":"https://www.behance.net/gallery/115091415/Healthood"},{"title":"RevisA\xed","category":"UI/UX","image":"ui/revisai.jpg","url":"https://www.behance.net/gallery/115093881/RevisAi"},{"title":"Hommy","category":"UI/UX","image":"ui/hommy.png","url":"https://www.behance.net/gallery/115090037/Hommy"},{"title":"FriendFlix","category":"UI/UX","image":"ui/friendflix.png","url":"https://www.behance.net/gallery/115089149/FriendFlix"},{"title":"MicroMarket","category":"UI/UX","image":"ui/micromarket.png","url":"https://www.figma.com/file/D7wto7wa98PGxXbZTvqMsp/MicroMarket"},{"title":"Queezy","category":"Web","image":"web/queezy.png","url":"https://www.behance.net/gallery/140116709/Queezy"},{"title":"Hommy (App)","category":"App","image":"apps/hommy.png","url":"https://github.com/gabrielejandres/hommy"},{"title":"My Favorites Heroes","category":"App","image":"apps/my-favorites-heroes.png","url":"https://github.com/gabrielejandres/my-favorites-heroes-app"}]}}')},67:function(e){e.exports=JSON.parse('{"select_language":"Select Language","header":{"home":"Home","about":"About","experience":"Experience","technologies":"Technologies","projects":"Projects","description":"Computer Science Student at UFRJ and Frontend Developer"},"about":{"title":"About me","bio":"During my high school, I took an IT course at CEFET and that was the beginning of my passion for technology. Currently, I\'m a Computer Science student at UFRJ, and although I\'m discovering more aspects of computing, the world of web development, especially front-end, has my heart. In college, I had the incredible opportunity to be part of a junior company (EJCM) and there I got to know the area of \u200b\u200bUX/UI Design, areas in which I am very interested and try to learn more every day. I love developing truly user-focused solutions!","contact":"Contact"},"resume":{"education":{"title":"Education","data":[{"school":"Federal University of Rio de Janeiro","degree":"Bachelor\'s Degree in Computer Science","graduated":"2019.2 - 2023.2 (doing)","description":["Participation in the Junior Enterprise","Participation in Hacking Help 2020 as UX Designer","College monitor of Integers and Encryption in 2020/PLE and 2020.1","College monitor of Computers and Society in 2021.1","College monitor of Information Organization in 2021.2"]},{"school":"Federal Center for Technological Education Celso Suckow da Fonseca","degree":"High school integrated with IT technician","graduated":"2016 - 2018","description":["Participation in the national week of Science and Technology. Theme: Science Feeding Brazil","Internal internship","Participation in Hacking Serra in 2018"]}]},"work":{"title":"Professional","data":[{"company":"Bemobi","title":"Sofwate developer intern","years":"August 2021 - Now","description":["Frontend development using React JS, HTML, CSS and Javascript","Backend development using Go"]},{"company":"EJCM Consultoria","title":"Tech Lead","years":"August 2020 - November 2021","description":["Code review and quality assurance of sprint deliverables","Agile team management","Project architecture management","Participation in the initiative to create the Git usage pattern","Leadership of an initiative to change the company\'s stack","Leadership of the usability tests initiative","Leadership of the initiative focused on UX Design. Responsible for structuring the company\'s digital design service"]},{"company":"EJCM Consultoria","ignoreCompany":true,"title":"Product Designer | Frontend developer","years":"March 2020 - August 2020","description":["Prototyping in Figma","Project development in Angular, Ionic and Laravel","Participation in the initiative for 2020.2 technical training organization"]},{"company":"CEFET","title":"Web developer intern","years":"February 2018 - September 2018","description":["Frontend and backend development of the \'Namelab - New Educational Environments\' project using HTML, CSS, Javascript and PHP."]}]},"extra":{"title":"Extras","data":[{"title":"UX Design instructor","dispatcher":"EJCM Consultoria","date":"October 2021","credential":"https://drive.google.com/file/d/1kuH_vmJvUUCdsK82TFiDAq4oi8fA1KU0/view?usp=sharing"},{"title":"Bootcamp UX Design","dispatcher":"How Bootcamps","date":"August 2020","credential":"https://drive.google.com/file/d/1nWzmcbc49coiKBSmqx8zxAg6Dh6YOoqG/view?usp=sharing"},{"title":"Front-end Web Development with React","dispatcher":"The Hong Kong University of Science and Technology","date":"July 2020","credential":"https://drive.google.com/file/d/13MM2HhCFgGGYRj_9JCvHKvlhS_BZTgdL/view?usp=sharing"},{"title":"Visual Elements of User Interface Design","dispatcher":"California Institute of the Arts","date":"July 2020","credential":"https://drive.google.com/file/d/1CCpipAdFJvhsrw7XdEkd6_eEBnFjhCW_/view?usp=sharing"},{"title":"Front-end Web Frameworks and Tools: Bootstrap 4","dispatcher":"The Hong Kong University of Science and Technology","date":"May 2020","credential":"https://drive.google.com/file/d/1VFgMcB7rMw-dim9Yci5IbsgIUdhz4d4k/view?usp=sharing"}]}},"technologies":{"title":"Technologies"},"portfolio":{"title":"Some projects"}}')},68:function(e){e.exports=JSON.parse('{"select_language":"Selecione o idioma","header":{"home":"Home","about":"Sobre","experience":"Experi\xeancia","technologies":"Tecnologias","projects":"Projetos","description":"Graduanda em Ci\xeancia da Computa\xe7\xe3o na UFRJ e desenvolvedora front-end"},"about":{"title":"Sobre mim","bio":"Durante meu ensino m\xe9dio, fiz um curso de TI no CEFET e esse foi o in\xedcio da minha paix\xe3o pela tecnologia. Atualmente, sou estudante de Ci\xeancia da Computa\xe7\xe3o na UFRJ, e apesar de estar descobrindo mais vertentes da computa\xe7\xe3o, o mundo do desenvolvimento web, principalmente front-end, tem meu cora\xe7\xe3o. Na faculdade, tive a oportunidade incr\xedvel de fazer parte de uma empresa j\xfanior (EJCM) e l\xe1 conheci a \xe1rea de UX/UI Design, \xe1reas nas quais tenho muito interesse e procuro aprender mais todos os dias. Me encanta desenvolver solu\xe7\xf5es realmente focadas no usu\xe1rio!","contact":"Contato"},"resume":{"education":{"title":"Forma\xe7\xe3o","data":[{"school":"Universidade Federal do Rio de Janeiro","degree":"Bacharelado em Ci\xeancia da Computa\xe7\xe3o","graduated":"2019.2 - 2023.2 (cursando)","description":["Participa\xe7\xe3o na Empresa J\xfanior do curso","Participa\xe7\xe3o do Hacking Help 2020 como UX Designer","Monitoria de N\xfameros Inteiros e Criptografia em 2020/PLE e 2020.1","Monitoria de Computadores e Sociedade em 2021.1","Monitoria de Organiza\xe7\xe3o da Informa\xe7\xe3o em 2021.2"]},{"school":"Centro Federal de Educa\xe7\xe3o Tecnol\xf3gica Celso Suckow da Fonseca","degree":"Ensino m\xe9dio integrado ao t\xe9cnico em inform\xe1tica","graduated":"2016 - 2018","description":["Participa\xe7\xe3o na semana nacional de Ci\xeancia e Tecnologia. Tema: Ci\xeancia Alimentando o Brasil","Est\xe1gio interno","Participa\xe7\xe3o no Hacking Serra (Cluster Turismo) em 2018"]}]},"work":{"title":"Profissional","data":[{"company":"Bemobi","title":"Estagi\xe1ria de desenvolvimento","years":"Agosto 2021 - Presente","description":["Desenvolvimento front-end usando React JS, HTML, CSS e Javascript","Desenvolvimento back-end usando Go"]},{"company":"EJCM Consultoria","title":"Tech Lead","years":"Agosto 2020 - Novembro 2021","description":["Revis\xe3o de c\xf3digos e garantia da qualidade de entregas das sprints","Gerenciamento \xe1gil de equipe","Gerenciamento da arquitetura dos projetos","Participa\xe7\xe3o na iniciativa para cria\xe7\xe3o do padr\xe3o de uso do Git","Lideran\xe7a de iniciativa para mudan\xe7a de stack da empresa","Lideran\xe7a da iniciativa sobre testes de usabilidade","Lideran\xe7a da iniciativa focada em UX Design e na estrutura\xe7\xe3o do servi\xe7o de concep\xe7\xe3o digital da empresa"]},{"company":"EJCM Consultoria","ignoreCompany":true,"title":"Product Designer | Desenvolvedora front-end","years":"Mar\xe7o 2020 - Agosto 2020","description":["Prototipagem de telas no Figma","Desenvolvimento de sistemas usando Ionic, Angular e Laravel","Participa\xe7\xe3o na organiza\xe7\xe3o do treinamento t\xe9cnico do processo seletivo"]},{"company":"CEFET","title":"Estagi\xe1ria de desenvolvimento web","years":"Fevereiro 2018 - Setembro 2018","description":["Desenvolvimento front-end (HTML, CSS e JavaScript) e back-end(PHP) do projeto \'Namelab - Novos Ambientes Educacionais\'"]}]},"extra":{"title":"Extras","data":[{"title":"Instrutora de UX Design","dispatcher":"EJCM Consultoria","date":"Outubro 2021","credential":"https://drive.google.com/file/d/1kuH_vmJvUUCdsK82TFiDAq4oi8fA1KU0/view?usp=sharing"},{"title":"Bootcamp UX Design","dispatcher":"How Bootcamps","date":"Agosto 2020","credential":"https://drive.google.com/file/d/1nWzmcbc49coiKBSmqx8zxAg6Dh6YOoqG/view?usp=sharing"},{"title":"Front-end Web Development with React","dispatcher":"The Hong Kong University of Science and Technology","date":"Julho 2020","credential":"https://drive.google.com/file/d/13MM2HhCFgGGYRj_9JCvHKvlhS_BZTgdL/view?usp=sharing"},{"title":"Visual Elements of User Interface Design","dispatcher":"California Institute of the Arts","date":"Julho 2020","credential":"https://drive.google.com/file/d/1CCpipAdFJvhsrw7XdEkd6_eEBnFjhCW_/view?usp=sharing"},{"title":"Front-end Web Frameworks and Tools: Bootstrap 4","dispatcher":"The Hong Kong University of Science and Technology","date":"Maio 2020","credential":"https://drive.google.com/file/d/1VFgMcB7rMw-dim9Yci5IbsgIUdhz4d4k/view?usp=sharing"}]}},"technologies":{"title":"Tecnologias"},"portfolio":{"title":"Alguns projetos"}}')},90:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.ede22c4e.chunk.js.map