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
              ? 'url(/img/slid/3.png)'
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
                                <img src="/img/clients/4.png" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Rameez Raja
                              </h6>
                              <span className="author-details">
                                Pine Technologies, Pakistan
                              </span>
                              <div className="testi-rates">
                                <img src="/img/stars.png" alt="ratings" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/4.png" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Rameez Raja
                            </h6>
                            <span className="author-details">
                              Pine Technologies, Pakistan
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
                    We have recently had the pleasure of collaborating with
                    Pearsols, and their professionalism and attention to detail
                    in designing our business profile were truly exceptional.
                    Their dynamic approach and punctual delivery underscored
                    their expertise and unwavering dedication to design. In
                    short, we wholeheartedly endorse them as true professionals.
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
                                <img src="/img/clients/1.png" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Ankeet Udani
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
                              <img src="/img/clients/1.png" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Ankeet Udani
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
                    Pearsols stands out as the top agency I have had the
                    privilege of working with. Following the exceptional work
                    they have done , I eagerly anticipate future collaborations
                    with them.
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
                                <img src="/img/clients/3.png" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Hauke ​​Kay
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
                              <img src="/img/clients/3.png" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Hauke ​​Kay
                            </h6>
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
                    Our trip to Pakistan was truly remarkable, our meeting in
                    Islamabad with Naveed being a highlight. His exceptional
                    work and dedication to providing top-notch branding services
                    were evident throughout. His efforts are instrumental in
                    driving Pearsols towards greater heights of success.
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
                                <img src="/img/clients/2.png" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Kevin Nafash
                              </h6>
                              <span className="author-details">
                                JoocyAF, USA
                              </span>
                              <div className="testi-rates">
                                <img src="/img/stars.png" alt="ratings" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/2.png" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Kevin Nafash
                            </h6>
                            <span className="author-details">JoocyAF, USA</span>
                            <div className="testi-rates">
                              <img src="/img/stars.png" alt="ratings" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <p>
                    The team at Pearsols provided awesome social media service,
                    and work, exceeding all expectations. Their expertise,
                    dedication, and social media strategies have made a
                    tremendous experience. Highly recommended for amazing
                    results, and a delightful collaboration!
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
