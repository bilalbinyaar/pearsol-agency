import React from 'react';
import NavbarFullMenu from '../../components/Navbar-full-menu/navbar-full-menu';
import ShowcasesFullScreen from '../../components/Showcases-full-screen';
import DarkTheme from '../../layouts/Dark';
import DmIntro from '../../components/DmIntro';
import Footer from '../../components/Footer';
import DmAbout from '../../components/DmAbout';
import DmPack from '../../components/DmPack';

const ShowcaseDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <DmIntro />
      <div>
        <DmAbout />
        <DmPack />
        <Footer />
      </div>
      {/* <ShowcasesFullScreen /> */}
    </DarkTheme>
  );
};

export default ShowcaseDark;
