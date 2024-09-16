/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from 'theme-ui';
import { position, rgba } from 'polished';
import { Link } from 'components/link';
import Logo from 'components/logo';
// import WhatsAppButton from './whatsapp';
import { SocialIcon } from 'react-social-icons';

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const menuItems = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
  // {
  //   path: '#supports',
  //   label: 'Suporte',
  // },
  {
    path: '/aboutus',
    label: 'About Us',
  },
  {
    path: '/faqs',
    label: 'FAQ',
  },
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
     <FloatingWhatsApp
        phoneNumber="+2348036028454"
        accountName="Extramile Africa"
        avatar="https://home.extramileafrica.com/wp-content/uploads/2021/09/cropped-cropped-08634e6b-87fd-439a-8005-744957d532e5-1-54x49.jpg"
        chatMessage="Hello how can we help you!"
        allowEsc
        // allowClickAway
        notification
        notificationSound
        styles={{
          backgroundColor: 'green',
          color: 'white',
          icon: 'fab fa-whatsapp',
          size: '60px',
          position:'right'
        }}
      />
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
            <Logo isWhite />
            <Text as="span">
              &copy; Copyright by {new Date().getFullYear()} Extramile Africa 
              <br></br>
              Powered by Extrafin Advisory Technologies
            </Text>
          </Flex>
          <SocialIcon network="whatsapp" url="https://api.whatsapp.com/send?phone=+2348036028454" style={{ height: 25, width: 25 }} />
          <SocialIcon  network="facebook" url="https://www.facebook.com/extramileafrica?mibextid=ZbWKwL" style={{ height: 25, width: 25 }} />
          <SocialIcon  network="instagram" url="https://instagram.com/extramileafrica?igshid=YmMyMTA2M2Y=" style={{ height: 25, width: 25 }} />
          <SocialIcon network="twitter" url="https://twitter.com/"  style={{ height: 25, width: 25 }}/>
        
          <Flex as="ul" sx={styles.footerNav}>
            {menuItems?.map((item, index) => (
              <li key={index}>
                <Link path={item?.path}>{item?.label}</Link>
              </li>
            ))}
          </Flex>
         
        </Flex>
      </Container>
      
    </Box>
    
    
  );
  
}

const styles = {
 

  footer: {
    backgroundColor: '#a5d6a73b',
    pt: [6],
    pb: [6],
  },
  footerInner: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, null, 'row'],
  },
  copyright: {
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      color: rgba('black', 0.7),
      fontSize: 1,
      lineHeight: '18px',
      ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
  },
  footerNav: {
    listStyle: 'none',
    // flexDirection: ['column', null, null, null, 'row'],
    m: ['25px 0 0', null, null, null, 0],
    p: 0,
    li: {
      '+ li': {
        ml: [3, null, null, null, 4],
      },
      a: {
        color: 'black',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: [1, null, null, 2],
      },
    },
  },
};
