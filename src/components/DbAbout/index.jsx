/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Split from '../Split';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DbAbout = ({ skillsTheme }) => {
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
                  Design & Branding
                </h2>
              </Split>
              <p className="wow fadeInUp to-justify" data-wow-delay=".4s">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DbAbout;
