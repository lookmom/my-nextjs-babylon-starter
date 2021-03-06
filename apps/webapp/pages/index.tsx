import React from 'react';
import { useTranslations } from 'use-intl';

const HomePage: React.FC = () => {
  const t = useTranslations();

  return (
    <section>
      <h2 className="display-4">Home</h2>
      <p className="lead">{t('LOREM_20')}</p>
    </section>
  );
};

export default HomePage;
