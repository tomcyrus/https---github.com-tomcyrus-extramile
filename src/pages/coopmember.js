import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Coopmember from 'sections/coopmember';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
       <Coopmember />
       
      </Layout>
    </ThemeProvider>
  );
}
