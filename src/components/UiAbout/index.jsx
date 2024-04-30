/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Split from '../Split';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UiAbout = ({ skillsTheme }) => {
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
          <div className="valign">
            <div className="content">
              <Split>
                <h2
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  UI/UX Design
                </h2>
              </Split>
              <p className="wow fadeInUp to-justify" data-wow-delay=".4s">
                We always go beyond traditional UI/UX design. We are not just
                creating interfaces; we are orchestrating seamless digital
                journeys. Through a thoughtful blend of aesthetics and
                functionality, we transcend conventional design boundaries. Our
                designs are not just visually appealing; they are pathways that
                elevate user engagement, ensuring every interaction becomes a
                memorable and immersive experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiAbout;
