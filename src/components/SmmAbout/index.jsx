/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Split from '../Split';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SmmAbout = ({ skillsTheme }) => {
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
                  Social Media Management
                </h2>
              </Split>
              <p className="wow fadeInUp to-justify" data-wow-delay=".4s">
                Pearsols doesn’t manage social media; we curate strategic
                digital conversations. Beyond conventional engagement, we are
                architects of communities, fostering meaningful relationships in
                the dynamic social landscape. Our approach is not about mere
                presence; it’s about building connections that endure. We are
                not providing a service; we are shaping a digital ecosystem
                where your brand thrives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmmAbout;
