import React from 'react';
import NavbarFullMenu from '../../components/Navbar-full-menu/navbar-full-menu';
import ShowcasesShowStyle from '../../components/Showcases-show-style/index.jsx';
import DarkTheme from '../../layouts/Dark';
import SmmIntro from '../../components/SmmIntro/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import SmmAbout from '../../components/SmmAbout/index.jsx';
import SmmPack from '../../components/SmmPack/index.jsx';

const ShowcaseDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <SmmIntro />
      <div>
        <SmmAbout />
        <SmmPack />
        <Footer />
      </div>
      {/* <ShowcasesShowStyle /> */}
    </DarkTheme>
  );
};

export default ShowcaseDark;
