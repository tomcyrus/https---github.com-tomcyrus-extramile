import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Extra from 'sections/extra';
import Header from 'sections/header';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Extramile Africa"
          description="Extramile Africa is your hybrid cooperative plugin to access everyday products and services on credit."
        />
        <Header />
        <Extra/>
       
      </Layout>
    </ThemeProvider>
  );
}
