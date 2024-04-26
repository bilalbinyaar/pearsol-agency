/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Split from '../Split';
import services4Data from '../../data/sections/services4.json';
import Link from 'next/link';

const Services4 = ({ withBG, withPadding, halfBG, withOutTitle }) => {
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
    <section
      className={`services ${withPadding ? 'section-padding' : ''} ${
        withBG ? 'sub-bg' : ''
      }`}
    >
      <div className="container">
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Best Features
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Services.
              </h3>
            </Split>
            <span className="tbg">Services</span>
          </div>
        )}
        {/* <div className="row">
          {services4Data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className={`item ${
                  index != services4Data.length - 1 ? 'md-mb50' : ''
                } wow fadeInUp`}
                data-wow-delay={
                  item.id == 1 ? '.5s' : item.id == 2 ? '.3s' : '.8s'
                }
              >
                <span className={`icon ${item.icon}`}></span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="row">
          {/* ITEM-1 */}
          <div
            className="col-lg-4 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
            onMouseEnter={() => handleItemHover(0)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="icon icon-for-hover home-services-icons">
              <img
                src="/img/branding.png"
                className="normal-image"
                alt="This is branding"
              />
              <img
                src="/img/branding-hover.png"
                className="hover-image"
                alt="This is branding"
              />
            </span>
            <h6>DESIGN & BRANDING</h6>
            <p>
              We craft modern brand stories, seamlessly blending creativity.
            </p>
            <Link href="#">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Learn more</span>
              </a>
            </Link>
          </div>
          {/* ITEM-2 */}
          <div
            className="col-lg-4 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
            onMouseEnter={() => handleItemHover(1)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="icon icon-for-hover home-services-icons">
              <img
                src="/img/digital-marketing.png"
                className="normal-image"
                alt="This is branding"
              />
              <img
                src="/img/digital-marketing-hover.png"
                className="hover-image"
                alt="This is branding"
              />
            </span>
            <h6>DIGITAL MARKETING</h6>
            <p>
              We are pioneering strategic digital mastery to propel your brand
              forward.
            </p>
            <Link href="#">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Learn more</span>
              </a>
            </Link>
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
              <img
                src="/img/website.png"
                className="normal-image"
                alt="This is branding"
              />
              <img
                src="/img/website-hover.png"
                className="hover-image"
                alt="This is branding"
              />
            </span>
            <h6>WEBSITE DEVELOPMENT</h6>
            <p>
              We are crafting digital masterpieces for impactful online
              presence.
            </p>
            <Link href="#">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Learn more</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="row">
          {/* ITEM-4 */}
          <div
            className="col-lg-4 col-md-6 item-box item-box-2 wow fadeInLeft"
            data-wow-delay=".5s"
            onMouseEnter={() => handleItemHover(3)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="icon icon-for-hover home-services-icons">
              <img
                src="/img/seo.png"
                className="normal-image"
                alt="This is branding"
              />
              <img
                src="/img/seo-hover.png"
                className="hover-image"
                alt="This is branding"
              />
            </span>
            <h6>SEARCH ENGINE OPTIMIZATION</h6>
            <p>
              We craft modern brand stories, seamlessly blending creativity.
            </p>
            <Link href="#">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Learn more</span>
              </a>
            </Link>
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
              <img
                src="/img/smm.png"
                className="normal-image"
                alt="This is branding"
              />
              <img
                src="/img/smm-hover.png"
                className="hover-image"
                alt="This is branding"
              />
            </span>
            <h6>SOCIAL MEDIA MANAGEMENT</h6>
            <p>
              We are pioneering strategic digital mastery to propel your brand
              forward.
            </p>
            <Link href="#">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Learn more</span>
              </a>
            </Link>
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
              <img
                src="/img/uiux.png"
                className="normal-image"
                alt="This is branding"
              />
              <img
                src="/img/uiux-hover.png"
                className="hover-image"
                alt="This is branding"
              />
            </span>
            <h6>UI & UX DESIGNING</h6>
            <p>
              We are crafting digital masterpieces for impactful online
              presence.
            </p>
            <Link href="#">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>Learn more</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default Services4;
