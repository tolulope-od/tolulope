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
  H
} from '../layout/styles';
import useInView from '../../hooks/useInView';

const SectionContainer = tw.div`max-w-screen-xl mx-auto pb-16 px-6 lg:px-0`;
export const AboutMeHeading = tw.h3`font-eesti mx-auto max-w-4xl text-4xl lg:text-5xl tracking-wide`;

const AStyles = `transition duration-500 ease-in-out text-green-lightest w-10 h-10 rounded-full bg-green-lightest
 opacity-50 hover:opacity-100 hover:bg-green-400 transform hover:-translate-y-1 hover:scale-110 hover:text-white z-0 flex items-center 
 justify-center cursor-pointer no-underline`;

const HeaderContainer = tw.div``;

const Misc = () => (
  <SectionContainer className="py-10">
    <HeaderContainer tw="font-eesti text-4xl text-center text-green-400 dark:text-green-100 mb-20">
      <h3>One More Thing...</h3>
    </HeaderContainer>
    <SectionBody>
      <ParaGraph className="text-green-400 dark:text-secondary font-semibold text-center">
        I listen to music a lot most. Especially in moments when I am getting work, the music I
        listen to greatly enhances my productivity. On that note, here are some of my top tracks
        over the years!
      </ParaGraph>
      <div className="flex flex-col items-center py-12">
        <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" height="450"
                style={{
                  width: '100%',
                  maxWidth: '660px',
                  overflow: 'hidden',
                  background: 'transparent',
                }}
                loading="lazy"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/ng/playlist/replay-2020/pl.rp-4kklhWgxgMQE" />
      </div>
      <div className="flex flex-col items-center py-12">
        <iframe loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" height="450"
                style={{
                  width: '100%',
                  maxWidth: '660px',
                  overflow: 'hidden',
                  background: 'transparent',
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/ng/playlist/replay-2019/pl.rp-Gjj8ivjLjGdo" />
      </div>
    </SectionBody>
  </SectionContainer>
);

export default Misc;
