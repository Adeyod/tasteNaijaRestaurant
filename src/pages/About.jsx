import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'keyframes',
          duration: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw' });
    }
  }, [inView]);

  // const pVariant = {
  //   hidden: {
  //     x: '-100vw',
  //   },
  //   visible: {
  //     x: 0,
  //     transition: { duration: 2 },
  //   },
  // };

  return (
    <div className="">
      <div className="p-10 md:p-20">
        <img
          src="../../images/noBgSiteLogo.png"
          alt="kol"
          className="flex m-auto w-72 items-center text-center"
        />
        <p className="text-primary text-4xl text-center my-10 font-bold">
          About Us
        </p>
        <p className="text-2xl font-bold mb-10 space-y-16">
          Taste Naija is one of the leading Food Restaurant brands in Nigeria.
          We have established our brand to be one of the most popular brands in
          the food industry. We have more than 20 stores across the length and
          breath of the country.
        </p>
        <p>
          Taste Naija caters to the needs of all its esteemed customers and
          their satisfaction is our main goal as this will ensure that you keep
          patronizing us. Our unique menu consist majorly of all Nigeria foods
          and recipes and we also serve our guest continental dishes. Items on
          our menu can also be found on dining tables in other African
          countries. We serve fresh, hot, and mouth-watering meals, pastries,
          sandwiches, and beverages to thousands of customers in a serene
          environment daily.
        </p>
        <p>
          Our dream at Taste Naija is to ensure that we bring our outlets to
          your doorstep so that you can enjoy the delicious recipes that Africa
          has to offer the world at large.
        </p>
      </div>
      <div ref={ref} className="md:flex items-center justify-between">
        <motion.div
          animate={animation}
          className="flex justify-center p-10 md:w-1/2 items-center "
        >
          <img
            src="../../images/hotelImage1.jpg"
            alt="restaurant-logo"
            className="w-[70vw] md:w-[45vw] h-[50%] items-center"
          />
        </motion.div>

        <div className="md:pl-15 md:pr-5 md:w-1/2 px-10 ml-10 border-l-2 border-primary h-[100%]">
          <div class=" "></div>
          <h2 className="mb-4 text-2xl italic font-bold">
            Company's Objectives
          </h2>
          <ul>
            <li className="mb-3">
              <span className="font-bold mr-2">1.</span>At Taste Naija
              Restaurant, our core objective is to celebrate the rich and
              diverse flavors of Nigerian cuisine, offering a delightful
              culinary journey that showcases the country's cultural heritage.
            </li>

            <li className="mb-3">
              <span className="font-bold mr-2">2.</span>To identify the needs of
              target markets
            </li>

            <li className="mb-3">
              <span className="font-bold mr-2">3.</span>
              To produce quality meals and services of excellent standards, that
              would exceed the identified needs
            </li>

            <li className="mb-3">
              <span className="font-bold mr-2">4.</span>
              To carry out goal directed activities that would enable her become
              a global household name
            </li>

            <li className="mb-3">
              <span className="font-bold mr-2">5.</span>
              To continually add value to lives by nourishing a community
              through home cooked traditional meals that exceed expectation and
              promote tourism
            </li>
          </ul>
        </div>
      </div>

      <div className="md:flex items-center justify-between">
        <motion.div
          initial={{ x: -100 }}
          animate={{
            x: 0,
            transition: { duration: 2 },
          }}
          className="md:pl-15 md:pr-5 md:w-1/2 px-10 ml-10 border-l-2 border-primary h-[100%]"
        >
          <div class=" "></div>
          <h2 className="mb-4 text-2xl italic font-bold">
            Our Vision & Mission Statement
          </h2>
          <div className="container">
            <p className="heading">Our Vision</p>
            <p>
              Bringing the vibrant flavors of Nigeria to the world, Taste Naija
              Restaurant strives to be the global destination for authentic and
              unforgettable culinary experiences.
            </p>
            <p className="heading">Our Mission Statement</p>
            <p className="mb-5">
              <span className="sub-head1">
                Celebrate Nigeria's Culinary Heritage:
              </span>
              Our mission is to showcase the richness and diversity of Nigerian
              cuisine, offering an authentic and delightful dining experience
              that honors the country's culinary traditions.
            </p>

            <p className="mb-5">
              <span className="sub-head1"> Deliver Exquisite Flavors: </span> We
              are committed to crafting delectable dishes using the finest
              ingredients and traditional spices, ensuring that every bite at
              Taste Naija Restaurant is a journey of taste and satisfaction.
            </p>

            <p>
              <span className="sub-head1">Create Lasting Memories:</span> Our
              ultimate goal is to provide exceptional service and a welcoming
              ambiance, leaving our guests with cherished memories and a desire
              to return for more delightful experiences of Nigeria's vibrant
              flavors.
            </p>
          </div>
        </motion.div>

        <motion.div className="flex justify-center p-10 md:w-1/2 items-center ">
          <img
            src="../../images/hotelImage1.jpg"
            alt="restaurant-logo"
            className="w-[70vw] md:w-[45vw] h-[50%] items-center"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
