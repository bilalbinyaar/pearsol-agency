"use strict";
exports.id = 9239;
exports.ids = [9239];
exports.modules = {

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @next/next/no-css-tags */ 

const DarkTheme = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/dark.css"
                })
            }),
            children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);


/***/ }),

/***/ 9239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_About_us1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2206);
/* harmony import */ var _components_Blogs_two_column_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6275);
/* harmony import */ var _components_Call_to_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(621);
/* harmony import */ var _components_Clients1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6224);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1690);
/* harmony import */ var _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1098);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/* harmony import */ var _components_Numbers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4412);
/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5715);
/* harmony import */ var _components_Skills_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5222);
/* harmony import */ var _components_Video_with_testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3205);
/* harmony import */ var _components_Works1_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5745);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2532);
/* harmony import */ var _components_About_us2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6658);
/* harmony import */ var _components_Testimonials1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1671);
/* harmony import */ var _components_Clients_brands__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5271);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Works1_slider__WEBPACK_IMPORTED_MODULE_13__, _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Works1_slider__WEBPACK_IMPORTED_MODULE_13__, _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


















const Homepage1 = ()=>{
    const fixedSlider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setInterval(()=>{
            if (fixedSlider.current) {
                var slidHeight = fixedSlider.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + 'px';
            }
        }, 1000);
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add('nav-scroll');
        } else {
            navbar.classList.remove('nav-scroll');
        }
        window.addEventListener('scroll', ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add('nav-scroll');
            } else {
                navbar.classList.remove('nav-scroll');
            }
        });
    }, [
        fixedSlider,
        MainContent,
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                sliderRef: fixedSlider
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: MainContent,
                className: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_us2__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        skillsTheme: "dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services1__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Numbers__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Works1_slider__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonials1__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        withBG: true,
                        imgSrc: "/img/pattern.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Clients_brands__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        subBG: true,
                        theme: "dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Call_to_action__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        subBG: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage1);

});

/***/ })

};
;