"use strict";
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 4848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(2455);
;// CONCATENATED MODULE: ./src/common/navbar.js

const handleDropdown = (e)=>{
    (0,customFunctions/* getSiblings */.m7)(e.target.parentElement).filter((item)=>item.classList.contains('show')
    ).map((item)=>{
        item.classList.remove('show');
        if (item.childNodes[0]) {
            item.childNodes[0].setAttribute('aria-expanded', false);
        }
        if (item.childNodes[1]) {
            item.childNodes[1].classList.remove('show');
        }
    });
    e.target.parentElement.classList.toggle('show');
    e.target.setAttribute('aria-expanded', true);
    e.target.parentElement.childNodes[1].classList.toggle('show');
// console.log('i am toggle');
// document.body.addEventListener('click', () => {
//   if (e.target.parentElement.childNodes[1]) {
//     e.target.parentElement.childNodes[1].classList.toggle('show');
//     console.log('body click');
//   }
// });
};
const handleMobileDropdown = (e)=>{
    document.getElementById('navbarSupportedContent').classList.toggle('show-with-trans');
};
const handleSearch = ()=>{
    let searchForm = document.querySelector('.navbar .search .search-form');
    document.querySelector('.navbar .search .icon').addEventListener('click', function() {
        searchForm.style.display = 'block';
        fadeIn(searchForm, 200);
    });
    document.querySelector('.navbar .search .search-form .close').addEventListener('click', function() {
        searchForm.style.display = 'none';
        fadeOut(searchForm, 200);
    });
};

;// CONCATENATED MODULE: ./src/components/Navbar/index.jsx

/* eslint-disable @next/next/no-img-element */ 




const Navbar = ({ lr , nr , theme  })=>{
    const beSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.72 9.37"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M5.41,9a2.59,2.59,0,0,0,1-.46,2.47,2.47,0,0,0,.64-.72A2.7,2.7,0,0,0,7.5,6.38,2.42,2.42,0,0,0,7.14,5a2,2,0,0,0-1-.8,2.36,2.36,0,0,0,.7-.52,2.06,2.06,0,0,0,.42-1.35A2.34,2.34,0,0,0,6.79,1,2.83,2.83,0,0,0,4.42,0H0V9.14H4.12A6.5,6.5,0,0,0,5.41,9ZM1.82,1.59h2a3.58,3.58,0,0,1,1.08.14.82.82,0,0,1,.49.84A.86.86,0,0,1,5,3.38a1.82,1.82,0,0,1-1,.22H1.82Zm0,6V5.12H4.07A2.26,2.26,0,0,1,5,5.27a1,1,0,0,1,.58,1A1.14,1.14,0,0,1,5,7.39,2.13,2.13,0,0,1,4,7.55Z"/><path class="cls-1" d="M9.05,8.54a3.65,3.65,0,0,0,2.38.83,3.29,3.29,0,0,0,2.54-1,2.27,2.27,0,0,0,.66-1.23H12.82a1.36,1.36,0,0,1-.36.47,1.48,1.48,0,0,1-1,.31,1.9,1.9,0,0,1-1-.25,1.62,1.62,0,0,1-.7-1.43h4.92a8.09,8.09,0,0,0-.06-1.34,3.26,3.26,0,0,0-.54-1.4,2.66,2.66,0,0,0-1.16-1,3.93,3.93,0,0,0-1.59-.32A3.23,3.23,0,0,0,9,3.14,3.65,3.65,0,0,0,8,5.83,3.27,3.27,0,0,0,9.05,8.54Zm1.26-4.49a1.4,1.4,0,0,1,1.06-.39,1.55,1.55,0,0,1,1,.36,1.5,1.5,0,0,1,.48,1.07H9.84A1.77,1.77,0,0,1,10.31,4.05Z"/><rect class="cls-1" x="9.26" y="0.53" width="3.97" height="0.92"/></g></g></svg>`;
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ref: nr,
        className: `navbar navbar-expand-lg change ${theme === 'themeL' ? 'light' : ''}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "logo",
                        children: theme ? theme === 'themeL' ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* darkLogo */.Q1}`,
                            alt: "logo"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* lightLogo */.E8}`,
                            alt: "logo"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            ref: lr,
                            src: `${app/* lightLogo */.E8}`,
                            alt: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    onClick: handleMobileDropdown,
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "icon-bar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-bars"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav ml-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    onClick: handleDropdown,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: handleDropdown,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "nav-link dropdown-toggle",
                                            "data-toggle": "dropdown",
                                            role: "button",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "Our Services"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "dropdown-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase/showcase-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Design & Branding"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase2/showcase2-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Digital Marketing"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase3/showcase3-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "UI/UX Design"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase4/showcase4-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Website Development"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/showcase5/showcase5-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Social Media Management"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Search Engine Optimization"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    onClick: handleDropdown,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            children: "About Us"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    onClick: handleDropdown,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "nav-link dropdown-toggle",
                                            "data-toggle": "dropdown",
                                            role: "button",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "false",
                                            children: "portfolio"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "dropdown-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works/works-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Mouse Info"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works2/works2-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Masonry 3 Columns"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works3/works3-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Masonry 2 Columns"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/works4/works4-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "dropdown-item",
                                                        children: "Pinterest List"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    onClick: handleDropdown,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/contact/contact-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            children: "Contact"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "search",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social-icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-behance"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-facebook-f"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-instagram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-linkedin-in"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;