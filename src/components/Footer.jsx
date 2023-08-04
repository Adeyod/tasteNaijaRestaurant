import React from 'react';
import { Socials } from './Socials';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly fixed bottom-0 right-0 left-0 py-10 h-[65px] bg-black items-center z-[999] ">
      <div className="flex gap-2 text-white">
        <p>FAQ</p>
        <p>Terms & Conditions</p>
      </div>

      <div className="text-white">© 2023 Taste Naija Restaurant</div>

      <div className="flex gap-3 text-primary">
        {Socials.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-2xl"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
