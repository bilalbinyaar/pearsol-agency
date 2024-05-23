/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Split from '../Split';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(/img/slid/1.jpg)` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 forflex-more">
              <div className="vid-area">
                {/* <div className="vid-icon">
                  {typeof window !== 'undefined' && (
                    <ModalVideo
                      channel="vimeo"
                      autoplay
                      isOpen={isOpen}
                      videoId="127203262"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://vimeo.com/127203262"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div> */}

                <div className="cont">
                  <Split>
                    <h3 className="wow" data-splitting>
                      That&apos;s who we are. There&apos;s simply no
                      alternative.
                    </h3>
                  </Split>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Happy Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                      We have recently had the pleasure of collaborating with
                      Pearsols, and their professionalism and attention to
                      detail in designing our business profile were truly
                      exceptional. Their dynamic approach and punctual delivery
                      underscored their expertise and unwavering dedication to
                      design. In short, we wholeheartedly endorse them as true
                      professionals.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/4.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Rameez Raja
                          </h6>
                          <span className="author-details">
                            Pine Technologies, Pakistan
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                      Pearsols stands out as the top agency I have had the
                      privilege of working with. Following the exceptional work
                      they have done , I eagerly anticipate future
                      collaborations with them.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/1.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Ankeet Udani
                          </h6>
                          <span className="author-details">
                            Viking Capital, USA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                      Our trip to Pakistan was truly remarkable, our meeting in
                      Islamabad with Naveed being a highlight. His exceptional
                      work and dedication to providing top-notch branding
                      services were evident throughout. His efforts are
                      instrumental in driving Pearsols towards greater heights
                      of success.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/3.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Hauke ​​Kay
                          </h6>
                          <span className="author-details">
                            {' '}
                            DHN.digital, Germany
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                      The team at Pearsols provided awesome social media
                      service, and work, exceeding all expectations. Their
                      expertise, dedication, and social media strategies have
                      made a tremendous experience. Highly recommended for
                      amazing results, and a delightful collaboration!
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/2.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Kevin Nafash
                          </h6>
                          <span className="author-details">JoocyAF, USA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
