/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Split from '../Split';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import removeOverlay from '../../common/removeOverlay';
import parallaxie from '../../common/parallaxie';

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
    parallaxie('.testimonials.bg-img.parallaxie');
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${
          this.props.subBgLftstl ? 'sub-bg lftstl' : ''
        } ${this.props.withBG ? 'bg-img' : ''} ${
          this.props.parallaxie ? 'parallaxie' : ''
        } ${!this.props.overlay ? 'noOverlay' : ''}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? 'url(/img/slid/3.jpg)'
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : 'none'
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? '9' : '0'}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What Client Says?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            {/* <span className="tbg">Testimonials</span> */}
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                KEVIN NAFASH
                              </h6>
                              <span className="author-details">
                                Joocy.AF, USA
                              </span>
                              <div className="testi-rates">
                                <img src="/img/stars.png" alt="ratings" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              KEVIN NAFASH
                            </h6>
                            <span className="author-details">
                              Joocy.AF, USA
                            </span>
                            <div className="testi-rates">
                              <img src="/img/stars.png" alt="ratings" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <p>
                    The team at Pearsols provided exceptional social media
                    service, and work, exceeding all expectations. Their
                    expertise, dedication, and professionalism made the
                    experience truly remarkable. Highly recommended for
                    top-notch results, and a delightful collaboration!
                  </p>
                </div>
                <div className="item">
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/2.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                HAUKAY
                              </h6>
                              <span className="author-details">
                                DHN.digital, Germany
                              </span>
                              <div className="testi-rates">
                                <img src="/img/stars.png" alt="ratings" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/2.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">HAUKAY</h6>
                            <span className="author-details">
                              DHN.digital, Germany
                            </span>
                            <div className="testi-rates">
                              <img src="/img/stars.png" alt="ratings" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <p>
                    Precize communication, excellent results and fast delivery.
                    I can recommend working with Pearsols for any kind of design
                    and branding work to be done in high quality and fast. Well
                    Done!
                  </p>
                </div>
                <div className="item">
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/3.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                ANKEET UDANI
                              </h6>
                              <span className="author-details">
                                Viking Capital, USA
                              </span>
                              <div className="testi-rates">
                                <img src="/img/stars.png" alt="ratings" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/3.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              ANKEET UDANI
                            </h6>
                            <span className="author-details">
                              Viking Capital, USA
                            </span>
                            <div className="testi-rates">
                              <img src="/img/stars.png" alt="ratings" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <p>
                    Their prolonged efforts yielded exceptional, professional
                    results precisely on schedule. I intend to repeatedly enlist
                    their services due to the outstanding quality and timeliness
                    of their work.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
