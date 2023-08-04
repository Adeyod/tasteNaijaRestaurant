import React, { useEffect } from 'react';
import { foodByCategory, foodImages } from '../components/Images';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  margin: '5px',
  borderRadius: '20px',
  border: '4px solid red',
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.011,
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log('use Effect hook, inView', inView);

    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
      });
    }
  });
  return (
    <div className="">
      <img
        src="../../images/noBgSiteLogo.png"
        alt="kol"
        className="flex m-auto w-72 items-center text-center"
      />

      <div className="slide-container p-3">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {foodImages.map(({ id, name, link }) => (
            <div className="m-2" key={id}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${link}
                  )`,
                }}
              >
                <span style={spanStyle}>{name}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <p className="m-10 md:m-44 text-2xl italic">
        Welcome to TASTE NAIJA RESTAURANT, this is the place where we sell
        delicious Nigeria and Africa dishes. We always ensure that you enjoy
        every bit of our meal so that you will keep on asking for more. We work
        hard to ensure that we earn customers' trust.
      </p>

      <div className="flex flex-wrap justify-evenly">
        {foodByCategory.map((item) => (
          <div>
            <p className="text-center text-primary text-2xl uppercase font-bold underline">
              Meals
            </p>
            <div
              ref={ref}
              className="flex flex-wrap justify-evenly shadow-inner"
            >
              {item.meals.slice(0, 5).map((item) => (
                <motion.div
                  animate={animation}
                  className="border-2 h-[250px] w-1/3 md:w-1/3 lg:w-1/4 m-3 gap-3 p-2 mb-3"
                >
                  <img
                    src={item.link}
                    alt="mealImage"
                    className="h-[70%] md:h-[80%] w-full rounded-md active:scale-75 cursor-pointer"
                  />
                  <div className="text-primary flex flex-col md:items-center font-bold">
                    <p>{item.name}</p>
                    <p>#{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mb-5">
          <button
            className="bg-gray-400 rounded-lg text-white font-bold p-3"
            onClick={() => navigate(`/menu/${'#meals'}`)}
          >
            Explore More Meals
          </button>
        </div>
      </div>

      <div>
        {foodByCategory.map((item) => (
          <div className="my-20">
            <p className="text-center text-primary text-2xl uppercase font-bold underline">
              Drinks
            </p>
            <div className="border border-solid shadow-2xl flex flex-wrap justify-evenly">
              {item.drinks.slice(0, 5).map((item) => (
                <div className=" h-[200px] pb-6 w-1/3 md:w-1/3 lg:w-1/3 m-3 gap-3 p-2 mb-3 border-r-4 rounded-lg border-l-4 border-b-4 border-primary">
                  <img
                    src={item.link}
                    alt="mealImage"
                    className="h-[70%] w-full md:px-20 rounded-md hover:scale-110 transition duration-500 active:scale-150 cursor-pointer"
                  />
                  <div className="text-black flex flex-col md:text-xl justify-center ">
                    <p className="">{item.name}</p>
                    <p className=" font-bold">#{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mb-5">
              <button
                className="bg-gray-400 rounded-lg text-white font-bold p-3"
                onClick={() => navigate(`/menu/${'#drinks'}`)}
              >
                Explore More drinks
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        {foodByCategory.map((item) => (
          <div className="mb-10">
            <p className="text-center text-primary text-2xl uppercase font-bold underline">
              Swallow
            </p>
            <div className="flex flex-wrap justify-evenly">
              {item.swallow.slice(0, 5).map((item) => (
                <div className="border-2 h-[250px] w-1/3 md:w-1/3 lg:w-1/4 m-3 gap-3 p-2 mb-3">
                  <img
                    src={item.link}
                    alt="mealImage"
                    className="h-[70%] hover:scale-110 active:scale-90 w-full rounded-md hover:scale transition duration-500 cursor-pointer"
                  />
                  <div className="text-primary flex flex-col md:items-center font-bold">
                    <p>{item.name}</p>
                    <p>#{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center mb-5">
          <button
            className="bg-gray-400 rounded-lg text-white font-bold p-3"
            onClick={() => navigate(`/menu/${'#swallow'}`)}
          >
            Explore More Swallow
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {foodByCategory.map((item) => (
          <div>
            <p className="text-center text-primary text-2xl uppercase font-bold underline">
              pasteries
            </p>
            <div className="border border-solid shadow-2xl flex flex-wrap justify-evenly">
              {item.pasteries.slice(0, 5).map((item) => (
                <motion.div
                  className=" h-[250px] w-1/3 md:w-1/3 lg:w-1/4 m-3 gap-3 p-2 mb-3 border-green-300 border-r-4 rounded-lg border-l-4 border-b-4"
                  initial={{ x: '-100vw' }}
                  animate={{
                    x: 0,
                    transition: { duration: 2 },
                  }}
                >
                  <img
                    src={item.link}
                    alt="mealImage"
                    className="h-[65%] active:scale-50 cursor-pointer w-full rounded-md"
                  />
                  <div className="text-black flex flex-col justify-center font-bold">
                    <p className="text-xl">{item.name}</p>
                    <p className="font-bold">#{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <button
            className="bg-gray-400 rounded-lg text-white font-bold p-3"
            onClick={() => navigate(`/menu/${'#pasteries'}`)}
          >
            Explore More Pasteries
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
