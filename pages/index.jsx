import * as React from 'react';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../components/landing/LandingPage.jsx'));

function Index() {
  return (
    <React.Fragment>
      <LandingPage />
    </React.Fragment>
  );
}

export default Index;
