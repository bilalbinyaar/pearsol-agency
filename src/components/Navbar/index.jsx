/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import appData from '../../data/app.json';
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from '../../common/navbar';

const Navbar = ({ lr, nr, theme }) => {
  const beSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.72 9.37"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M5.41,9a2.59,2.59,0,0,0,1-.46,2.47,2.47,0,0,0,.64-.72A2.7,2.7,0,0,0,7.5,6.38,2.42,2.42,0,0,0,7.14,5a2,2,0,0,0-1-.8,2.36,2.36,0,0,0,.7-.52,2.06,2.06,0,0,0,.42-1.35A2.34,2.34,0,0,0,6.79,1,2.83,2.83,0,0,0,4.42,0H0V9.14H4.12A6.5,6.5,0,0,0,5.41,9ZM1.82,1.59h2a3.58,3.58,0,0,1,1.08.14.82.82,0,0,1,.49.84A.86.86,0,0,1,5,3.38a1.82,1.82,0,0,1-1,.22H1.82Zm0,6V5.12H4.07A2.26,2.26,0,0,1,5,5.27a1,1,0,0,1,.58,1A1.14,1.14,0,0,1,5,7.39,2.13,2.13,0,0,1,4,7.55Z"/><path class="cls-1" d="M9.05,8.54a3.65,3.65,0,0,0,2.38.83,3.29,3.29,0,0,0,2.54-1,2.27,2.27,0,0,0,.66-1.23H12.82a1.36,1.36,0,0,1-.36.47,1.48,1.48,0,0,1-1,.31,1.9,1.9,0,0,1-1-.25,1.62,1.62,0,0,1-.7-1.43h4.92a8.09,8.09,0,0,0-.06-1.34,3.26,3.26,0,0,0-.54-1.4,2.66,2.66,0,0,0-1.16-1,3.93,3.93,0,0,0-1.59-.32A3.23,3.23,0,0,0,9,3.14,3.65,3.65,0,0,0,8,5.83,3.27,3.27,0,0,0,9.05,8.54Zm1.26-4.49a1.4,1.4,0,0,1,1.06-.39,1.55,1.55,0,0,1,1,.36,1.5,1.5,0,0,1,.48,1.07H9.84A1.77,1.77,0,0,1,10.31,4.05Z"/><rect class="cls-1" x="9.26" y="0.53" width="3.97" height="0.92"/></g></g></svg>`;
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === 'themeL' ? 'light' : ''
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === 'themeL' ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href="/home/home1-dark">
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href="/home/home2-dark">
                  <a className="dropdown-item">Creative Studio</a>
                </Link>
                <Link href="/home/home3-dark">
                  <a className="dropdown-item">Business Startup</a>
                </Link>
                <Link href="/home/home4-dark">
                  <a className="dropdown-item">One Page</a>
                </Link>
                <Link href="/home/home5-dark">
                  <a className="dropdown-item">Freelancer</a>
                </Link>
              </div>
            </li> */}

            <li className="nav-item" onClick={handleDropdown}>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>

            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Services
              </span>
              <div className="dropdown-menu">
                <Link href="/showcase/showcase-dark">
                  <a className="dropdown-item">Design & Branding</a>
                </Link>
                <Link href="/showcase2/showcase2-dark">
                  <a className="dropdown-item">Digital Marketing</a>
                </Link>
                <Link href="/showcase3/showcase3-dark">
                  <a className="dropdown-item">UI/UX Design</a>
                </Link>
                <Link href="/showcase4/showcase4-dark">
                  <a className="dropdown-item">Website Development</a>
                </Link>
                <Link href="/showcase5/showcase5-dark">
                  <a className="dropdown-item">Social Media Management</a>
                </Link>
                <Link href="/showcase/showcase-dark">
                  <a className="dropdown-item">Search Engine Optimization</a>
                </Link>
              </div>
            </li> */}

            <li className="nav-item" onClick={handleDropdown}>
              <Link href="#">
                <a className="nav-link">Services</a>
              </Link>
            </li>

            <li className="nav-item" onClick={handleDropdown}>
              <Link href="/about/about-dark">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                portfolio
              </span>
              <div className="dropdown-menu">
                <Link href="/works/works-dark">
                  <a className="dropdown-item">Mouse Info</a>
                </Link>
                <Link href="/works2/works2-dark">
                  <a className="dropdown-item">Masonry 3 Columns</a>
                </Link>
                <Link href="/works3/works3-dark">
                  <a className="dropdown-item">Masonry 2 Columns</a>
                </Link>
                <Link href="/works4/works4-dark">
                  <a className="dropdown-item">Pinterest List</a>
                </Link>
              </div>
            </li> */}
            <li className="nav-item" onClick={handleDropdown}>
              <Link href="/contact/contact-dark">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>

          <div className="search">
            {/* <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: '',
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.search = '';
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>

              <span className="close pe-7s-close cursor-pointer"></span>
            </div> */}
            <div className="social-icon">
              <a
                href="https://www.behance.net/marketingpearsols"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-behance"></i>
              </a>
              <a
                href="https://www.facebook.com/marketingpearsols"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/marketingpearsols"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/marketingpearsols"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
