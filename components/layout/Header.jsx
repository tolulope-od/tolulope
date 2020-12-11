/* eslint-disable quotes */
import * as React from "react";
import { motion } from 'framer-motion';
import { func } from "prop-types";
import { ReactComponent as MoonIcon } from "feather-icons/dist/icons/moon.svg";
import { ReactComponent as SunIcon } from "feather-icons/dist/icons/sun.svg";
import {
  NavWrapper,
  sidebar,
  sidebarVariants,
  TopNav,
  DynamicNavBar,
  ThemeSwitchContainer,
  Header as PageHeader,
} from "./styles";
import ThemeContext from '../../context/ThemeContext';

import SwitchButton from "../buttons/SwitchButton.jsx";

const MotionPath = motion.path;

const Header = (props) => {
  const [displayMobileNav] = React.useState(false);
  const { state } = React.useContext(ThemeContext);
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "transparent",
    },
    visible: {
      pathLength: 1,
      fill: state.theme === 'dark' ? '#101720' : '#faf8ff',
      transition: { duration: 5.8 },
    },
  };

  return (
    <NavWrapper>
      <PageHeader animate={"isOpen"} variants={sidebarVariants}>
        <a href="#" className="p-2 mr-4 inline-flex items-center">
          <svg width="100" height="40" viewBox="0 0 811 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <MotionPath
              style={{ pathLength: 0 }}
              fill={'transparent'}
              strokeWidth="20"
              stroke={state.theme === 'dark' ? '#faf8ff' : '#11715d'}
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M90.6034 54.976L9.67538 102.496L90.6034 150.304V159.808L0.459376 106.528V98.176L90.6034 45.472V54.976ZM152.294 12.352H102.47V3.99998H211.046V12.352H161.798V220H152.294V12.352ZM340.342 223.744C319.798 223.744 300.982 218.752 283.894 208.768C266.806 198.592 253.27 184.96 243.286 167.872C233.494 150.592 228.598 131.872 228.598 111.712C228.598 92.128 233.59 73.792 243.574 56.704C253.75 39.616 267.382 26.08 284.47 16.096C301.75 5.91999 320.374 0.831989 340.342 0.831989C360.502 0.831989 379.126 5.91999 396.214 16.096C413.302 26.08 426.838 39.616 436.822 56.704C446.998 73.792 452.086 92.416 452.086 112.576C452.086 132.544 447.094 151.072 437.11 168.16C427.126 185.056 413.59 198.592 396.502 208.768C379.414 218.752 360.694 223.744 340.342 223.744ZM340.342 215.392C358.774 215.392 375.766 210.784 391.318 201.568C407.062 192.16 419.542 179.584 428.758 163.84C437.974 148.096 442.582 130.912 442.582 112.288C442.582 93.856 437.974 76.768 428.758 61.024C419.542 45.088 407.062 32.512 391.318 23.296C375.766 13.888 358.774 9.18398 340.342 9.18398C321.91 9.18398 304.822 13.888 289.078 23.296C273.526 32.512 261.142 45.088 251.926 61.024C242.71 76.768 238.102 93.856 238.102 112.288C238.102 130.912 242.71 148.096 251.926 163.84C261.142 179.584 273.526 192.16 289.078 201.568C304.822 210.784 321.91 215.392 340.342 215.392ZM687.432 4.57599H698.664L537.672 220H527.016L687.432 4.57599ZM810.322 98.176V106.528L720.178 159.808V150.304L801.106 102.496L720.178 54.976V45.472L810.322 98.176Z" />
          </svg>
        </a>
        <ThemeSwitchContainer isMobile={true}>
          <SunIcon
            width={16}
            className="stroke text-black-300 dark:text-yellow-300"
          />
          <SwitchButton handleThemeSwitch={() => props.handleThemeSwitch()} />
          <MoonIcon
            width={16}
            className="stroke text-black-300"
          />
        </ThemeSwitchContainer>
        <TopNav
          className={`${
            displayMobileNav ? "text-center" : "hidden"
          } top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <DynamicNavBar
            animate={displayMobileNav ? "open" : "closed"}
            variants={sidebar}
          >
            <ThemeSwitchContainer>
              <SunIcon
                width={16}
                className="stroke text-black-300 dark:text-yellow-300"
              />
              <SwitchButton
                handleThemeSwitch={() => props.handleThemeSwitch()}
              />
              <MoonIcon
                width={16}
                fill={state.theme !== 'dark' ? '#000000' : ''}
                // className="stroke text-secondary dark:text-primary"
              />
            </ThemeSwitchContainer>
          </DynamicNavBar>
        </TopNav>
      </PageHeader>
    </NavWrapper>
  );
};

Header.propTypes = {
  handleThemeSwitch: func,
};

export default Header;
