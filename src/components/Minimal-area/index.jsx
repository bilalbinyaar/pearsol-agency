/* eslint-disable @next/next/no-img-element */
import React from 'react';
import featuresEffect from '../../common/featuresEffect';
import { thumparallaxDown } from '../../common/thumparallax';
import Split from '../Split';

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We are recognized as a top-tier creative marketing agency,
                  generating innovative concepts for both start-ups and large
                  industries.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    We aim to go beyond the outdated digital marketing approach
                    and consistently exceeding the expectations for a sustained
                    business growth of our valuable clients.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Vision
                  </h6>
                  <p>
                    Our main focus is to be the most creative agency among the
                    top-notch digital agencies in the world.
                  </p>
                </li>
                {/* <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
