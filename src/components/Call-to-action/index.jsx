/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Split from '../Split';
import Link from 'next/link';

const CallToAction = ({ img, theme, subBG }) => {
  return (
    <section
      className={`call-action section-padding ${subBG ? 'sub-bg' : ''} bg-img`}
      style={{ backgroundImage: `url(${img ? img : '/img/pattern.png'})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  Let&apos;s
                </h6>
                {/* <h2
                  className="wow words custom-font chars splitting"
                  data-splitting
                >
                  
                  <b>Talk about your project.</b>
                </h2> */}
                <h2 className="custom-font">Talk About Your project.</h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            {/* <Link href="/contact/contact-dark">
              <a
                className={`btn-curve ${
                  theme == 'light' ? 'btn-blc' : 'btn-lit'
                } wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>Get a Quote</span>
              </a>
            </Link> */}
            <Link href="/about/about-dark">
              <a className="explorebtn-f">
                {/* <span>Explore</span> */}
                {/* <img src="/img/ExploreBtn.png" alt="explore" /> */}
                <img src="/img/exp-icon.png" alt="explore" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
