import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Dashboard from 'sections/dashboard';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';
import Academy from 'sections/academy';
import Extrawealth from 'sections/extrawealth';
import Community from 'sections/community';
import { motion } from "framer-motion";


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Extramile Africa"
          description="Financial inclusion and wellness for shared-prosperity, cooperative growth, healthy living and everyday essentials with lots of seamless access to credit-on-the-go solutions"
        />
     
        <Banner />

        <Support />
        <PremiumFeature />
        <AppFeature />
        <Dashboard />
        <Academy />
        <Extrawealth />
        <Pricing />
        <Community />
        <Testimonials />
        <Subscribe />
      
      </Layout>
    </ThemeProvider>
  );
}
