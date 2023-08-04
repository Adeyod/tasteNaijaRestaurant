import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success('Message Sent Successfully', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });

            e.target.reset();
          } else {
            toast.error('Something went wrong', {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <div className=" items-center">
      <div className="md:flex px-4 justify-between lg:justify-evenly items-center">
        <div className="hidden md:block">
          <img
            src="../../images/hotelImage1.jpg"
            alt="restaurant-logo"
            className="m-auto w-72"
          />
        </div>
        <div className="">
          <img
            src="../../images/noBgSiteLogo.png"
            alt="siteLogo"
            className="m-auto w-72"
          />
        </div>
        <div className="">
          <img
            src="../../images/hotelImage1.jpg"
            alt="restaurant-logo"
            className="w-72 m-auto"
          />
        </div>
      </div>
      <div className="md:flex justify-between p-4">
        <div className="md:w-1/2 my-11 md:my-0">
          <p className="contact-head text-center">Leave us a message</p>
          <form
            action="https://formsubmit.co/agbamosemark@gmail.com"
            method="post"
            ref={form}
            onSubmit={sendEmail}
            className="w-[90%] md:w-72 items-center justify-center m-auto"
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="phone">Tel</label>
              <input
                type="tel"
                name="user_phone"
                placeholder="Telephone number"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message">Message Here</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
                required
              >
                Message Us
              </textarea>
            </div>

            <button
              type="submit"
              value="send"
              className="bg-primary text-white font-bold p-2 rounded cursor-pointer"
              onClick={toast.success}
            >
              Send Message
            </button>
            <ToastContainer className="text-center italic font-bold text-white rounded-xl  dark:text-white" />
          </form>
        </div>
        <div className="md:w-1/2 flex flex-col pl-20 justify-center border-l-2 border-primary">
          <p className="contact-head">Opening Hours</p>
          <p>Sundays-Saturdays-: 08:00a.m - 7:00p.m</p>
          <p className="sub-head">Head Office</p>
          <p>
            No 10 Taste Naija Avenue, Sapa Quarters, <br /> Town Hall different
            from Bala Blue
          </p>
          <p className="sub-head">Contact Numbers</p>
          <p>+23481-0-014-0124</p>
          <p> +23481-0-014-0124</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
