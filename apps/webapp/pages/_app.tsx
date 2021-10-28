// import App from 'next/app';
import LoadingSpinner from '@src/components/LoadingSpinner';
import { useCurrentLocale } from '@src/utils';
import { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';
import React from 'react';

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
