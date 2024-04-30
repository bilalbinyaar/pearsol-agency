import React from 'react';
import NavbarFullMenu from '../../components/Navbar-full-menu/navbar-full-menu/index.jsx';
import ShowcasesShowStyle from '../../components/Showcases-show-style/index.jsx';
import DarkTheme from '../../layouts/Dark.jsx';
import SmmIntro from '../../components/SmmIntro/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import SeoIntro from '../../components/SeoIntro/index.jsx';
import SeoAbout from '../../components/SeoAbout/index.jsx';
import SeoPack from '../../components/SeoPack/index.jsx';
import CallToAction from '../../components/Call-to-action/index.jsx';

const SearchEngine = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <SeoIntro />
      <div>
        <SeoAbout />
        <SeoPack />
        <CallToAction subBG />
        <Footer />
      </div>
      {/* <ShowcasesShowStyle /> */}
    </DarkTheme>
  );
};

export default SearchEngine;
