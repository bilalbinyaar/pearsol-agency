"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);

/* eslint-disable @next/next/no-img-element */ 


const CallToAction = ({ img , theme , subBG  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `call-action section-padding ${subBG ? 'sub-bg' : ''} bg-img`,
        style: {
            backgroundImage: `url(${img ? img : '/img/pattern.png'})`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-8 col-lg-9",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "content sm-mb30",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "wow words chars splitting",
                                        "data-splitting": true,
                                        children: "Let's"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "custom-font",
                                        children: "Talk About Your project."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-4 col-lg-3 valign exp-valign",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            href: "/contact",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "explorebtn-f",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/img/exp-icon.png",
                                    alt: "explore"
                                })
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallToAction);


/***/ }),

/***/ 1690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2806);

/* eslint-disable @next/next/no-img-element */ 


const Footer = ({ noSubBG  })=>{
    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }
    const sendEmail = (ms)=>new Promise((r)=>setTimeout(r, ms)
        )
    ;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: `footer-half ${noSubBG ? '' : 'sub-bg'} section-padding pb-0`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "cont",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `${_data_app_json__WEBPACK_IMPORTED_MODULE_3__/* .lightLogo */ .E8}`,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "con-info custom-font",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Email : "
                                                        }),
                                                        " info@pearsols.com"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Phone : "
                                                        }),
                                                        " +92 307 607 8089"
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "social-icon",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "custom-font stit simple-btn-cus",
                                                children: "Follow Us"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "social",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://www.behance.net/marketingpearsols",
                                                        className: "icon",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fab fa-behance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://www.facebook.com/marketingpearsols",
                                                        className: "icon",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://www.instagram.com/marketingpearsols",
                                                        className: "icon",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fab fa-instagram"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://www.linkedin.com/company/marketingpearsols",
                                                        className: "icon",
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
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 offset-lg-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "subscribe mb-50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "custom-font stit simple-btn-cus",
                                        children: "Newsletter"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Sign up for subscribe out newsletter!"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                                        initialValues: {
                                            subscribe: ''
                                        },
                                        onSubmit: async (values)=>{
                                            await sendEmail(500);
                                            alert(JSON.stringify(values, null, 2));
                                            // Reset the values
                                            values.subscribe = '';
                                        },
                                        children: ({ errors , touched  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "form-group custom-font",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                                            validate: validateEmail,
                                                            type: "email",
                                                            name: "subscribe",
                                                            placeholder: "Your Email"
                                                        }),
                                                        errors.email && touched.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: errors.email
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "cursor-pointer",
                                                            children: "Subscribe"
                                                        })
                                                    ]
                                                })
                                            })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "copyrights text-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "\xa9 2024 - ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                children: "Pearsols"
                            }),
                            ". All Copyrights Reserved."
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ })

};
;