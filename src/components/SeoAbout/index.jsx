/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Split from '../Split';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SeoAbout = ({ skillsTheme }) => {
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
                  Search Engine Optimization
                </h2>
              </Split>
              <p className="wow fadeInUp to-justify" data-wow-delay=".4s">
                Pearsols doesn’t offer a standard SEO service; we provide a
                strategic advantage. Our precision-engineered strategies propel
                your brand to the forefront of search results. We are not just
                enhancing visibility; we are strategically conquering the search
                landscape, ensuring sustained organic growth. Our approach
                isn&apos;t common; it&apos;s a tailored strategy designed for
                your brand&apos;s digital success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoAbout;
