(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/greenbeancard.1ea098ee.PNG"},20:function(e,t,n){e.exports=n.p+"static/media/portfoliocard.4886f69a.PNG"},21:function(e,t,n){e.exports=n.p+"static/media/pokeguicard.e039ffff.PNG"},22:function(e,t,n){e.exports=n.p+"static/media/aspCMScard.3d750296.PNG"},27:function(e,t,n){},28:function(e,t,n){},36:function(e,t,n){},46:function(e,t,n){e.exports=n.p+"static/media/mikeIcon.2e81db28.jpg"},51:function(e,t,n){e.exports=n(69)},57:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);n(52);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),l=(n(57),n(36),n(3)),i=(n(58),n(74)),m=n(73),s=n(30),u=Object(l.o)((function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"sticky"},a.createElement(i.a,{variant:"dark",expand:"lg",className:"navbar"},a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},a.createElement(m.a,{className:"mr-auto"},a.createElement(s.LinkContainer,{to:"/"},a.createElement(i.a.Brand,{className:"brand"},"Michael Vance")),a.createElement(s.LinkContainer,{to:"/projects"},a.createElement(m.a.Link,{bg:"dark",onClick:function(){return t="/projects",void e.history.push(t);var t}},"Projects")))))))})),p=(n(67),n(46)),d=n.n(p),E=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"about-content"},a.createElement("p",{className:"description-title"},"Hi, I'm ",a.createElement("span",null,"Mike Vance")," "),a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),a.createElement("p",null,"I develop code because I want to help people connect and improve their lives through technology."),a.createElement("p",null,"I love creating solutions to problems that help bring people together and make their lives easier."),a.createElement("p",null,"To accomplish this goal, I have learned to use many different tools such as C#, C++, Javascript, React, and much more.")))},h=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{id:"about",className:"About-Me"},a.createElement("div",{className:"About-Me2"},a.createElement("div",{className:"About-Title flex"},a.createElement("div",null,"WHY I WRITE CODE"),a.createElement("div",{className:"title-bar"})),a.createElement("div",{className:"About-Description flex"},a.createElement(E,null)))))},v=(n(27),n(24)),f=n(48),g=function(e){return a.createElement(a.Fragment,null,a.createElement("p",{className:"title"},a.createElement("p",null,"I Believe ",a.createElement("span",null,"Code")," "),a.createElement("p",null,"should bring ",a.createElement("span",null,"People")," together")),a.createElement("p",{className:"title2"}),a.createElement("div",{className:"buttonBackground"},a.createElement("div",{href:"about",className:"button",type:"button",onClick:function(){e.setButtonClicked(!0)}},"This is why I develop it",a.createElement("span",{className:"arrowIcon"},a.createElement(f.a,{className:"icon"})))))},b=function(e){var t=a.useState(!1),n=Object(v.a)(t,2),o=n[0],r=n[1];return a.useEffect((function(){return function(){}}),[o]),a.createElement(a.Fragment,null,a.createElement("div",{id:"about",className:"About-Me"},a.createElement("div",{className:"About-Me2"},a.createElement("div",{id:"part-01",className:"part-01",onMouseMove:function(e){return function(e){var t=e.pageX,n=e.pageY;e.currentTarget.style.backgroundPosition=t/10+"px "+t/25+"px,"+-t/10+"px "+n/5+"px"}(e)}},a.createElement("div",{className:"flex heroContent"},!1===o?a.createElement(g,{setButtonClicked:r}):a.createElement(E,null))))))},N=function(e){return a.createElement(a.Fragment,null,a.createElement(b,null))},k=(n(28),n(75)),P=n(72),y=Object(l.o)((function(e){var t=a.useState(!1),n=Object(v.a)(t,2),o=n[0],r=n[1];return a.createElement(a.Fragment,null,a.createElement("div",{className:"grid-item clickableBox",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},onClick:function(){e.history.push("/projects/".concat(e.project[4]))}},a.createElement("div",{className:"projectCard",style:{backgroundImage:"url(".concat(e.project[3],")")}}),a.createElement(k.a,null,a.createElement("div",{className:"cardTitle"},e.project[0],a.createElement("br",null),a.createElement(P.a,{in:o,timeout:100,classNames:"display",unmountOnExit:!0},a.createElement("div",{className:"cardDescription"},e.project[1])))),a.createElement("div",{className:"overlay"})))})),C=n(19),j=n.n(C),w=n(20),x=n.n(w),S=n(21),G=n.n(S),M=n(22),B=n.n(M),A=[["Project GreenBean","Project GreenBean is a React/Redux/Electron app that solves the need for finding recipes through easy search options.","https://github.com/mexvance/Project_GreenBean",j.a,"greenbean"],["Personal Portfolio","Created with React/HTML/CSS/JS to form a simple single page web application to show my projects, hosted on GitHub pages","https://mexvance.github.io",x.a,"PersonalPortfolio"],["Pokemon GUI","Created with XAML in C#, integrates with REST APIs as well as integration with PDF and Excel formats","https://github.com/mexvance/PokeGUI",G.a,"Pokedex"],["ASP.NET CMS","Created with C# and ASP.NET, This project has user authentication, a postgres database, SignalR, and much more","https://github.com/mexvance/CMSWebPageCreator",B.a,"AspCMS"]],F=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"projectPageBody"},a.createElement("div",{className:"title"},"Here are some of my recent projects:"),a.createElement("div",{className:"grid-container"},A.map((function(e,t){return a.createElement(y,{project:e,key:t})})))))},I=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{style:{fontSize:"1.5em"}},"ASP.NET CMS website"),a.createElement("div",null,a.createElement("img",{src:B.a,alt:""})),a.createElement("div",{style:{fontSize:"1em"}},"Page content to come soon!"),a.createElement("div",{style:{margin:"1em"}},"For now feel free to visit this project on my Github!"),a.createElement("div",null,a.createElement("button",{className:"githubButton",onClick:function(){window.open("https://github.com/mexvance/CMSWebPageCreator","_blank")}},"ASP.NET CMS on Github")))},T=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{style:{fontSize:"1.5em"}},"Green Bean - Desktop Recipe App"),a.createElement("div",null,a.createElement("img",{src:j.a,alt:""})),a.createElement("div",{style:{fontSize:"1em"}},"Page content to come soon!"),a.createElement("div",{style:{margin:"1em"}},"For now feel free to visit this project on my Github!"),a.createElement("div",null,a.createElement("button",{className:"githubButton",onClick:function(){window.open("https://github.com/mexvance/Project_GreenBean","_blank")}},"Project GreenBean on Github")))},R=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{style:{fontSize:"1.5em"}},"Personal Portfolio website"),a.createElement("div",null,a.createElement("img",{src:x.a,alt:""})),a.createElement("div",{style:{fontSize:"1em"}},"Page content to come soon!"),a.createElement("div",{style:{margin:"1em"}},"For now feel free to visit this project on my Github!"),a.createElement("div",null,a.createElement("button",{className:"githubButton",onClick:function(){window.open("https://github.com/mexvance/my-portfolio","_blank")}},"My-Portfolio on Github")))},z=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{style:{fontSize:"1.5em"}},"Pokedex UWP App"),a.createElement("div",null,a.createElement("img",{src:G.a,alt:""})),a.createElement("div",{style:{fontSize:"1em"}},"Page content to come soon!"),a.createElement("div",{style:{margin:"1em"}},"For now feel free to visit this project on my Github!"),a.createElement("div",null,a.createElement("button",{className:"githubButton",onClick:function(){window.open("https://github.com/mexvance/PokeGUI","_blank")}},"PokeGui on Github")))},W=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.d,{path:"/projects/aspCMS",component:I}),o.a.createElement(l.d,{path:"/projects/greenbean",component:T}),o.a.createElement(l.d,{path:"/projects/personalPortfolio",component:R}),o.a.createElement(l.d,{path:"/projects/pokedex",component:z}))};n(68);var H=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-body"},o.a.createElement(u,null),o.a.createElement(l.g,null,o.a.createElement(l.d,{exact:!0,path:"/",component:N}),o.a.createElement("div",null,o.a.createElement(l.d,{path:"/about",component:h}),o.a.createElement(l.d,{exact:!0,path:"/projects",component:F}),o.a.createElement(W,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(16);c.a.render(o.a.createElement(L.HashRouter,null,o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.f5f28949.chunk.js.map