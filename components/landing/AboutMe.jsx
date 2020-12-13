import * as React from 'react';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { ReactComponent as DownloadIcon } from 'feather-icons/dist/icons/download.svg';
import { ReactComponent as TwitterIcon } from 'feather-icons/dist/icons/twitter.svg';
import { ReactComponent as GitHubIcon } from 'feather-icons/dist/icons/github.svg';
import { ReactComponent as LinkedInIcon } from 'feather-icons/dist/icons/linkedin.svg';
import { ReactComponent as InstagramIcon } from 'feather-icons/dist/icons/instagram.svg';
import { ReactComponent as EmailIcon } from 'feather-icons/dist/icons/mail.svg';
import { ReactComponent as PhoneIcon } from 'feather-icons/dist/icons/phone-call.svg';
import {
  SectionDescription as SectionBody,
} from '../layout/styles/layout';
import {
  Button, Figure, BlockQuote, Img, Div, ParaGraph,
} from '../layout/styles';
import useInView from '../../hooks/useInView';

const SectionContainer = tw.div`max-w-screen-xl mx-auto pb-16 px-6 lg:px-0`;
export const AboutMeHeading = tw.h3`font-eesti mx-auto max-w-4xl text-4xl lg:text-5xl tracking-wide`;

const AStyles = `transition duration-500 ease-in-out text-green-lightest w-10 h-10 rounded-full bg-green-lightest
 opacity-50 hover:opacity-100 hover:bg-green-400 transform hover:-translate-y-1 hover:scale-110 hover:text-white z-0 flex items-center 
 justify-center cursor-pointer no-underline`;

const container = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const MotionDiv = motion.div;
const A = motion.a;

const AboutMe = () => {
  const [ref, inView] = useInView(0);
  return (
    <SectionContainer className="py-10">
      <SectionBody>
        <Figure
          className="text-green-400 dark:text-secondary md:flex bg-white dark:bg-transparent rounded-xl p-8 md:p-0 shadow-none light:shadow-lg">
          <Img
            loading={'lazy'}
            className="w-40 h-40 md:w-72 md:h-auto md:rounded-md object-cover rounded-full mx-auto"
            src="/images/tolulope-odueke.jpeg" alt="Image of Tolulope Odueke" width="384"
            height="512"/>
          <Div className="pt-8 md:p-8 text-left md:text-left space-y-4">
            <AboutMeHeading className="text-center md:text-left">About Me</AboutMeHeading>
            <BlockQuote>
              <ParaGraph className="text-base font-semibold">
                I am a Software engineer with over 3 years of experience in building products, using
                industry-standard best practices and methods while leveraging tools that help to
                guarantee software quality
                without sacrificing productivity. Throughout my career over the years, I have built
                a couple of large scale enterprise-level software and fintech applications that has
                helped several companies achieve their
                bottom line while also guaranteeing user satisfaction.
              </ParaGraph>
            </BlockQuote>
            <Div className="w-full md:w-2/5">
              <ParaGraph className="py-4 text-base">Get in Touch with me:</ParaGraph>
              <Div className="pt-4 text-base flex flex-row justify-between">
                <EmailIcon/>
                <p>tolulope.od@gmail.com</p>
              </Div>
              <Div className="pt-4 text-base flex flex-row justify-between">
                <PhoneIcon/>
                <ParaGraph>+234 906 088 1608</ParaGraph>
              </Div>
            </Div>

            <Div className="pt-8 md:pt-0 flex flex-col md:flex-row items-center justify-between">
              <form method="get" action='/Tolulope-Odueke-Resume.pdf'>
                <Button
                  type={'submit'}
                  download={'Tolulope-Odueke-Resume.pdf'}
                  className="w-40 bg-green-400 text-base font-semibold px-6 py-2 rounded-md flex flex-row items-center justify-between">
                  <p className="text-secondary">Résumé</p>
                  <DownloadIcon className="text-secondary" style={{ width: '20px' }}/>
                </Button>
              </form>
              <MotionDiv
                ref={ref}
                variants={container}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-row justify-between items-center w-full md:w-1/2 py-12 md:py-6"
              >
                <A className={AStyles}
                   href="https://github.com/tolulope-od"
                   target="_blank"
                   variants={item}
                >
                  <GitHubIcon
                    className="opacity-100 text-green-900 z-50 p-0.5 cursor-pointer hover:text-white"
                  />
                </A>
                <A className={AStyles} href="https://www.linkedin.com/in/tolulope-odueke"
                   target="_blank"
                   variants={item}>
                  <LinkedInIcon
                    className="opacity-100 text-green-900 z-50 p-0.5 hover:text-white"/></A>
                <A className={AStyles} href="https://twitter.com/tolulope_od"
                   target="_blank"
                   variants={item}><TwitterIcon
                  className="opacity-100 text-green-900 z-50 p-0.5 hover:text-white"/></A>
                <A className={AStyles} href="https://instagram.com/tolulope_od"
                   target="_blank"
                   variants={item}><InstagramIcon
                  className="opacity-100 text-green-900 z-50 p-0.5 hover:text-white"/></A>
              </MotionDiv>
            </Div>
          </Div>
        </Figure>
      </SectionBody>
    </SectionContainer>
  );
};

export default AboutMe;
