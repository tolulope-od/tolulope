import * as React from 'react';
import Head from 'next/head';
import { shape, any } from 'prop-types';
import Header from '../components/layout/Header.jsx';
import ThemeContext, { ThemeProvider } from '../context/ThemeContext';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const themeContext = React.useContext(ThemeContext);

  React.useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html')
        .classList
        .add('dark');
      localStorage.setItem('theme', 'dark');
      themeContext.dispatch({ type: 'dark' });
    } else {
      document.querySelector('html')
        .classList
        .remove('dark');
      localStorage.setItem('theme', 'light');
      themeContext.dispatch({ type: 'light' });
    }
  }, []);

  const handleThemeToggle = () => {
    let newTheme = 'dark';
    if (themeContext.state.theme !== 'light') {
      newTheme = 'light';
    }
    if (document) {
      if (newTheme === 'dark') {
        document.querySelector('html')
          .classList
          .remove('light');
        document.querySelector('html')
          .classList
          .add(newTheme);
        localStorage.setItem('theme', 'dark');
        themeContext.dispatch({ type: 'dark' });
      } else {
        document.querySelector('html')
          .classList
          .remove('dark');
        document.querySelector('html')
          .classList
          .add(newTheme);
        localStorage.setItem('theme', 'light');
        themeContext.dispatch({ type: 'light' });
      }
      themeContext.dispatch({ type: newTheme });
    }
  };
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Tolulope Odueke</title>
        <meta name="description"
              content="A full-stack web developer. that designs and develops products aimed at delivering great user for experiences with highly interactive interfaces"/>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@tolulope-od"/>
        <meta name="twitter:title" content="Tolulope Odueke: Software Engineer"/>
        <meta name="twitter:description"
              content="A full-stack web developer. that designs and develops products aimed at delivering great user for experiences with highly interactive interfaces"/>
        <meta name="keywords" content="software engineer website developer reactjs nextjs nodejs javascript in nigeria full-stack developer frontend backend build products engineering optimization app" />
        <meta name="robots" content="index, follow"/>
        <meta name="author" content="Tolulope Odueke"/>
        <meta name="apple-touch-fullscreen" content="yes" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#14846d"/>
        <link
          rel="preload"
          href="/static/fonts/GT-Eesti-Pro-Display-Bold-Trial.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/GT-Eesti-Pro-Display-Medium-Trial.otf"
          as="font"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
              rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
              rel="stylesheet"/>
        <meta name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Head>
      <Header handleThemeSwitch={handleThemeToggle}/>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

App.propTypes = {
  Component: any,
  pageProps: shape({}),
};

function Wrapper(props) {
  return (<ThemeProvider><App {...props}/></ThemeProvider>);
}

export default Wrapper;
