(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{7671:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcase4/showcase4-dark",function(){return n(6645)}])},5850:function(e,t){"use strict";t.Z=function(){document.querySelector(".swiper-pagination")&&(document.querySelector(".swiper-pagination").innerHTML=document.querySelector(".swiper-pagination").innerHTML.replace(" / ",""))}},5217:function(e,t,n){"use strict";var i=n(2455);t.Z=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var t=document.createElement("div");t.classList.add("div-tooltip-sub"),document.body.appendChild(t),document.querySelectorAll("[data-tooltip-tit]").forEach((function(t){e=document.querySelector(".div-tooltip-tit"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-tit")})),t.addEventListener("mousemove",(function(t){(0,i.Ji)(e,800),e.style.top=t.pageY+10+"px",e.style.left=t.pageX+20+"px",e.style.padding="0px 10px"})),t.addEventListener("mouseleave",(function(){(0,i.U6)(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){t=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){(0,i.Ji)(t,800),t.style.top=e.pageY-15+"px",t.style.left=e.pageX+30+"px",t.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){(0,i.U6)(t,800),t.style.padding=0}))}))}},6645:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(5893),r=n(7294),s=n(1966),a=n(1664),o=n(2873),l=n(265),c=n(3971),u=(n(933),n(8770),n(92),n(8277),n(5217)),d=n(5850);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(l){r=!0,s=l}finally{try{i||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}c.ZP.use([c.W_,c.tl,c.VS,c.Gk]);var f=function(){var e=p(r.useState(!0),2),t=e[0],n=e[1];r.useEffect((function(){setTimeout((function(){n(!1),(0,u.Z)(),(0,d.Z)()}))}),[]);var s=r.useRef(null),c=r.useRef(null),f=r.useRef(null);return(0,i.jsxs)("header",{className:"slider showcase-grid",children:[(0,i.jsx)("div",{id:"content-carousel-container-unq-1",className:"swiper-container",children:t?null:(0,i.jsx)(o.t,{speed:1e3,mousewheel:!0,autoplay:!0,loop:!0,spaceBetween:30,navigation:{prevEl:s.current,nextEl:c.current},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},onBeforeInit:function(e){e.params.navigation.prevEl=s.current,e.params.navigation.nextEl=c.current},onSwiper:function(e){setTimeout((function(){for(var t=0;t<e.slides.length;t++)e.slides[t].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=s.current,e.params.navigation.nextEl=c.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:4,children:l.map((function(e){return(0,i.jsx)(o.o,{className:"swiper-slide",children:(0,i.jsx)(a.default,{passHref:!0,href:"/project-details2/project-details2-dark",children:(0,i.jsx)("div",{className:"bg-img",style:{backgroundImage:"url(".concat(e.image,")")},"data-tooltip-tit":e.title.first+" "+e.title.second,"data-tooltip-sub":e.sub})})},e.id)}))})}),(0,i.jsxs)("div",{className:"txt-botm",children:[(0,i.jsxs)("div",{ref:c,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:"Next Slide"})}),(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})})]}),(0,i.jsxs)("div",{ref:s,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:[(0,i.jsx)("div",{children:(0,i.jsx)("i",{className:"fas fa-chevron-left"})}),(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:"Prev Slide"})})]}),(0,i.jsx)("div",{className:"swiper-pagination dots",ref:f})]})]})},v=n(2532),m=function(){return(0,i.jsxs)(v.Z,{children:[(0,i.jsx)(s.Z,{}),(0,i.jsx)(f,{})]})}},8770:function(){}},function(e){e.O(0,[121,512,774,888,179],(function(){return t=7671,e(e.s=t);var t}));var t=e.O();_N_E=t}]);