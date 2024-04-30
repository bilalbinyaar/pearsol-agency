/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Split from '../Split';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const WebAbout = ({ skillsTheme }) => {
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
                  Website Development
                </h2>
              </Split>
              <p className="wow fadeInUp to-justify" data-wow-delay=".4s">
                At Pearsols, we do not just design websites; we create digital
                symphonies. From concept to execution, we are not merely
                providing a service; we are crafting immersive web landscapes
                that stand out. Our designs are not just aesthetically pleasing;
                they are strategic tools that transform ideas into compelling
                online experiences. Every website we create is a masterpiece,
                ensuring your online presence is unparalleled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAbout;
