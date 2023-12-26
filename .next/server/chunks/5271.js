"use strict";
exports.id = 5271;
exports.ids = [5271];
exports.modules = {

/***/ 5271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Clients_brands)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/sections/clients-brands.json
const clients_brands_namespaceObject = JSON.parse('[{"id":1,"darkImage":"/img/clients/brands/dark/01.png","lightImage":"/img/clients/brands/light/1.png"},{"id":2,"darkImage":"/img/clients/brands/dark/02.png","lightImage":"/img/clients/brands/light/2.png"},{"id":3,"darkImage":"/img/clients/brands/dark/03.png","lightImage":"/img/clients/brands/light/3.png"},{"id":4,"darkImage":"/img/clients/brands/dark/04.png","lightImage":"/img/clients/brands/light/4.png"},{"id":5,"darkImage":"/img/clients/brands/dark/05.png","lightImage":"/img/clients/brands/light/5.png"},{"id":6,"darkImage":"/img/clients/brands/dark/06.png","lightImage":"/img/clients/brands/light/6.png"},{"id":7,"darkImage":"/img/clients/brands/dark/07.png","lightImage":"/img/clients/brands/light/7.png"},{"id":8,"darkImage":"/img/clients/brands/dark/08.png","lightImage":"/img/clients/brands/light/8.png"}]');
;// CONCATENATED MODULE: ./src/components/Clients-brands/index.jsx

/* eslint-disable @next/next/no-img-element */ 





const ClientsBrands = ({ subBG , theme  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `clients-brand section-padding ${subBG ? 'sub-bg' : ''}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sec-head custom-font text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "wow fadeIn",
                            "data-wow-delay": ".5s",
                            children: "Clients"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "wow",
                            "data-splitting": true,
                            children: "Our Clients."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "tbg",
                            children: "Clients"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                    className: "",
                    "data-wow-delay": ".5s",
                    dots: false,
                    infinite: true,
                    arrows: false,
                    autoplay: true,
                    slidesToScroll: 1,
                    slidesToShow: 4,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1
                            }
                        }, 
                    ],
                    children: clients_brands_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "brands",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    style: {
                                        display: 'none'
                                    },
                                    children: " \xa0 "
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item",
                                    "data-wow-delay": index + 1 == '1' ? '.3s' : index + 1 == '2' ? '.6s' : index + 1 == '3' ? '.8s' : index + 1 == '4' ? '.3s' : index + 1 == '5' ? '.4s' : index + 1 == '6' ? '.7s' : index + 1 == '7' ? '.5s' : index + 1 == '8' ? '.3s' : '',
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: theme == 'dark' ? item.darkImage : item.lightImage,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#0",
                                                className: "link words chars splitting",
                                                "data-splitting": true,
                                                children: "www.pearsols.com"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, item.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const Clients_brands = (ClientsBrands);


/***/ })

};
;