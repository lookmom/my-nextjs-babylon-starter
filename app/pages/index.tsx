import BabylonDemo from '@src/components/BabylonDemo';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import { useTranslations } from 'use-intl';

const HomePage: React.FC = () => {
  const t = useTranslations();

  return (
    <section>
      <h6>{t('LOREM_20')}</h6>
      <BabylonDemo id="my-canvas" style={{ width: '100vw', height: '100vh' }} />
    </section>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like, but the recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`@src/locales/${locale}.json`)).default,
    },
  };
}

export default HomePage;
