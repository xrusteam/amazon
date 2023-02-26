import React from 'react';
import {
  AccountCircle,
  Menu,
  Close,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import SidebarContent from './SidebarContent';

const HeaderBottom = () => {
  const [sidebar, setSidebar] =
    React.useState(false);
  const motionRef = React.useRef();
  React.useEffect(() => {
    document.body.addEventListener(
      'click',
      (e) => {
        if (
          e.target.contains(motionRef.current)
        ) {
          setSidebar(false);
        }
      }
    );
  }, [motionRef, sidebar]);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-1"
        >
          <Menu /> All
        </li>
        <li className="headerHover hidden md:inline-flex">
          Today`s Deals
        </li>
        <li className="headerHover hidden md:inline-flex">
          Customer Service
        </li>
        <li className="headerHover hidden md:inline-flex">
          Gift Cards
        </li>
        <li className="headerHover hidden md:inline-flex">
          Registry
        </li>
        <li className="headerHover hidden md:inline-flex">
          Sell
        </li>
      </ul>
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              ref={motionRef}
              className="w-[80%] md:w-[350px] h-full bg-white border border-black"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <AccountCircle />
                <h3>Hello, Sign In</h3>
              </div>
              <SidebarContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SidebarContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SidebarContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SidebarContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span className="cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
                <Close
                  onClick={() =>
                    setSidebar(false)
                  }
                />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
