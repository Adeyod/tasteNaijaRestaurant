import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { foodByCategory, foodImages } from '../components/Images';
import { Product } from './Product';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Menu = () => {
  const { ref, inView } = useInView({ threshold: 0.011 });
  const animation = useAnimation();

  const pasteriesVariant = {
    hidden: {
      x: -100,
    },
    visible: {
      x: 0,
      transition: { duration: 2 },
    },
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: { duration: 2 },
      });
    }
    if (!inView) {
      animation.start({
        x: '-50vw',
      });
    }
  });

  return (
    <div>
      <img
        src="../../images/noBgSiteLogo.png"
        alt="kol"
        className="flex m-auto w-72 items-center text-center"
      />

      <div className="flex flex-wrap justify-evenly">
        {foodByCategory.map((item) => (
          <div className="meals">
            <p className="text-center text-primary text-2xl uppercase font-bold underline">
              Meals
            </p>
            <div
              ref={ref}
              className="flex flex-wrap justify-evenly shadow-inner"
            >
              {item.meals.map((item) => (
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
      </div>

      <div>
        {foodByCategory.map((item) => (
          <div className="my-20" id="drinks">
            <p className="text-center text-primary text-2xl uppercase font-bold underline">
              Drinks
            </p>
            <div className="border border-solid shadow-2xl flex flex-wrap justify-evenly">
              {item.drinks.map((item) => (
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
          </div>
        ))}
      </div>

      <div>
        {foodByCategory.map((item) => (
          <div className="mb-10" id="swallow">
            <p className="text-center text-primary text-2xl uppercase font-bold underline">
              Swallow
            </p>
            <div className="flex flex-wrap justify-evenly">
              {item.swallow.map((item) => (
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
      </div>

      <div id="pasteries">
        {foodByCategory.map((item) => (
          <div>
            <p className="text-center text-primary text-2xl uppercase font-bold underline">
              pasteries
            </p>
            <div className="border border-solid shadow-2xl flex flex-wrap justify-evenly">
              {item.pasteries.map((item) => (
                <motion.div
                  className="h-[250px] w-1/3 md:w-1/3 lg:w-1/3 m-3 gap-3 p-2 mb-3 border-r-4 rounded-lg border-l-4 border-b-4 border-primary"
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
      </div>
    </div>
  );
};

export default Menu;
