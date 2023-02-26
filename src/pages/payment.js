import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Payment from 'sections/payment';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
       <Payment />
       
      </Layout>
    </ThemeProvider>
  );
}
