import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Extracoop from 'sections/Extracoop';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="ExtramileAfrica"
          description="Extramile Africa is your hybrid cooperative plugin to access everyday products and services on credit."
        />
        
        <Extracoop />
       
      </Layout>
    </ThemeProvider>
  );
}
