import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@mui/icons-material';
import { darkLogo } from '../assets/index';

const Registration = () => {
  const [clientName, setClientName] =
    React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] =
    React.useState('');
  const [cPassword, setCPassword] =
    React.useState('');
  const [errClientName, setErrClientName] =
    React.useState('');
  const [errEmail, setErrEmail] =
    React.useState('');
  const [errPassword, setErrPassword] =
    React.useState('');
  const [errCPassword, setErrCPassword] =
    React.useState('');

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
      );
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName('Enter your name');
    }
    if (!email) {
      setErrEmail('Enter your email');
    } else {
      if (!emailValidation(email)) {
        setErrEmail('Enter a valid email');
      }
    }
    if (!password) {
      setErrPassword('Enter your password');
    } else {
      if (password.length < 6) {
        setErrPassword(
          'Password must be at least 6 characters'
        );
      }
    }
    if (!cPassword) {
      setErrCPassword('Confirm your password');
    } else {
      if (cPassword !== password) {
        setErrCPassword('Password not matched');
      }
    }

    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      setCPassword('');
      setClientName('');
      setEmail('');
      setPassword('');
    }
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName('');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail('');
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword('');
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword('');
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form
          onSubmit={handleRegistration}
          className="w-[370px] mx-auto flex items-center flex-col"
        >
          <img
            src={darkLogo}
            alt="logo"
            className="w-32 h-26"
          />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4 text-black">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-xm font-medium">
                  Your Name
                </p>
                <input
                  value={clientName}
                  onChange={handleName}
                  type="text"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errClientName && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont text-base font-extrabold">
                      !
                    </span>{' '}
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
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
                  value={password}
                  onChange={handlePassword}
                  type="password"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
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
              <div className="flex flex-col gap-2">
                <p className="text-xm font-medium">
                  Re-enter password
                </p>
                <input
                  value={cPassword}
                  onChange={handleCPassword}
                  type="password"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errCPassword && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont text-base font-extrabold">
                      !
                    </span>{' '}
                    {errCPassword}
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
              By creating an account, you agree to
              Amazon's{' '}
              <span className="text-blue-600">
                Condition of Use
              </span>{' '}
              and{' '}
              <span className="text-blue-600">
                Privace Notice.
              </span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
              <span className="text-xs text-black mr-1">
                Already have an account?
              </span>
              <Link to="/signin">
                <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                  Sign in
                </span>
              </Link>
              <ArrowRight className="text-blue-600" />
            </p>
            <p className="text-xs text-gray-600 -mt-2 cursor-pointer group">
              <span className="text-xs text-black mr-1">
                Buying for work?
              </span>
              <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                Create a free business account
              </span>
              <ArrowRight className="text-blue-600" />
            </p>
          </div>
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

export default Registration;
