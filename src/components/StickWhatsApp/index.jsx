/* eslint-disable @next/next/no-img-element */
import React from 'react';
import whatsApp from '../../common/whatsApp';

const StickyWhatsApp = () => {
  React.useEffect(() => {
    whatsApp();
  }, []);
  return (
    <div className="whatsapp-wrapper cursor-pointer">
      <img src="/img/whatsapp.svg" alt="whatsapp" />
    </div>
  );
};

export default StickyWhatsApp;
