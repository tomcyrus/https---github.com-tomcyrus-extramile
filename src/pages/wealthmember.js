import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Wealthmember from 'sections/payment';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
       <Wealthmember />
       
      </Layout>
    </ThemeProvider>
  );
}
