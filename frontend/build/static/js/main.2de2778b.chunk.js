(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){},35:function(e,a,t){e.exports=t(67)},40:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=t(1);t(40);var i=function(e){function a(e){var a=document.querySelectorAll(".main-menu__item"),t=document.querySelector(".App-header"),n=e.target;n.parentNode;t.classList.remove("at-start-page"),t.classList.add("site-entered");for(var r=0;r<a.length;r++)a[r].classList.remove("current-page");n.classList.add("current-page")}return(r.a.createElement("nav",{className:"Main-Menu-navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:"../aboutphoto.jpg",alt:"about photo"}),r.a.createElement(o.b,{to:"/about-tyler",className:"main-menu__item",onClick:a},"About Tyler")),r.a.createElement("li",null,r.a.createElement("img",{src:"../computer.jpg",alt:"computer photo"}),r.a.createElement(o.b,{to:"/work",className:"main-menu__item",onClick:a},"My Work")),r.a.createElement("li",null,r.a.createElement("img",{src:"../coffee.jpg",alt:"coffee photo"}),r.a.createElement(o.b,{to:"/contact",className:"main-menu__item",onClick:a},"Contact Me")))))};function m(e){var a=document.querySelectorAll(".main-header-content .main-menu__item"),t=document.querySelector(".App-header");t.classList.remove("site-entered");for(var n=e.target,r=(n.parentNode,0);r<a.length;r++){a[r].classList.remove("current-page");a[r].parentNode;t.classList.add("at-start-page")}n.classList.add("current-page")}function s(e){var a=document.querySelectorAll(".main-menu__item"),t=document.querySelector(".App-header"),n=e.target;n.parentNode;t.classList.remove("at-start-page"),t.classList.add("site-entered");for(var r=0;r<a.length;r++)a[r].classList.remove("current-page");n.classList.add("current-page")}var u=function(){return r.a.createElement("header",{className:"App-header at-start-page"},r.a.createElement("div",{className:"main-header-content"},r.a.createElement("div",{className:"site-logo"},"Tyler Akin"),r.a.createElement(o.b,{to:"/",className:"go-to-start-page",onClick:m},"Back Home",r.a.createElement("span",{className:"assistive"},"Go to the homepage")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",className:"main-menu__item",onClick:m},"Home",r.a.createElement("span",{className:"assistive"},"Click to expand menu."))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about-tyler",className:"main-menu__item",onClick:s},"About Tyler")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/work",className:"main-menu__item",onClick:s},"My Work")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/contact",className:"main-menu__item",onClick:s},"Contact Me"))))),r.a.createElement(i,null))},d=t(8),E=t(2);var p=function(e){return r.a.createElement("h1",{className:"Page-Title"},e.name)};var v=function(e){return r.a.createElement("div",{className:"page-content about contain"},r.a.createElement(E.a.div,{className:"actions",initial:{opacity:0,transform:"translate(0%,-100%)"},animate:{opacity:1,transform:"translate(0%,0%)"},transition:{opacity:{duration:1.5},transform:{duration:.35}}},r.a.createElement(p,{name:"A developer at heart"}),r.a.createElement("div",null,"Writing something that works captures my desire for creation. Crafting functionality that presents content for users taps my desire to create and evoke an effect. I have worked both within Agencies and as a Freelance developer."),r.a.createElement("h2",null,"About This Site"),r.a.createElement("div",null,"tylerakin.com is the development porfolio site for Tyler Akin, a developer focused largely on Front-End Development\u2014in the Louisville, Kentucky region. This site is designed as a single-page application using the ReactJs framework.")))};var f=function(e){return r.a.createElement("div",{className:"page-content contact contain"},r.a.createElement(E.a.div,{className:"actions",initial:{opacity:0,transform:"translate(0%,-100%)"},animate:{opacity:1,transform:"translate(0%,0%)"},transition:{opacity:{duration:1.5},transform:{duration:.35}}},r.a.createElement(p,{name:"Contact"}),r.a.createElement("div",null,"Contact me for more information about my work and how it can intersect your needs. I love learning about new project ideas. ")))};t(16);var h=function(e){function a(e){var a=e.target,t=document.querySelector(".technology-navigation");a&&t.classList.add("slideMenuIn"),t.classList.remove("slideMenuIn")}return r.a.createElement("nav",{className:"technology-navigation"},r.a.createElement(E.a.div,{className:"actions",initial:{opacity:0,transform:"translate(0%,-100%)"},animate:{opacity:1,transform:"translate(0%,0%)"},transition:{opacity:{duration:1.5},transform:{duration:.35}}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/work/technology",className:"main-menu__item",onClick:a},"By Technology")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/work/portfolio",className:"main-menu__item",onClick:a},"Portfolio")))))};var g=function(e){return r.a.createElement("div",{className:"page-content"},r.a.createElement(h,null))};t(17);var y=function(e){var a={hidden:{opacity:0,transform:"translate(0%,-100%)"},show:{opacity:1,transform:"translate(0%,0%)"}};return r.a.createElement("div",{className:"portfolio-content-wrapper"},r.a.createElement("nav",{className:"portfolio-menu"},r.a.createElement(E.a.ul,{className:"actions",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.75,velocity:2}}},initial:"hidden",animate:"show"},r.a.createElement(E.a.li,{variants:a},r.a.createElement("div",{className:"portfolio-image"},r.a.createElement("span",{className:"work-type"},"Freelance"),r.a.createElement("img",{src:"../audubon-sanctuary.png",alt:"audubon baptist church sanctuary"})),r.a.createElement(o.b,{to:"/work/portfolio/audubon-baptist",className:"main-menu__item"},"Audubon Baptist Church")),r.a.createElement(E.a.li,{variants:a},r.a.createElement("div",{className:"portfolio-image"},r.a.createElement("span",{className:"work-type"},"Agency"),r.a.createElement("img",{src:"../ker-horse.png",alt:"ker horse photo"})),r.a.createElement(o.b,{to:"/work/portfolio/ker",className:"main-menu__item"},"Kentucky Equine Research")),r.a.createElement(E.a.li,{variants:a},r.a.createElement("div",{className:"portfolio-image"},r.a.createElement("span",{className:"work-type"},"Freelance"),r.a.createElement("img",{src:"../wheat-field.png",alt:"wheat field photo"})),r.a.createElement(o.b,{to:"/work/portfolio/legacy-food-and-feeds",className:"main-menu__item"},"Legacy Food and Feeds")),r.a.createElement(E.a.li,{variants:a},r.a.createElement("div",{className:"portfolio-image"},r.a.createElement("span",{className:"work-type"},"Agency"),r.a.createElement("img",{src:"../kao-ink.png",alt:"kao ink photo"})),r.a.createElement(o.b,{to:"/work/portfolio/kao-collins",className:"main-menu__item"},"Kao Collins Inc")),r.a.createElement(E.a.li,{variants:a},r.a.createElement("div",{className:"portfolio-image"},r.a.createElement("span",{className:"work-type"},"Agency"),r.a.createElement("img",{src:"../zeon-chemicals-road.png",alt:"zeon chemicals road photo"})),r.a.createElement(o.b,{to:"/work/portfolio/zeon-chemicals",className:"main-menu__item"},"Zeon Chemicals")),r.a.createElement(E.a.li,{variants:a},r.a.createElement("div",{className:"portfolio-image"},r.a.createElement("span",{className:"work-type"},"Freelance"),r.a.createElement("img",{src:"../oils.jpg",alt:"oils photo"})),r.a.createElement(o.b,{to:"/work/portfolio/health-connection",className:"main-menu__item"},"A Health Connection")))))};var N=function(e){return r.a.createElement("div",{className:"page-content portfolio"},r.a.createElement(E.a.div,{className:"actions",initial:{opacity:0,transform:"translate(0%,-100%)"},animate:{opacity:1,transform:"translate(0%,0%)"},transition:{opacity:{duration:1.5},transform:{duration:.35}}},r.a.createElement("div",{className:"contain"},r.a.createElement(p,{name:"Work. Done."}),"Learn more about projects I have worked on during my career."),r.a.createElement(y,null)))};var k=function(e){return r.a.createElement("div",{className:"page-content technology"},r.a.createElement(E.a.div,{className:"actions",initial:{opacity:0,transform:"translate(0%,-100%)"},animate:{opacity:1,transform:"translate(0%,0%)"},transition:{opacity:{duration:1.5},transform:{duration:.35}}},r.a.createElement("div",{className:"contain"},r.a.createElement("div",{className:"technology-sector"},r.a.createElement("h2",null,"Languages and Frameworks"),r.a.createElement("div",{className:"technology-sector--inner"},r.a.createElement("div",null,"HTML5"),r.a.createElement("div",null,"CSS3"),r.a.createElement("div",null,"SCSS"),r.a.createElement("div",null,"PHP7"),r.a.createElement("div",null,"JavaScript"),r.a.createElement("div",null,"JQuery"),r.a.createElement("div",null,"ReactJS"),r.a.createElement("div",null,"VueJs"))),r.a.createElement("div",{className:"technology-sector"},r.a.createElement("h2",null,"Platforms and CMS"),r.a.createElement("div",{className:"technology-sector--inner"},r.a.createElement("div",null,"WordPress"),r.a.createElement("div",null,"Shopify"),r.a.createElement("div",null,"PrestaShop"))),r.a.createElement("div",{className:"technology-sector"},r.a.createElement("h2",null,"Design and Visual"),r.a.createElement("div",{className:"technology-sector--inner"},r.a.createElement("div",null,"Illustrator"),r.a.createElement("div",null,"Photoshop"),r.a.createElement("div",null,"Affinity Designer"),r.a.createElement("div",null,"Affinity Photo"),r.a.createElement("div",null,"Premier Pro"),r.a.createElement("div",null,"After Effects"))),r.a.createElement("div",{className:"technology-sector"},r.a.createElement("h2",null,"Accessibility"),r.a.createElement("div",{className:"technology-sector--inner"},r.a.createElement("div",null,"WCAG 2.0"),r.a.createElement("div",null,"WCAG 2.1"),r.a.createElement("div",null,"ADA"),r.a.createElement("div",null,"Section 508"))))))};t(46),t(47),t(48);var b=function(){var e=Object(d.f)();return r.a.createElement(d.c,{location:e},r.a.createElement(d.a,{exact:!0,path:"/about-tyler",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(d.a,{exact:!0,path:"/contact",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(d.a,{exact:!0,path:"/work",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(d.a,{exact:!0,path:"/work/portfolio",render:function(){return r.a.createElement(N,null)}}),r.a.createElement(d.a,{exact:!0,path:"/work/technology",render:function(){return r.a.createElement(k,null)}}))};t(49);var w=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-inner"},"Portfolio site for Tyler Akin. Based in Louisville, Kentucky. Built using ReactJS."))};var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(b,null),r.a.createElement(w,null))},A=t(29),C=t(30),L=t(33),S=t(31),j=t(34),P=t(32),M=t.n(P);var O=function(e){return r.a.createElement("p",null,e.dataObject)},T=function(e){function a(e){var t;return Object(A.a)(this,a),(t=Object(L.a)(this,Object(S.a)(a).call(this))).state={dataObj:"",imageURL:""},t}return Object(j.a)(a,e),Object(C.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;return M.a.get("http://localhost:8000/polls/api/index/").then((function(a){e.setState({imageURL:JSON.stringify(a)+"testsettting"})})).catch((function(e){return console.log("nothing found")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App2"},r.a.createElement(O,{dataObject:this.state.imageURL}))}}]),a}(n.Component);c.a.render(r.a.createElement(o.a,null,r.a.createElement(_,null),r.a.createElement(T,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2de2778b.chunk.js.map