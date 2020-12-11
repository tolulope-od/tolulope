import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import tw from 'twin.macro';
import { ReactComponent as ChevronDownIcon } from 'feather-icons/dist/icons/chevron-down.svg';
import {
  HorizontalLine, IllustrationContainer,
  ResponsiveGrid, SectionContainer,
  SectionDescription as SectionBody,
  Subheading, TransparentButton, ExpandButton,
} from '../layout/styles/layout';
import MoreWork from './MoreWork.jsx';
import { ReactComponent as NIBSSLogo } from '../../public/nibss.svg';
import LaptopSVG from '../svg/Laptop.jsx';
import { ReactComponent as IHugLogo } from '../../public/ihug.svg';
import IphoneSVG from '../svg/Iphone.jsx';
import { ReactComponent as KathekonLogo } from '../../public/kathekon.svg';

const MotionSpan = motion.span;
const MotionSection = motion.section;

const variants = {
  close: { rotate: 0 },
  open: { rotate: 180 },
};

const HeaderContainer = tw.div``;

export const NIBSSRecentWork = () => (
  <SectionContainer>
      <HeaderContainer tw="font-eesti text-4xl text-center text-green-400 dark:text-green-100 mb-20">
        <h3>Recent Projects</h3>
      </HeaderContainer>
      <SectionBody>
        <ResponsiveGrid className="align-center">
          <div tw="w-full">
            <NIBSSLogo
              width="160px"
              height="45px"
              className="text-green-400 dark:text-secondary -ml-8"
            />
            <Subheading className="py-4">NIBSS Self Service</Subheading>
            <HorizontalLine />
            <SectionBody className="text-green-400 dark:text-secondary">
              Nigeria Inter-Bank Settlement System is the leading payment
              switch operator in Nigeria, We built an application to let
              users manage the services and resources they have access to
            </SectionBody>
            <TransparentButton as={'a'} target="_blank" href="https://selfservice.nibss-plc.com.ng">Check it out</TransparentButton>
          </div>
          <IllustrationContainer style={{ height: '100%', width: '100%' }}>
            <LaptopSVG
              patternId="pattern0"
              imageId="image0"
              imageSrc="/images/selfservice-homepage.png"
            />
          </IllustrationContainer>
        </ResponsiveGrid>
      </SectionBody>
  </SectionContainer>
);

export const IHugRecentWork = () => (
  <SectionContainer>
      <SectionBody>
        <ResponsiveGrid className="align-center">
          <div tw="w-full">
            <IHugLogo
              width="160px"
              height="45px"
              className="text-green-400 dark:text-secondary -ml-8"
            />
            <Subheading className="py-4">iHug Healthcare</Subheading>
            <HorizontalLine />
            <SectionBody className="text-green-400 dark:text-secondary">
              iHug is a RideShare application for healthcare services
              located in California, USA. I worked on the integration of
              Stripe API&apos;s to enable partner payments
            </SectionBody>
            <TransparentButton as={'a'} target="_blank" href="https://ihughealthcare.com">Check it out</TransparentButton>
          </div>
          <IllustrationContainer style={{ maxWidth: '500px' }}>
            <IphoneSVG imageSrc="/images/ihug-screen-mobile.png" />
          </IllustrationContainer>
        </ResponsiveGrid>
      </SectionBody>
  </SectionContainer>
);

export const LastWorkCard = () => {
  const [moreWorkVisible, setMoreWorkVisible] = React.useState(false);

  const handleButtonClick = () => setMoreWorkVisible(!moreWorkVisible);
  return (
    <SectionContainer>
      <SectionBody>
        <ResponsiveGrid className="align-center">
          <div tw="w-full">
            <KathekonLogo
              width="190px"
              height="70px"
              className="text-green-400 dark:text-secondary -ml-6"
            />
            <Subheading className="py-4">Kathēkon</Subheading>
            <HorizontalLine />
            <SectionBody className="text-green-400 dark:text-secondary">
              Kathekon provides grants to organisations seeking to transform
              society through evidence-driven investments in education,
              social welfare, and civil society. While Nigeria is a current
              focus, we seek to impact the world through Africa.
            </SectionBody>
            <TransparentButton as={'a'} target="_blank" href="https://kathekon.in">Check it out</TransparentButton>
          </div>
          <IllustrationContainer style={{ height: '100%', width: '100%' }}>
            <LaptopSVG
              patternId="pattern02"
              imageId="image02"
              imageSrc="/images/kathekon-website-home.png"
            />
          </IllustrationContainer>
        </ResponsiveGrid>
      </SectionBody>
      <SectionBody>
        <div tw="flex flex-col items-center">
          <p tw="text-center text-base p-4 underline">You can view more of my work/projects by clicking on the button below</p>
            <ExpandButton onClick={handleButtonClick}>
              <p>View More</p>
              <MotionSpan
                className="font-semibold"
                initial={'hidden'}
                animate={moreWorkVisible ? 'open' : 'close'}
                exit="hidden"
                variants={variants} transition={{ type: 'tween' }}
              >
                <ChevronDownIcon />
              </MotionSpan>
            </ExpandButton>
        </div>
      </SectionBody>
      <AnimatePresence initial={false}>
        {
          moreWorkVisible && (
            <MotionSection
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <MoreWork />
            </MotionSection>
          )
        }
      </AnimatePresence>
    </SectionContainer>
  );
};
