import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@mui/icons-material';
import { darkLogo } from '../assets/index';

const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] =
    React.useState('');
  const [errEmail, setErrEmail] =
    React.useState('');
  const [errPassword, setErrPassword] =
    React.useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail('');
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword('');
  };

  const onLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail('Enter your email');
    }
    if (!password) {
      setErrPassword('Enter your password');
    }

    if (email && password) {
      console.log(email, password);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form
          onSubmit={onLogin}
          className="w-[350px] mx-auto flex items-center flex-col"
        >
          <img
            src={darkLogo}
            alt="logo"
            className="w-32 h-26"
          />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4 text-[#e77600]">
              Sign in
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <p className="text-xm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errEmail && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont text-base font-extrabold">
                      !
                    </span>{' '}
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xm font-medium">
                  Password
                </p>
                <input
                  onChange={handlePassword}
                  value={password}
                  type="password"
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errPassword && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont text-base font-extrabold">
                      !
                    </span>{' '}
                    {errPassword}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon's{' '}
              <span className="text-blue-600">
                Privace Notice.
              </span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
              <ArrowRight />
              <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                Need help?
              </span>
            </p>
          </div>
          <div className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">
              New to Amazon?
            </span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </div>
          <Link to="/registration">
            <button className="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Condition of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Condition of Use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
            Condition of Use
          </p>
        </div>
        <p className="text-xs text-gray-600">
          1996-2023, RaectBd.com, Inc. or its
          affiliates
        </p>
      </div>
    </div>
  );
};

export default Signin;
