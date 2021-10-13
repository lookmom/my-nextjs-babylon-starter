import { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
};

export default App;
