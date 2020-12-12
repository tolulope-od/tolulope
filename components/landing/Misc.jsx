import * as React from 'react';
import tw from 'twin.macro';
import {
  SectionDescription as SectionBody,
} from '../layout/styles/layout';
import {
  ParaGraph,
} from '../layout/styles';

const SectionContainer = tw.div`max-w-screen-xl mx-auto pb-16 px-6 lg:px-0`;
export const AboutMeHeading = tw.h3`font-eesti mx-auto max-w-4xl text-4xl lg:text-5xl tracking-wide`;

const HeaderContainer = tw.div``;

const Misc = () => (
  <SectionContainer className="py-10">
    <HeaderContainer tw="font-eesti text-4xl text-center text-green-400 dark:text-green-100 mb-20">
      <h3>One More Thing...</h3>
    </HeaderContainer>
    <SectionBody>
      <ParaGraph className="text-green-400 dark:text-secondary font-semibold text-center">
        I listen to music a lot, most especially in moments when I am getting work done, the music I
        listen to greatly enhances my productivity and so on that note, here are some of my top
        tracks on Apple Music over the years!
      </ParaGraph>
      <div className="flex flex-col items-center py-12">
        <iframe className="shadow-lg rounded-md" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0" height="450"
                style={{
                  width: '100%',
                  maxWidth: '660px',
                  overflow: 'hidden',
                  background: 'transparent',
                }}
                loading="lazy"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/ng/playlist/replay-2020/pl.rp-4kklhWgxgMQE"/>
      </div>
      <div className="flex flex-col items-center py-12">
        <iframe className="shadow-lg rounded-md" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *" frameBorder="0"
                height="450"
                style={{
                  width: '100%',
                  maxWidth: '660px',
                  overflow: 'hidden',
                  background: 'transparent',
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/ng/playlist/replay-2019/pl.rp-Gjj8ivjLjGdo"/>
      </div>
    </SectionBody>
  </SectionContainer>
);

export default Misc;
