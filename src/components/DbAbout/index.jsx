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
                In the realm of design and branding, we do not just create; we
                mold narratives that leave an indelible mark on the fabric of
                history. Our meticulous fusion of creativity and strategy
                results in brand identities that captivate and resonate deeply.
                Every detail is carefully considered, ensuring our designs
                transcend the ordinary and forge lasting connections. At
                Pearsols, we are not merely crafting visuals; we are
                architecting experiences that leave an indelible mark on the
                evolving canvas of the competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DbAbout;
