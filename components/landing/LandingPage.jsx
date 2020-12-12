import * as React from 'react';
import dynamic from 'next/dynamic';
import { Container, Content2Xl } from '../layout/styles/layout';
import { FadeInUpReveal } from '../layout/FadeInUp.jsx';

const LandingPageHero = dynamic(() => import('./LandingPageHero.jsx'));
const AboutMe = dynamic(() => import('./AboutMe.jsx'));
const Misc = dynamic(() => import('./Misc.jsx'));
const NIBSSRecentWork = dynamic(() => import('./RecentWorks.jsx').then((module) => module.NIBSSRecentWork));
const IHugRecentWork = dynamic(() => import('./RecentWorks.jsx').then((module) => module.IHugRecentWork));
const LastWorkCard = dynamic(() => import('./RecentWorks.jsx').then((module) => module.LastWorkCard));
const Footer = dynamic(() => import('../layout/Footer.jsx'));

const LandingPage = () => (
  <React.Fragment>
    <Container className="text-green-400 dark:text-green-100">
      <Content2Xl>
        <FadeInUpReveal>
          <LandingPageHero />
        </FadeInUpReveal>
         <FadeInUpReveal>
           <NIBSSRecentWork />
           <IHugRecentWork />
           <LastWorkCard />
         </FadeInUpReveal>
        <AboutMe />
        <Misc />
        <Footer />
      </Content2Xl>
    </Container>
  </React.Fragment>
);

export default LandingPage;
