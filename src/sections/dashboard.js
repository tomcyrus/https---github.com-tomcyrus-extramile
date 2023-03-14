/** @jsx jsx */
import { useRef, useEffect, useState } from 'react';
import { rgba } from 'polished';/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import TabTitle from 'components/tabs/tab-title';
import TabContent from 'components/tabs/tab-content';
import Currency from 'components/icons/currency';
import Cog from 'components/icons/cog';
import PieChart from 'components/icons/pie-chart';
import Suitcase from 'components/icons/suitcase';
import BarChart from 'components/icons/bar-chart';
// import dashboard from 'assets/images/dashboard.png';
import dashboard1 from 'assets/images/dashboard1.png';
import dashboard2 from 'assets/images/dashboard2.png';
import dashboard3 from 'assets/images/dashboard3.png';
import dashboard4 from 'assets/images/dashboard4.png';
import dashboard5 from 'assets/images/dashboard5.png';
import dashboard6 from 'assets/images/dashboard6.png';
import dashboard7 from 'assets/images/dashboard7.png';

const data = [
  {
    id: 1,
    tabPane: [
      {
        icon: <Currency />,
        title: 'ExtraPower',
      },
    ],
    tabContent: [
      {
        image: dashboard1,
        title: `Introducing Extrapower, An Innovative Power Solution`,
        description: `Take the first step towards a greener future with our solar power products. Contact us today to learn more about our innovative solution and how it can help you reduce your carbon footprint while also saving money.`,
        readMore: 'https://closa.extramile.africa/store/category/extra-power-7',
      },
    ],
  },
  {
    id: 2,
    tabPane: [
      {
        icon: <Cog />,
        title: 'ExtraB-support',
      },
    ],
    tabContent: [
      {
        image: dashboard2,
        title: `Get The Support You Need To Scale Your Business Above Competitors`,
        description: `We provide an extensive selection of business support services to cater for your specific needs, ranging from financial management, HR support, marketing and branding, technology solutions, and more. Our team of professionals comprise experienced and well-trained experts who are devoted to offering the highest level of support and guidance for your business.`,
        readMore: 'https://closa.extramile.africa/store/category/extrab-support-5',
      },
    ],
  },
  {
    id: 3,
    tabPane: [
      {
        icon: <PieChart />,
        title: 'ExtraFarm',
      },
    ],
    tabContent: [
      {
        image: dashboard4,
        title: `Sales Of Farmlands, Tools, Agrochemicals, Seeds, Inputs, Supply Chain Like Palm Oil And Other Agro-Commodities `,
        description: `Extramile Africa specializes in providing a wide range of agricultural products and services to meet the diverse needs of our customers. Our offerings include the sales of farmlands, tools, agrochemicals, seeds, and inputs, as well as the provision of supply chain solutions for products such as palm oil and other agro-commodities`,
        readMore: 'https://closa.extramile.africa/store/category/extra-farm-3',
      },
    ],
  },
  {
    id: 4,
    tabPane: [
      {
        icon: <Suitcase />,
        title: 'ExtraCare',
      },
    ],
    tabContent: [
      {
        image: dashboard3,
        title: `Have Access To High-Quality Healthcare Services, Regardless Of Your Background Or Income Level.`,
        description: `We provide affordable, reliable, and 24/7 healthcare services and products to our onboarded users. Checkout our vitual outlests and extrastore for our healthcare products and services for individual and family care`,
        readMore: 'https://closa.extramile.africa/store/category/extra-care-4',
      },
    ],
  },
  {
    id: 5,
    tabPane: [
      {
        icon: <BarChart />,
        title: 'Homes and Properties',
      },
    ],
    tabContent: [
      {
        image: dashboard7,
        title: `Extramile Homes And Properties: Buy Now and Pay Small Small`,
        description: `Affordable lands and properties in high-valued locations like Ibeju-Lekki and Epe, Lagos: Extramile Homes and Properties powered by RENTALS by Extramile Africa. Buy Now and Pay Small Small`,
        readMore: 'https://closa.extramile.africa/store/category/extramiles-homes-and-property-10',
      },
    ],
  },
  {
    id: 6,
    tabPane: [
      {
        icon: <BarChart />,
        title: 'ExtraRide',
      },
    ],
    tabContent: [
      {
        image: dashboard5,
        title: `Ride With Extraride By Extramile Africa And Make A Living For Yourself..`,
        description: `Extramile Africa is excited to introduce our innovative Access Now Pay Later for transportation service. With Extraride, you have the opportunity to become a car or bike owner and start your own delivery and logistics business.`,
        readMore: 'https://closa.extramile.africa/store/category/extra-ride-6',
      },
    ],
  },
  {
    id: 7,
    tabPane: [
      {
        icon: <BarChart />,
        title: 'ExtraUtilities',
      },
    ],
    tabContent: [
      {
        image: dashboard6,
        title: `"Reliable and Efficient Utility Services for Your Comfort and Convenience"`,
        description: `Extramile Africa, through Extrautilities, offers a wide range of utility services designed to meet the needs of residential and commercial customers. 
        We understand that reliable and efficient utilities are essential for the comfort and convenience of our customers, which is why we are committed to providing high-quality utility 
        services that meet their needs`,
        readMore: 'https://closa.extramile.africa/store/category/extra-utilities-1',
      },
    ],
  },
];

const Dashboard = () => {
  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  return (
    <Box as="section" sx={styles.section}>
      <Container ref={containerRef} />
      <Box sx={{ pl: containerOffset.left + 30, ...styles.container }}>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >

          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
            <TabContent tabContent={tab?.tabContent} />
            </TabPane>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: '#009688',
    pt: [9, null, null, 11, 10, 12, null],
    pb: [9, null, null, null, 0],
  },
  container: {
    maxWidth: ['none !important'],
    pr: [6, null, null, 0],
  },
  tabs: {
    border: 0,
    color: 'white',
    '.rc-tabs-nav': {
      mb: [8, null, null, 7, 10, null, 12],
    },
    '.rc-tabs-nav-wrap': {
      '::before': {
        backgroundColor: rgba('#fff', 0.1),
        content: ['none', null, null, `''`],
        height: 1,
        position: 'absolute',
        left: 0,
        top: 51,
        width: '100%',
      },
      '::after': {
        borderColor: ['primary'],
      },
    },
    '.rc-tabs-nav-list': {
      display: ['flex'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      '+ .rc-tabs-tab': {
        ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      'svg g, svg path': {
        transition: '0.3s ease-in-out 0s',
      },
    },
    '.rc-tabs-tab-btn': {
      alignItems: 'center',
      display: ['flex', null, null, 'block'],
      outline: '0 none',
      fontSize: [null, null, null, 15, 2],
    },
    '.rc-tabs-tab-active': {
      'svg g, svg path': {
        fill: 'primary',
        opacity: 1,
      },
      h5: {
        color: 'primary',
      },
    },
    '.rc-tabs-ink-bar': {
      backgroundColor: 'primary',
      borderRadius: 5,
      bottom: [47],
      display: ['none', null, null, 'block'],
    },
    '.rc-tabs-tabpane': {
      outline: '0 none',
    },
  },
};
