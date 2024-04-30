import React from 'react';
import NavbarFullMenu from '../../components/Navbar-full-menu/navbar-full-menu';
import ShowcasesGrid from '../../components/Showcases-grid';
import DarkTheme from '../../layouts/Dark';
import WdIntro from '../../components/WebIntro';
import Footer from '../../components/Footer';
import WebAbout from '../../components/WebAbout';
import WebPack from '../../components/WebPack';
import CallToAction from '../../components/Call-to-action';

const Showcase4Dark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <WdIntro />
      <div>
        <WebAbout />
        <WebPack />
        <CallToAction subBG />
        <Footer />
      </div>
      {/* <ShowcasesGrid /> */}
    </DarkTheme>
  );
};

export default Showcase4Dark;
