import * as React from 'react';
import { any } from 'prop-types';

const initialState = {
  theme: 'dark',
};

const ThemeContext = React.createContext(initialState);

const { Provider } = ThemeContext;

const reducer = (state, action) => {
  switch (action.type) {
    case 'light':
      return { ...state, theme: 'light' };
    case 'dark':
      return { ...state, theme: 'dark' };
    case 'reset':
      return { ...state, theme: action.payload };
    default:
      return initialState;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
};

ThemeProvider.propTypes = {
  children: any,
};

export { ThemeProvider };

export default ThemeContext;
