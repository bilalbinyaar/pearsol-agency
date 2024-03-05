/* eslint-disable */
import React from 'react';
import Split from '../Split';
import Link from 'next/link';

const Services1 = () => {
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
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft "
            data-wow-delay=".3s"
            style={{
              backgroundImage: 'url(/img/1.jpg)',
              backgroundPosition: '-60px',
            }}
          >
            <h4 className="custom-font">
              Best Of <br /> Our Features
            </h4>
            <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Services</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon icon-for-hover home-services-icons">
              <img src="/img/branding.png" className="normal-image" />
              <img src="/img/branding-hover.png" className="hover-image" />
            </span>
            <h6>DESIGN & BRANDING</h6>
            <p>
              We craft modern brand stories, seamlessly blending creativity.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
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
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon icon-for-hover home-services-icons">
              <img src="/img/website.png" className="normal-image" />
              <img src="/img/website-hover.png" className="hover-image" />
            </span>
            <h6>WEBSITE DEVELOPMENT</h6>
            <p>
              We are crafting digital masterpieces for impactful online
              presence.
            </p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
