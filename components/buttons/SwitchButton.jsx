import * as React from 'react';
import { motion } from 'framer-motion';
import { func } from 'prop-types';

import ThemeContext from '../../context/ThemeContext';

const Frame = motion.div;

const SwitchButton = (props) => {
  const { state: themeState } = React.useContext(ThemeContext);

  const flipSwitch = () => {
    props.handleThemeSwitch();
  };
  return (
    <Frame
      style={{
        height: 25,
        width: 50,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
      }}
      center={true}
      onTap={flipSwitch}
      variants={{
        off: { background: '#BBBBBB' },
        on: { background: '#0070DF' },
      }}
      initial={themeState.theme === 'dark' ? 'on' : 'off'}
      animate={themeState.theme === 'dark' ? 'on' : 'off'}
    >
      <Frame
        size={23}
        top={2}
        left={2}
        style={{
          background: '#FFFFFF', borderRadius: '100%', width: 23, height: 23, marginTop: 1, marginLeft: 1,
        }}
        radius={'100%'}
        background={'#FFFFFF'}
        variants={{
          off: { x: -12.5 },
          on: { x: 12 },
        }}
      />
    </Frame>
  );
};

SwitchButton.propTypes = {
  handleThemeSwitch: func,
};

export default SwitchButton;
