/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Split from '../Split';
import ClientsBrandsData from '../../data/sections/clients-brands.json';

const ClientsBrands = ({ subBG, theme }) => {
  return (
    <section
      className={`clients-brand section-padding ${subBG ? 'sub-bg' : ''}`}
    >
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Clients
          </h6>
          <h3 className="wow" data-splitting>
            Our Clients.
          </h3>
          <span className="tbg">Clients</span>
        </div>
        <Slider
          className=""
          // data-wow-delay="0s"
          {...{
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            slidesToScroll: 1,
            slidesToShow: 4,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          }}
        >
          {ClientsBrandsData.map((item, index) => (
            <div className="brands" key={item.id}>
              <h2 style={{ display: 'none' }}> &nbsp; </h2>
              <div
                className="item"
                // data-wow-delay={
                //   index + 1 == '1'
                //     ? '.3s'
                //     : index + 1 == '2'
                //     ? '.6s'
                //     : index + 1 == '3'
                //     ? '.8s'
                //     : index + 1 == '4'
                //     ? '.3s'
                //     : index + 1 == '5'
                //     ? '.4s'
                //     : index + 1 == '6'
                //     ? '.7s'
                //     : index + 1 == '7'
                //     ? '.5s'
                //     : index + 1 == '8'
                //     ? '.3s'
                //     : ''
                // }
              >
                <div className="styles clients-brand to-transform">
                  <img
                    src={theme == 'dark' ? item.darkImage : item.lightImage}
                    alt=""
                  />
                  {/* <img src={item.lightImage} alt="" /> */}
                </div>
                {/* <Split>
                  <a
                    href="#0"
                    className="link words chars splitting clients-brand to-transform"
                    data-splitting
                    // style={{ transform: 'translateX(1px)' }}
                  >
                    <img src={item.darkImage} alt="" />
                  </a>
                </Split> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientsBrands;
