import React from 'react';
import { FooterTop, FooterBottom, FooterMiddle } from './footer-parts/index';

const Footer = () => {
  return (
    <div className="font-bodyFont">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
};

export default Footer;
