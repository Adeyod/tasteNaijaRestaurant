import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="">
      <img
        src="../../images/noBgSiteLogo.png"
        alt="kol"
        className="flex m-auto w-72 items-center text-center"
      />
      <div className="md:flex px-4 items-center justify-evenly">
        <div>
          <p className="underline text-center font-bold text-2xl text-primary">
            LOGIN HERE
          </p>
          <form
            action=""
            className="w-[90%] md:w-[350px] justify-center m-auto"
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                name="password2"
                placeholder="confirm password"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-bold p-2 rounded cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
          <div className="flex flex-wrap whitespace-wrap">
            <p className="mr-1">Don't have an account?</p>
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </div>
        </div>
        <div className="hidden ml-2 lg:flex md:max-w-[500px] h-[100%] items-center">
          <img
            className="w-[70vw] scale-100 h-[75vh] rounded-full"
            src="../../images/chef5.jpg"
            alt="registerLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
