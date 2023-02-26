import React from 'react';

import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Contact from 'sections/contactus';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Startup Agency Alpha Landing"
          description="Coleção de modelos de landings gratuitos de topo de linha, criados com o react / next js. Gratuito para baixar, basta editar e implantar!"
        />
        <Contact />
        
      </Layout>
    </ThemeProvider>
  );
}
