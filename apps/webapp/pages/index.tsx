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

export default HomePage;
