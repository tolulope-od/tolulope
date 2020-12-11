import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Button, LineHolder, Row, SectionContainer,
  SectionDescription as SectionBody, SectionDivider,
  SectionHeading,
} from '../layout/styles/layout';
import { ReactComponent as LineSVG } from '../../public/lines.svg';
import { ReactComponent as NIBSSLogo } from '../../public/nibss.svg';
import { ReactComponent as AndelaLogo } from '../../public/andela.svg';
import { ReactComponent as IHugLogo } from '../../public/ihug.svg';
import { ReactComponent as CarrotSuiteLogo } from '../../public/carrotsuite.svg';

const Anchor = motion.a;

const hoverState = { scale: 1.3 };
const whileTap = { scale: 0.8 };

const LandingPageHero = () => (
  <React.Fragment>
    <SectionContainer>
      <SectionBody className="text-primary dark:text-secondary">
        Hi there 👋🏾, my name is
      </SectionBody>
      <SectionHeading>Tolulope Odueke</SectionHeading>
      <SectionBody className="text-primary dark:text-secondary">
        <LineHolder>
        <span className="line-holder-content">
          A full-stack web developer. I{' '}
          <mark>
            <p className="corrective-text">design</p>
            <LineSVG/>
            <>
              <p>craft </p>
            </>
          </mark>
          {' '}
          and develop products aimed at delivering great experiences for
          users. I enjoy creating highly interactive user interfaces and
          also optimizing web applications to make them highly scalable
          and lightweight leveraging tools such as ReactJS, NextJS, NodeJS
           and other related technologies
        </span>
        </LineHolder>
      </SectionBody>
      <SectionBody>
        {/* Reference: https://tailwindcomponents.com/u/gazi-muhammad-akil */}
        <div
          className="sm:w-40 sm:leading-none inset-0 transform hover:scale-75 transition duration-300 pt-10">
          <Button as={'a'} href="mailto:tolulope.od@gmail.com"
                  className="bg-green-300 text-secondary">Hire Me</Button>
        </div>
      </SectionBody>
    </SectionContainer>
    <SectionContainer className="mt-0 py-0 pt-0">
      <SectionBody style={{ fontFamily: 'Homemade Apple' }}>
        <SectionDivider className="text-green-lightest"/>
      </SectionBody>
      <SectionBody>
        <Row>
          <span>
            <h5 className="text-sm">
              {
                'COMPANIES I\'VE WORKED WITH..'.toUpperCase()
              }
            </h5>
          </span>
          <div target="_blank"
               className="w-full md:w-auto grid md:flex grid-cols-2 md:flex-row lg:flex-wrap md:justify-between items-center mt-4 xs:mr-4 md:mt-0">
            <Anchor
              href={'https://nibss-plc.com.ng/'}
              target="_blank"
              whileHover={hoverState}
              whileTap={whileTap}
            >
              <NIBSSLogo width="120px" height="35px" className="mb-8 md:mb-0"/>
            </Anchor>
            <Anchor
              target="_blank" href={'https://andela.com/'}
              whileHover={hoverState}
              whileTap={whileTap}
            >
              <AndelaLogo
                className="mb-8 md:mb-0 ml-4 s:ml-0 s:mr-0"
                width="120px"
                height="40px"
              />
            </Anchor>
            <Anchor
              target="_blank" href={'https://ihughealthcare.com'}
              whileHover={hoverState}
              whileTap={whileTap}
            >
              <IHugLogo
                className="mb-0 ml-4 xs:ml-0"
                width="120px"
                height="38px"
              />
            </Anchor>
            <Anchor
              target="_blank"
              href={'https://carrotsuite.com.ng'}
              whileHover={hoverState}
              whileTap={whileTap}
            >
              <CarrotSuiteLogo width="120px" height="50px"/>
            </Anchor>
          </div>
        </Row>
      </SectionBody>
    </SectionContainer>
  </React.Fragment>
);

export default LandingPageHero;
