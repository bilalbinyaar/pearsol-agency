/* eslint-disable */
import React from 'react';
import Split from '../Split';
import Link from 'next/link';

const Services1 = () => {
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
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              What We Do.
            </h3>
          </Split>
          {/* <span className="tbg">Services</span> */}
        </div>
        <div className="row no-margin">
          {/* ITEM-1 */}
          <div
            className="col-lg-4 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
            onMouseEnter={() => handleItemHover(0)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="icon icon-for-hover home-services-icons">
              <img src="/img/branding.png" className="normal-image" />
              <img src="/img/branding-hover.png" className="hover-image" />
            </span>
            <h6>DESIGN & BRANDING</h6>
            <p>
              We craft modern brand stories, seamlessly blending creativity.
            </p>
            {/* <Link href="#">
              <a className="btn-curve btn-bord btn-lit mt-30">
                <span>Learn more</span>
              </a>
            </Link> */}
            <Split>
              <Link href="/design-and-branding">
                <a
                  className="words chars splitting simple-btn custom-font mt-30 wow"
                  data-splitting
                >
                  <span>Learn More</span>
                </a>
              </Link>
            </Split>
          </div>
          {/* ITEM-2 */}
          <div
            className="col-lg-4 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
            onMouseEnter={() => handleItemHover(1)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="icon icon-for-hover home-services-icons">
              <img src="/img/digital-marketing.png" className="normal-image" />
              <img
                src="/img/digital-marketing-hover.png"
                className="hover-image"
              />
            </span>
            <h6>DIGITAL MARKETING</h6>
            <p>
              We are pioneering strategic digital mastery to propel your brand
              forward.
            </p>
            <Split>
              <Link href="/digital-marketing">
                <a
                  className="words chars splitting simple-btn custom-font mt-30 wow"
                  data-splitting
                >
                  <span>Learn More</span>
                </a>
              </Link>
            </Split>
          </div>
          {/* ITEM-3 */}
          <div
            className="col-lg-4 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
            onMouseEnter={() => handleItemHover(2)}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="icon icon-for-hover home-services-icons"
              style={{ marginTop: '13px' }}
            >
              <img src="/img/website.png" className="normal-image" />
              <img src="/img/website-hover.png" className="hover-image" />
            </span>
            <h6>WEBSITE DEVELOPMENT</h6>
            <p>
              We are crafting digital masterpieces for impactful online
              presence.
            </p>
            <Split>
              <Link href="/website-development">
                <a
                  className="words chars splitting simple-btn custom-font mt-30 wow"
                  data-splitting
                >
                  <span>Learn More</span>
                </a>
              </Link>
            </Split>
          </div>
        </div>
        <div className="row no-margin">
          {/* ITEM-4 */}
          <div
            className="col-lg-4 col-md-6 item-box item-box-2 wow fadeInLeft"
            data-wow-delay=".5s"
            onMouseEnter={() => handleItemHover(3)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="icon icon-for-hover home-services-icons">
              <img src="/img/seo.png" className="normal-image" />
              <img src="/img/seo-hover.png" className="hover-image" />
            </span>
            <h6>SEARCH ENGINE OPTIMIZATION</h6>
            <p>
              We craft modern brand stories, seamlessly blending creativity.
            </p>
            <Split>
              <Link href="/search-engine-optimization">
                <a
                  className="words chars splitting simple-btn custom-font mt-30 wow"
                  data-splitting
                >
                  <span>Learn More</span>
                </a>
              </Link>
            </Split>
          </div>
          {/* ITEM-5 */}
          <div
            className="col-lg-4 col-md-6 item-box item-box-2 wow fadeInLeft"
            data-wow-delay=".7s"
            onMouseEnter={() => handleItemHover(4)}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="icon icon-for-hover home-services-icons"
              style={{ marginTop: '-3px' }}
            >
              <img src="/img/smm.png" className="normal-image" />
              <img src="/img/smm-hover.png" className="hover-image" />
            </span>
            <h6>SOCIAL MEDIA MANAGEMENT</h6>
            <p>
              We are pioneering strategic digital mastery to propel your brand
              forward.
            </p>
            <Split>
              <Link href="/social-media-management">
                <a
                  className="words chars splitting simple-btn custom-font mt-30 wow"
                  data-splitting
                >
                  <span>Learn More</span>
                </a>
              </Link>
            </Split>
          </div>
          {/* ITEM-6 */}
          <div
            className="col-lg-4 col-md-6 item-box item-box-2 wow fadeInLeft"
            data-wow-delay=".9s"
            onMouseEnter={() => handleItemHover(5)}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="icon icon-for-hover home-services-icons"
              style={{ marginTop: '7px' }}
            >
              <img src="/img/uiux.png" className="normal-image" />
              <img src="/img/uiux-hover.png" className="hover-image" />
            </span>
            <h6>UI & UX DESIGNING</h6>
            <p>
              We are crafting digital masterpieces for impactful online
              presence.
            </p>
            <Split>
              <Link href="/ui-ux-design">
                <a
                  className="words chars splitting simple-btn custom-font mt-30 wow"
                  data-splitting
                >
                  <span>Learn More</span>
                </a>
              </Link>
            </Split>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
