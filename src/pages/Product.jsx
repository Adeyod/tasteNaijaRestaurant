import React from 'react';
import { foodByCategory } from '../components/Images';

const Product = () => {
  return (
    <div>
      <img
        src="../../images/noBgSiteLogo.png"
        alt="kol"
        className="flex m-auto w-72 items-center text-center"
      />
      {foodByCategory.map((item) => (
        <div>
          {item.meals.map((item) => (
            <div>
              <img src={item.link} alt="mealImage" />
              <p>{item.name}</p>
              <p>{item.price}</p>

              <button>ADD TO CART</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Product;
