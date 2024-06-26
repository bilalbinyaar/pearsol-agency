/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Split from '../../Split';
import Link from 'next/link';
import appData from '../../../data/app.json';
import handleFullScreenNavbar from '../../../common/handleFullScreenNavbar';

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`}
      >
        {/* <div className="container-fluid"> */}
        <div className="container">
          <div className="logo">
            <Link href="/">
              {theme ? (
                theme === 'light' ? (
                  <img src={`${appData.darkLogo}`} alt="logo" />
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img src={`${appData.lightLogo}`} alt="logo" />
              )}
            </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  {/* <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">01.</span>Home
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home1-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>Main Home
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home2-dark">
                              <a className="sub-link">
                                <span className="nm">02.</span>Creative Studio
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home3-dark">
                              <a className="sub-link">
                                <span className="nm">03.</span> Business Startup
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home4-dark">
                              <a className="sub-link">
                                <span className="nm">04.</span>One Page
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/home/home5-dark">
                              <a className="sub-link">
                                <span className="nm">05.</span>Freelancer
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  <li>
                    <div className="o-hidden">
                      <Link href="/">
                        <a className="link">
                          <span className="nm">01.</span>Home
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">04.</span>Our Services
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/design-and-branding">
                              <a className="sub-link">
                                <span className="nm">01.</span>Design & Branding
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/digital-marketing">
                              <a className="sub-link">
                                <span className="nm">02.</span>Digital Marketing
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/ui-ux-design">
                              <a className="sub-link">
                                <span className="nm">03.</span>UI/UX Design
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/website-development">
                              <a className="sub-link">
                                <span className="nm">04.</span>Website
                                Development
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/social-media-management">
                              <a className="sub-link">
                                <span className="nm">05.</span>Social Media
                                Management
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/search-engine-optimization">
                              <a className="sub-link">
                                <span className="nm">06.</span>Search Engine
                                Optimization
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/about-us">
                        <a className="link">
                          <span className="nm">02.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  {/* <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">03.</span>Portfolio
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works/works-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>Mouse Info
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works2/works2-dark">
                              <a className="sub-link">
                                <span className="nm">02.</span>Masonry 3 Columns
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works3/works3-dark">
                              <a className="sub-link">
                                <span className="nm">03.</span>Masonry 2 Columns
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/works4/works4-dark">
                              <a className="sub-link">
                                <span className="nm">04.</span>Pinterest List
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li> */}

                  <li>
                    <div className="o-hidden">
                      <Link href="/portfolio">
                        <a className="link">
                          <span className="nm">04.</span>Portfolio
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href="/contact">
                        <a className="link">
                          <span className="nm">05.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>(+92) 307 607 8089</p>
                </div>
                {/* <div className="item">
                  <h6>Address :</h6>
                  <p>Islamabad, Pakistan 46000.</p>
                </div> */}
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">info@pearsols.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;

// TURN YELLOW
