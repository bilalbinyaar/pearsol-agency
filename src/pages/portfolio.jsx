import React from 'react';
import DarkTheme from '../layouts/Dark';
import addParlx from '../common/addParlx';
import Navbar from '../components/Navbar';
import CallToAction from '../components/Call-to-action';
import PortfolioTwoColumn from '../components/Portfolio-two-column';
import Footer from '../components/Footer';
import PortfolioHeader from '../components/Portfolio-header';

const Works4Dark = () => {
  // const fixedHeader = React.useRef(null);
  // const MainContent = React.useRef(null);
  // const navbarRef = React.useRef(null);
  // const logoRef = React.useRef(null);

  // const [pageLoaded, setPageLoaded] = React.useState(false);
  // React.useEffect(() => {
  //   setPageLoaded(true);
  //   if (pageLoaded) {
  //     addParlx();
  //   }
  // }, [pageLoaded]);
  // React.useEffect(() => {
  //   var navbar = navbarRef.current;
  //   if (window.pageYOffset > 300) {
  //     navbar.classList.add('nav-scroll');
  //   } else {
  //     navbar.classList.remove('nav-scroll');
  //   }
  //   window.addEventListener('scroll', () => {
  //     if (window.pageYOffset > 300) {
  //       navbar.classList.add('nav-scroll');
  //     } else {
  //       navbar.classList.remove('nav-scroll');
  //     }
  //   });
  //   window.addEventListener('load', () => {
  //     setTimeout(() => {
  //       if (fixedHeader.current) {
  //         var slidHeight = fixedHeader.current.offsetHeight;
  //         if (MainContent.current) {
  //           MainContent.current.style.marginTop = slidHeight + 'px';
  //         }
  //       }
  //     }, 0);
  //   });
  // }, [fixedHeader, MainContent, navbarRef]);

  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
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
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
    });
  }, []);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <PortfolioHeader sliderRef={fixedHeader} />

      {/* <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Creative Portfolio</h2>
                  <p>
                    Evoking emotions through the magic of creative expression.
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <div ref={MainContent} className="main-content">
        <PortfolioTwoColumn />
        <CallToAction />
        <Footer />
        {/* <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
              <p>
                © 2024 - <a href="#0">Pearsols</a>. All Copyrights Reserved.
              </p>
            </div>
          </div>
        </footer> */}
      </div>
    </DarkTheme>
  );
};

export default Works4Dark;
