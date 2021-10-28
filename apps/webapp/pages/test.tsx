import React from 'react';
import { useTranslations } from 'use-intl';

const HomePage: React.FC = () => {
  const t = useTranslations();

  return (
    <section>
      <h6>{t('LOREM_20')}</h6>
    </section>
  );
};

export default HomePage;
