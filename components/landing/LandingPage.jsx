import * as React from 'react';
import dynamic from 'next/dynamic';
import { Container, Content2Xl } from '../layout/styles/layout';
import { NIBSSRecentWork, IHugRecentWork, LastWorkCard } from './RecentWorks.jsx';
import { FadeInUpReveal } from '../layout/FadeInUp.jsx';

const LandingPageHero = dynamic(() => import('./LandingPageHero.jsx'));
const AboutMe = dynamic(() => import('./AboutMe.jsx'));
const Misc = dynamic(() => import('./Misc.jsx'));

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
      </Content2Xl>
    </Container>
  </React.Fragment>
);

export default LandingPage;
