import { GetStaticPropsContext } from 'next';
import { AppProps } from 'next/app';
import { NextIntlProvider, useTranslations } from 'next-intl';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
};

export default App;
