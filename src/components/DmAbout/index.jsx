/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Split from '../Split';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DmAbout = ({ skillsTheme }) => {
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
                  Digital Marketing
                </h2>
              </Split>
              <p className="wow fadeInUp to-justify" data-wow-delay=".4s">
                At Pearsols, we do not execute digital campaigns; we orchestrate
                market dominance. In the ever-evolving digital landscape, we
                navigate complexities with precision and strategy. Our approach
                is not just about visibility; it is about strategic conquests
                that position your brand at the forefront of success. We are not
                providing services; we are crafting a digital narrative that
                defines the trajectory of your brands journey in the online
                realm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DmAbout;
