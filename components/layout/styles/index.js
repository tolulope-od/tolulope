import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

export const sidebarVariants = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1, transition: { delay: 0.5 } },
};
export const sidebar = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const DynamicNavBar = styled.div`
 ${tw`lg:inline-flex lg:flex-row sm:flex-col lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto`}
`;

export const NavWrapper = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopNav = styled(motion.div)``;

export const ThemeSwitchContainer = styled.div`
  ${(props) => (!props.isMobile ? tw`hidden lg:flex` : tw`flex lg:hidden`)}
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  
  * {
    margin-left: 7.5px;
  }
`;

export const Header = styled(motion.header)`${tw`flex justify-between items-center w-full max-w-6xl py-3 px-3 lg:py-3 flex-wrap`}`;
export const Div = tw.div``;
export const ParaGraph = tw.p``;
export const Figure = tw.figure``;
export const A = tw.a``;
export const Img = tw.img``;
export const BlockQuote = tw.blockquote``;
export const Span = tw.span``;
export const Button = tw.button``;
