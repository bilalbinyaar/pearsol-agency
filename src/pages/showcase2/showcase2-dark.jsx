import React from 'react';
import NavbarFullMenu from '../../components/Navbar-full-menu/navbar-full-menu';
import ShowcasesOneCenter from '../../components/Showcases-one-center';
import DarkTheme from '../../layouts/Dark';
import DbIntro from '../../components/DbIntro';
import Footer from '../../components/Footer';
import DbAbout from '../../components/DbAbout';
import DbPack from '../../components/DbPack';

const Showcase4Dark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <DbIntro />
      <div>
        <DbAbout />
        <DbPack />
        <Footer />
      </div>
      {/* <ShowcasesOneCenter /> */}
    </DarkTheme>
  );
};

export default Showcase4Dark;
