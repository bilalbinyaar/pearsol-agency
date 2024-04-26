/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Split from '../Split';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AboutUs2 = ({ skillsTheme }) => {
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
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title for-pear-title">
                <img className="pear-icon" src="/img/favicon.png" alt="" />
                <h6>Who We Are</h6>
                {/* <span></span>
                <span></span>
                <span></span> */}
              </div>
              <Split>
                <h2
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  Pearsols: Towards Digital Excellence.
                </h2>
              </Split>
              <p className="wow fadeInUp to-justify" data-wow-delay=".4s">
                At Pearsols, we lead the way in transforming the digital
                landscape. Seamlessly blending design, strategy, and innovation,
                we meticulously shape compelling brands, user-friendly
                responsive websites, and impactful digital strategies. Our
                commitment to excellence drive businesses to new heights,
                setting the gold standard for digital achievements.
              </p>
              {/* <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
                Join us in sculpting your success, where every collaboration is
                a story of constant innovation, growth, and unparalleled
                excellence in the evolving world of digital possibilities.
              </p> */}
              <Split>
                <Link href="/about/about-dark">
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
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img
                  className="about-normal"
                  src="/img/intro/about-section.png"
                  alt=""
                />
                <img
                  className="about-hover"
                  src="/img/intro/about-section-hover.png"
                  alt=""
                />
              </div>
              <div className="skills-circle wow fadeInUp" data-wow-delay=".8">
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={96}
                      className="custom-font"
                      strokeWidth={2}
                      text={`${96}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    {/* <span>Project</span> */}
                    <h6>Branding</h6>
                  </div>
                </div>
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={93}
                      strokeWidth={2}
                      className="custom-font"
                      text={`${93}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    {/* <span>App</span> */}
                    <h6>Web Development</h6>
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

export default AboutUs2;
