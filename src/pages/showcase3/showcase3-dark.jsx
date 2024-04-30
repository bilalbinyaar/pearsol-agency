import React from 'react';
import NavbarFullMenu from '../../components/Navbar-full-menu/navbar-full-menu';
import ShowcasesFullScreenCircleSlide from '../../components/Showcases-full-screen-circle-slide';
import DarkTheme from '../../layouts/Dark';
import UiIntro from '../../components/UiIntro';
import Footer from '../../components/Footer';
import UiAbout from '../../components/UiAbout';
import UiPack from '../../components/UiPack';
import CallToAction from '../../components/Call-to-action';

const Showcase3Dark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <UiIntro />
      <div>
        <UiAbout />
        <UiPack />
        <CallToAction subBG />
        <Footer />
      </div>
      {/* <ShowcasesFullScreenCircleSlide /> */}
    </DarkTheme>
  );
};

export default Showcase3Dark;
