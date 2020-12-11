import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = tw.div`relative min-h-screen overflow-x-hidden`;
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 px-6 lg:px-0`;
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-20`;
export const ContentWithVerticalPadding = tw.div`py-20`;
export const Content2Xl = tw.div`max-w-screen-2xl mx-auto`;
export const SectionHeading = tw.h1`font-eesti mt-6 mx-auto max-w-4xl text-6xl lg:text-9xl tracking-wide`;
export const Subheading = tw.h3`font-eesti mt-6 mx-auto max-w-4xl text-4xl lg:text-5xl tracking-wide`;
export const SectionBodyBase = tw.section`mt-6 text-xl md:text-base lg:text-xl font-medium leading-relaxed max-w-xl`;
export const Button = styled.button`
  ${tw`w-full font-semibold rounded-md py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none transition duration-300`}
`;
export const SectionContainer = tw(ContentWithPaddingXl)``;
export const SectionDescription = tw(SectionBodyBase)`mx-auto max-w-4xl`;

export const Highlighted = styled.span`
  position: relative;
  display: inline-block;

  span.inline-button {
    position: relative;
    display: inline-block;
    font-size: 0.85em;
    color: rgb(255, 255, 255);
    text-shadow: rgba(0, 0, 0, 0.12) 0px 0.062em 0.096em;
    padding: 0 1rem;
    z-index: 1;
    outline: none;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    will-change: transform; 
  }

  .inline-button:before {
      content: "";
      position: absolute;
      background: linear-gradient(30deg, #1cbc9b, #19a98c);
      top: 0em;
      bottom: 0em;
      left: 0px;
      right: 0px;
      border-radius: 0.352em;
      z-index: -1;
  }
`;

export const LineHolder = styled.span`
  display: inline-block;
  margin-top: 24px;
  font-size: 1.275rem;

  svg {
    position: absolute;
    display: inline-block;
    height: auto;
    transform: translate(-5px, 15px);
    width: 50px;

    path {
      fill: #FE4A49;
    }
  }

  mark {
    background-color: transparent;
    color: var(--color-text-primary);
    margin: 0 3px;
  }

  p {
    display: inline;
  }

  .corrective-text {
    font-family: 'Homemade Apple', cursive;
    display: inline-block;
    color: #FE4A49;
    position: absolute;
    transform: translate(-5px, -14px);
    width: 50px;
    height: auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    svg {
      position: absolute;
      display: inline-block;
      height: auto;
      transform: translate(-5px, 13px);
      width: 42.5px;
  
      path {
        fill: #FE4A49;
      }
    }
  }
`;

export const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
export const SectionDivider = tw.hr``;
export const SectionSubHeader = tw.h3``;
export const ResponsiveGrid = tw.div`grid grid-cols-1 md:grid-cols-2`;
export const TransparentButton = tw.button`bg-transparent border-2 border-green-400 w-full mt-12 rounded-md py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none transition duration-300`;
export const HorizontalLine = tw.hr`w-1/2 py-2 px-8 inline-block`;
export const IllustrationContainer = tw.div`hidden md:flex md:justify-center`;

export const ExpandButton = tw.button`font-semibold bg-green-400 border-2 border-green-400 w-full md:w-48 text-secondary mt-12 rounded-md p-4 flex items-center justify-between sm:w-40 sm:leading-none focus:outline-none`;
