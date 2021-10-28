import { NextIntlProvider } from 'next-intl';
import { AppProps } from 'next/app';
import React from 'react';

import LoadingSpinner from '@src/components/LoadingSpinner';
import { useCurrentLocale } from '@src/utils';

import '../index.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  const { messages, error, isInitialized } = useCurrentLocale();
  if (!isInitialized) return <LoadingSpinner />;
  if (error) console.error(error.message);

  return (
    <NextIntlProvider messages={messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default CustomApp;
