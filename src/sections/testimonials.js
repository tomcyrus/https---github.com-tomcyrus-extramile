
import dynamic from 'next/dynamic';/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
const Testimonial = dynamic(() => import('components/cards/testimonial'));
// import Testimonial from 'components/cards/testimonial';
import avatar1 from 'assets/images/testimonials/1.png';
import avatar2 from 'assets/images/testimonials/2.png';
import avatar3 from 'assets/images/testimonials/3.png';
import avatar4 from 'assets/images/testimonials/4.png';
import avatar5 from 'assets/images/testimonials/5.png';
import avatar6 from 'assets/images/testimonials/6.png';
import avatar7 from 'assets/images/testimonials/7.png';
import avatar8 from 'assets/images/testimonials/8.png';
import avatar9 from 'assets/images/testimonials/9.png';

const data = [
  [
    {
      id: 1,
      avatar: avatar9,
      name: 'Emmanuel Katherine',
      username: '@emmanuine',
      text: `Extramile team of experts demonstrated a deep understanding of the credit industry and provided us with customized solutions that were tailored to our specific needs. They were always available to answer any questions and provide support throughout the entire process, which made it a stress-free experience for me and my team.`,
    },
    {
      id: 2,
      avatar: avatar9,
      name: 'Buchi Bello',
      username: '@buchilo',
      text: `I absolutely love this new service by Extramile Africa. 
      It has made shopping so much easier and stress-free. I can buy what I need without worrying about paying everything upfront. Thank you for providing this amazing service!`,
    },
  ],
  [
    {
      id: 3,
      avatar: avatar9,
      name: 'Ikenna Afunku',
      username: '@ikennku',
      text: `I'm so glad I discovered Access Now, Pay Later. It's a great way to manage my finances and still get the things I need. 
      The application process was easy, and the customer service was excellent. 
      Highly recommended!`,
    },
    {
      id: 4,
      avatar: avatar9,
      name: 'Toke Akintade',
      username: '@tokede ',
      text: `I can't thank Extramile Africa for their incredible service. I was able to purchase a new computer for my business without worrying about the upfront cost. 
      The repayment process was smooth and hassle-free. Highly recommend!`,
    },
  ],
  [
    {
      id: 5,
      avatar: avatar9,
      name: 'Akande Temitope',
      username: '@akanpe',
      text: `Thank you Extramile Africa for making it easy for me to save money for things I want to buy. 
      It's such a great feeling to know that I can have what I want without breaking the bank. It's also amazing that I got 20% cashback on the amount I saved and still able to buy what I needed. Thank You Extramile`,
    },
    {
      id: 6,
      avatar: avatar9,
      name: 'Ifeanyichukwu Abodunrin',
      username: '@ifearin',
      text: `Save Now, Buy Later has helped me make smarter financial decisions and prioritize my spending." 
      It's a great service that has helped me save money and reduce my stress about finances. 
      Thank you for providing this excellent service!`,
    },
  ],
  [
    {
      id: 7,
      avatar: avatar9,
      name: 'Temitope Chibuike',
      username: '@temitike ',
      text: `I appreciate how Extramile provided me with all the tools I needed to promote their product, including banners, text links, and email templates. 
      This made it easy for me to promote the product and earn commissions.`,
    },
    {
      id: 8,
      avatar: avatar9,
      name: 'Olumide Oyebola',
      username: '@olumiola',
      text: `Overall, I highly recommend Closer by Extramile Africa to anyone looking to earn money through referrals. The company behind the program is highly supportive and knowledgeable, and they provide all the resources you need to succeed. 
      I look forward to continuing my partnership with them in the future.`,
    },
  ],
  [
    {
      id: 9,
      avatar: avatar9,
      name: 'Simisola Sulaimon',
      username: '@simismon',
      text: `I appreciate how the team took the time to understand my business needs and provided me with tailored solutions that addressed my specific challenges through ExtraBusiness Support. 
      They were always available to answer any questions I had and provided me with valuable insights and guidance that helped me make better decisions for my business.`,
    },
    {
      id: 10,
      avatar: avatar9,
      name: 'Damilare Ayisat ',
      username: '@damilasat',
      text: `I recently enrolled in an online course and I must say that I am thoroughly impressed with the experience. The course was well-structured and easy to follow, and the instructors were highly knowledgeable and engaging.`,
    },
  ],
  [
    {
      id: 11,
      avatar: avatar9,
      name: 'Jadesola Ayobami',
      username: '@jade',
      text: `I appreciated how the course provided me with all the resources I needed to succeed, including video lectures, course materials, 
      and interactive assignments. The instructors were always available to answer any questions I had and provided me with valuable feedback that helped me improve my digital skills.`,
    },
    {
      id: 12,
      avatar: avatar9,
      name: 'Augustina Israel',
      username: '@augustael',
      text: `I appreciated how the investment opportunity provided me with a chance to earn attractive returns while supporting a company that aligns with my values and beliefs. 
      The team was always available to answer any questions I had and provided me with valuable insights and guidance on the investment process.`,
    },
  ],
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What the customer says about us"
          description="customer testimonial"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
