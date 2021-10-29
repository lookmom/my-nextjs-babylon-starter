import React from 'react';
import { useTranslations } from 'use-intl';

import { Title } from '@src/components/Title/TitleTemplate';

const HomePage: React.FC = () => {
  const t = useTranslations();

  return (
    <section>
      <Title>Dashboard</Title>
      <h2 className="display-4">Dashboard</h2>
      <p className="lead">{t('LOREM_20')}</p>
    </section>
  );
};

export default HomePage;
