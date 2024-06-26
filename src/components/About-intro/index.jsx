import React from 'react';
import Split from '../Split';

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p
                  className="wow txt words chars splitting to-justify"
                  data-splitting
                >
                  We are the trendsetters in reshaping the digital landscape. We
                  excel in seamlessly blending design, strategy, and innovation
                  to precisely craft compelling brands, create user-friendly
                  responsive websites, and develop impactful digital strategies.
                  Committed to excellence, we propel businesses to new heights,
                  establishing the gold standard for digital achievements.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
