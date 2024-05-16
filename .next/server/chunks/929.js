"use strict";
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 4755:
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




const DmAbout = ({ skillsTheme  })=>{
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
                                    children: "Digital Marketing"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "wow fadeInUp to-justify",
                                "data-wow-delay": ".4s",
                                children: "At Pearsols, we do not execute digital campaigns; we orchestrate market dominance. In the ever-evolving digital landscape, we navigate complexities with precision and strategy. Our approach is not just about visibility; it is about strategic conquests that position your brand at the forefront of success. We are not providing services; we are crafting a digital narrative that defines the trajectory of your brands journey in the online realm."
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DmAbout);


/***/ }),

/***/ 4793:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5754);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8636);
/* harmony import */ var _common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6802);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-img-element */ 










swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay
]);
const DmIntro = ({ sliderRef  })=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        setTimeout(()=>{
            setLoad(false);
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        ref: sliderRef,
        className: "slider slider-prlx fixed-slider text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 2500,
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: true
                    },
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: 'fraction',
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute('data-swiper-parallax', 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-img valign bg-img-dm",
                                style: {
                                    backgroundImage: `url(/img/slid/dm.jpg)`
                                },
                                "data-overlay-dark": "6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-7 col-md-9"
                                        })
                                    })
                                })
                            })
                        }, slide.id)
                    )
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "social-icon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.behance.net/marketingpearsols",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-behance"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.facebook.com/marketingpearsols",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.instagram.com/marketingpearsols",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-instagram"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.linkedin.com/company/marketingpearsols",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-linkedin-in"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DmIntro);

});

/***/ }),

/***/ 6819:
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





const DmPack = ({ skillsTheme  })=>{
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
                                    children: "Digital Marketing Services Pack"
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
                                        children: "Search Engine Optimization (SEO)"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".7s",
                                    onMouseEnter: ()=>handleItemHover(1)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Search Engine Marketing (SEM)"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".9s",
                                    onMouseEnter: ()=>handleItemHover(2)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Pay-Per-Click Advertising (PPC)"
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
                                        children: "Social Media Marketing (SMM)"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".7s",
                                    onMouseEnter: ()=>handleItemHover(4)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Content Marketing"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".9s",
                                    onMouseEnter: ()=>handleItemHover(5)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Email Marketing"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DmPack);


/***/ }),

/***/ 3325:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(265);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Mousewheel
]);
const ShowcasesFullScreen = ()=>{
    const [load, setLoad] = React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
            removeSlashFromPagination();
        }, 1000);
    }, []);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const paginationRef = React.useRef(null);
    return(/*#__PURE__*/ _jsxs("header", {
        className: "slider showcase-full",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "swiper-container parallax-slider",
                children: !load ? /*#__PURE__*/ _jsx(Swiper, {
                    speed: 1000,
                    mousewheel: true,
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        clickable: true,
                        type: 'fraction',
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute('data-swiper-parallax', 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: ShowcassesFullScreenData.map((slide)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "4",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "col-lg-10 offset-lg-1",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "caption",
                                                children: /*#__PURE__*/ _jsx("h1", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/project-details2/project-details2-dark",
                                                        children: /*#__PURE__*/ _jsxs("a", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    "data-swiper-parallax": "-2000",
                                                                    children: slide.title.first
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    "data-swiper-parallax": "-5000",
                                                                    children: slide.title.second
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id)
                    )
                }) : null
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "swiper-pagination dots",
                ref: paginationRef
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "txt-botm",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        ref: navigationNextRef,
                        className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: " custom-font",
                                    children: "Next Slide"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("i", {
                                    className: "fas fa-chevron-right"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        ref: navigationPrevRef,
                        className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("i", {
                                    className: "fas fa-chevron-left"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: " custom-font",
                                    children: "Prev Slide"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "swiper-pagination steps custom-font",
                ref: paginationRef
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ShowcasesFullScreen)));

});

/***/ })

};
;