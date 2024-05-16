"use strict";
exports.id = 737;
exports.ids = [737];
exports.modules = {

/***/ 9649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_4__);

/* eslint-disable @next/next/no-img-element */ 




const SmmAbout = ({ skillsTheme  })=>{
    const cpStyle = {
        path: {
            stroke: '#d1e231'
        },
        trail: {
            stroke: skillsTheme ? skillsTheme == 'dark' ? '#0f1218' : '#e5e5e5' : ''
        },
        text: {
            fill: skillsTheme ? skillsTheme == 'dark' ? '#ffffff' : '#4e4e4e' : '',
            fontSize: '16px'
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "about section-padding",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "valign",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "co-tit custom-font wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Social Media Management"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "wow fadeInUp to-justify",
                                "data-wow-delay": ".4s",
                                children: "Pearsols doesn’t manage social media; we curate strategic digital conversations. Beyond conventional engagement, we are architects of communities, fostering meaningful relationships in the dynamic social landscape. Our approach is not about mere presence; it’s about building connections that endure. We are not providing a service; we are shaping a digital ecosystem where your brand thrives."
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmmAbout);


/***/ }),

/***/ 6943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);
/* harmony import */ var _common_addParlx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2115);
/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8063);

/* eslint-disable @next/next/no-img-element */ 





const SmmPack = ({ skillsTheme  })=>{
    const cpStyle = {
        path: {
            stroke: '#d1e231'
        },
        trail: {
            stroke: skillsTheme ? skillsTheme == 'dark' ? '#0f1218' : '#e5e5e5' : ''
        },
        text: {
            fill: skillsTheme ? skillsTheme == 'dark' ? '#ffffff' : '#4e4e4e' : '',
            fontSize: '16px'
        }
    };
    // Function to handle item hover
    const handleItemHover = (index)=>{
        const items = document.querySelectorAll('.item-box');
        items.forEach((item, i)=>{
            if (i !== index) {
                item.classList.add('items-blur');
            }
        });
    };
    // Function to handle mouse leave
    const handleMouseLeave = ()=>{
        const items = document.querySelectorAll('.item-box');
        items.forEach((item)=>{
            item.classList.remove('items-blur');
        });
    };
    const [pageLoaded, setPageLoaded] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            (0,_common_addParlx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
        }
    }, [
        pageLoaded
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "about padding-section-bottom",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "valign",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "co-tit custom-font wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Social Media Management Services Pack"
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "services",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".5s",
                                    onMouseEnter: ()=>handleItemHover(0)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Social Media Strategy Development"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".7s",
                                    onMouseEnter: ()=>handleItemHover(1)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Content Creation & Curation"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".9s",
                                    onMouseEnter: ()=>handleItemHover(2)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Social Media Posting & Scheduling"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".5s",
                                    onMouseEnter: ()=>handleItemHover(3)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Community Engagement"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".7s",
                                    onMouseEnter: ()=>handleItemHover(4)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Audience Research & Targeting"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".9s",
                                    onMouseEnter: ()=>handleItemHover(5)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Performance Monitoring & Analytics"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmmPack);


/***/ })

};
;