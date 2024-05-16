"use strict";
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 49:
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




const DbAbout = ({ skillsTheme  })=>{
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
                                    children: "Design & Branding"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "wow fadeInUp to-justify",
                                "data-wow-delay": ".4s",
                                children: "In the realm of design and branding, we do not just create; we mold narratives that leave an indelible mark on the fabric of history. Our meticulous fusion of creativity and strategy results in brand identities that captivate and resonate deeply. Every detail is carefully considered, ensuring our designs transcend the ordinary and forge lasting connections. At Pearsols, we are not merely crafting visuals; we are architecting experiences that leave an indelible mark on the evolving canvas of the competitive landscape."
                            })
                        ]
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DbAbout);


/***/ }),

/***/ 7186:
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
const DbIntro = ({ sliderRef  })=>{
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
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(/img/slid/db.jpg)`
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DbIntro);

});

/***/ }),

/***/ 2317:
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





const DbPack = ({ skillsTheme  })=>{
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
                                    children: "Design & Branding Services Pack"
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
                                        children: "Logo & Brand Identity"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".7s",
                                    onMouseEnter: ()=>handleItemHover(1)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Graphic Design"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".9s",
                                    onMouseEnter: ()=>handleItemHover(2)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Marketing Design"
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
                                        children: "Advertising Design"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".7s",
                                    onMouseEnter: ()=>handleItemHover(4)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Print Design"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".9s",
                                    onMouseEnter: ()=>handleItemHover(5)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Packaging Design"
                                    })
                                })
                            ]
                        }),
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
                                        children: "Branding Strategy & Consultation"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".7s",
                                    onMouseEnter: ()=>handleItemHover(1)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Brand Style Guide"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft",
                                    "data-wow-delay": ".9s",
                                    onMouseEnter: ()=>handleItemHover(2)
                                    ,
                                    onMouseLeave: handleMouseLeave,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Art & Illustration"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DbPack);


/***/ }),

/***/ 1145:
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
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Mousewheel
]);
const ShowcasesOneCenter = ()=>{
    const [load, setLoad] = React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
            removeSlashFromPagination();
        });
    }, []);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return(/*#__PURE__*/ _jsx("header", {
        className: "slider showcase-carus",
        children: /*#__PURE__*/ _jsxs("div", {
            id: "content-carousel-container-unq-1",
            className: "swiper-container",
            children: [
                !load ? /*#__PURE__*/ _jsx(Swiper, {
                    speed: 1000,
                    mousewheel: true,
                    centeredSlides: true,
                    autoplay: true,
                    loop: true,
                    spaceBetween: 30,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 200
                        }
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute('data-swiper-parallax', 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 4,
                    children: ShowcassesFullScreenData.map((slide)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "1",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "caption ontop",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "o-hidden",
                                            children: /*#__PURE__*/ _jsx("h1", {
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/project-details2/project-details2-dark",
                                                    children: /*#__PURE__*/ _jsxs("a", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "stroke",
                                                                children: slide.title.first
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                children: slide.title.second
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "copy-cap valign",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "cap",
                                            children: /*#__PURE__*/ _jsx("h1", {
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/project-details2/project-details2-dark",
                                                    children: /*#__PURE__*/ _jsxs("a", {
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "stroke",
                                                                children: slide.title.first
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                children: slide.title.second
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }, slide.id)
                    )
                }) : null,
                /*#__PURE__*/ _jsxs("div", {
                    className: "txt-botm",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl cursor-pointer",
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
                            className: "swiper-button-prev swiper-nav-ctrl cursor-pointer",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsx("i", {
                                        className: "fas fa-chevron-left"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "custom-font",
                                        children: "Prev Slide"
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ShowcasesOneCenter)));

});

/***/ })

};
;