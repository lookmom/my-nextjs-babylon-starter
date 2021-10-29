import React from 'react';
import { useTranslations } from 'use-intl';

import BabylonDemo from '@src/components/BabylonDemo';
import { Title } from '@src/components/Title/TitleTemplate';

const HomePage: React.FC = () => {
  const t = useTranslations();

  return (
    <section>
      <Title>Products</Title>
      <h2 className="display-4">Products</h2>
      <p className="lead">{t('LOREM_20')}</p>
      <BabylonDemo />
    </section>
  );
};

export default HomePage;
