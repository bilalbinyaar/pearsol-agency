import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillsCircle = ({ subBG, theme }) => {
  const cpStyle = {
    path: {
      stroke: '#d1e231',
    },
    trail: {
      stroke: theme ? (theme == 'dark' ? '#0f1218' : '#e5e5e5') : '',
    },
    text: {
      fill: theme ? (theme == 'dark' ? '#ffffff' : '#4e4e4e') : '',
      fontSize: '16px',
    },
  };
  return (
    <section className={`skills-circle pt-50 pb-50 ${subBG ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={93}
                        strokeWidth={2}
                        text={`${93}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      {/* <span>Project</span> */}
                      <h6>Branding</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={96}
                        strokeWidth={2}
                        text={`${96}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      {/* <span>App</span> */}
                      <h6>Web Developement</h6>
                    </div>
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

export default SkillsCircle;
