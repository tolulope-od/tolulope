import * as React from 'react';
import tw from 'twin.macro';
import dynamic from 'next/dynamic';

const FooterBody = dynamic(() => import('./styles/layout').then((module) => module.SectionDescription));
const ParaGraph = dynamic(() => import('./styles').then((module) => module.ParaGraph));
const FooterContainer = tw.footer`max-w-screen-xl my-2 mx-auto p-6`;

const Footer = () => (
  <FooterContainer>
    <FooterBody>
      <ParaGraph style={{ fontWeight: 500 }} className="text-center text-base font-eesti">
        &copy; {new Date().getFullYear()} Tolulope Odueke
      </ParaGraph>
    </FooterBody>
  </FooterContainer>
);

export default Footer;
