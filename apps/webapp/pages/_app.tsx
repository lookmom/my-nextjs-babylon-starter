import { NextIntlProvider } from 'next-intl';
import { AppProps } from 'next/app';
import React from 'react';

import LoadingSpinner from '@src/components/LoadingSpinner';
import { TitleTemplate } from '@src/components/Title/TitleTemplate';
import { useCurrentLocale } from '@src/utils';

import Layout from '../components/Layout';

// import '../themes/index.scss';
import '../themes/index-dark.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  const { messages, error, isInitialized } = useCurrentLocale();
  if (!isInitialized) return <LoadingSpinner />;
  if (error) console.error(error.message);

  return (
    <NextIntlProvider messages={messages} onError={() => null}>
      <TitleTemplate prefix="Babylon Test" join=" &middot; ">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TitleTemplate>
    </NextIntlProvider>
  );
}

export default CustomApp;
