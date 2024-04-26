/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Split from '../Split';
import 'react-circular-progressbar/dist/styles.css';
import addParlx from '../../common/addParlx';
import initIsotope from '../../common/initIsotope';

const DmPack = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: '#d1e231',
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == 'dark'
          ? '#0f1218'
          : '#e5e5e5'
        : '',
    },
    text: {
      fill: skillsTheme ? (skillsTheme == 'dark' ? '#ffffff' : '#4e4e4e') : '',
      fontSize: '16px',
    },
  };
  // Function to handle item hover
  const handleItemHover = (index) => {
    const items = document.querySelectorAll('.item-box');
    items.forEach((item, i) => {
      if (i !== index) {
        item.classList.add('items-blur');
      }
    });
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    const items = document.querySelectorAll('.item-box');
    items.forEach((item) => {
      item.classList.remove('items-blur');
    });
  };

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="about padding-section-bottom">
      <div className="container">
        <div className="row">
          <div className="valign">
            <div className="content">
              <Split>
                <h2
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  Digital Marketing Services Pack
                </h2>
              </Split>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="row">
            {/* ITEM-1 */}
            <div
              className="col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft"
              data-wow-delay=".5s"
              onMouseEnter={() => handleItemHover(0)}
              onMouseLeave={handleMouseLeave}
            >
              <h6>Services Pack I</h6>
            </div>
            {/* ITEM-2 */}
            <div
              className="col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft"
              data-wow-delay=".7s"
              onMouseEnter={() => handleItemHover(1)}
              onMouseLeave={handleMouseLeave}
            >
              <h6>Services Pack II</h6>
            </div>
            {/* ITEM-3 */}
            <div
              className="col-lg-4 col-md-6 item-box item-box-pack wow fadeInLeft"
              data-wow-delay=".9s"
              onMouseEnter={() => handleItemHover(2)}
              onMouseLeave={handleMouseLeave}
            >
              <h6>Services Pack III</h6>
            </div>
          </div>
          <div className="row">
            {/* ITEM-4 */}
            <div
              className="col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft"
              data-wow-delay=".5s"
              onMouseEnter={() => handleItemHover(3)}
              onMouseLeave={handleMouseLeave}
            >
              <h6>Services Pack IV</h6>
            </div>
            {/* ITEM-5 */}
            <div
              className="col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft"
              data-wow-delay=".7s"
              onMouseEnter={() => handleItemHover(4)}
              onMouseLeave={handleMouseLeave}
            >
              <h6>Services Pack V</h6>
            </div>
            {/* ITEM-6 */}
            <div
              className="col-lg-4 col-md-6 item-box item-box-2 item-box-pack wow fadeInLeft"
              data-wow-delay=".9s"
              onMouseEnter={() => handleItemHover(5)}
              onMouseLeave={handleMouseLeave}
            >
              <h6>Services Pack VI</h6>
            </div>
          </div>
        </div>

        <div className="row pt-120">
          <div className="valign">
            <div className="content">
              <Split>
                <h2
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  Digital Marketing Features
                </h2>
              </Split>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="gallery full-width">
            <div className="col-md-4 items items-pack web">
              <div className="row no-m">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/project-details2/project-details2-dark/">
                    <a>
                      <img src="/img/portfolio/works/2.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Caption</h6>
                    <span>
                      <a href="#0">Caption</a>, <a href="#0">Caption</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 items items-pack web">
              <div className="row no-m">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/project-details2/project-details2-dark/">
                    <a>
                      <img src="/img/portfolio/works/2.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Caption</h6>
                    <span>
                      <a href="#0">Caption</a>, <a href="#0">Caption</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 items items-pack web">
              <div className="row no-m">
                <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                  <Link href="/project-details2/project-details2-dark/">
                    <a>
                      <img src="/img/portfolio/works/2.jpg" alt="image" />
                    </a>
                  </Link>
                  <div className="cont">
                    <h6>Caption</h6>
                    <span>
                      <a href="#0">Caption</a>, <a href="#0">Caption</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DmPack;
