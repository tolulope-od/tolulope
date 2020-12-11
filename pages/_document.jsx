import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

async function configureStyledComponents(ctx) {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
}

class MainDocument extends Document {}

// eslint-disable-next-line no-return-await
MainDocument.getInitialProps = async (ctx) => await configureStyledComponents(ctx);

export default MainDocument;
