import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Materclass from 'sections/materclass';
import SaveHeader from 'sections/snblheader';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Extramile Africa"
          description="Extramile Africa is your hybrid cooperative plugin to access everyday products and services on credit."
        />
      
        <Materclass/>
       
      </Layout>
    </ThemeProvider>
  );
}
