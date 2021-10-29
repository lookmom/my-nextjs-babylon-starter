import Head from 'next/head';
import React from 'react';

interface Props {
  prefix?: string;
  suffix?: string;
  join?: string;
}

const TitleTemplateContext = React.createContext<Props>({ prefix: '', suffix: '', join: '' });

export const TitleTemplate: React.FC<Props> = ({ prefix, suffix, join = '', children }) => {
  const title = [prefix, suffix].filter((str) => typeof str === 'string' && str.length).join(join);
  return (
    <TitleTemplateContext.Provider value={{ prefix, suffix, join }}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </TitleTemplateContext.Provider>
  );
};

const useTitle = () => React.useContext(TitleTemplateContext);

export const Title: React.FC<{ children: string }> = ({ children }) => {
  const { prefix, suffix, join } = useTitle();
  console.log({ prefix, suffix, join });
  const title = [prefix, children, suffix].filter((str) => typeof str === 'string' && str.length).join(join);
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
