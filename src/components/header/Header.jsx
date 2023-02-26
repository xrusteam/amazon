import React from 'react';
import HeaderBottom from './HeaderBottom';
import {
  LocationOnOutlined,
  ArrowDropDownOutlined,
  ShoppingCart,
  Search,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { allItems } from '../../constants';
import { logo } from '../../assets/index';
import { useSelector } from 'react-redux';

const Header = () => {
  const [showAll, setShowAll] =
    React.useState(false);
  const products = useSelector(
    (state) => state.amazon.products
  );

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="text-white w-full px-4 py-3 bg-amazon_blue flex items-center gap-4">
        <Link to="/home">
          <div className="flex items-center headerHover">
            <img
              className="w-24 mt-2"
              src={logo}
              alt="logo"
            />
          </div>
        </Link>
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnOutlined />
          <p className="text-sm text-lightText font-light">
            Delivery to{' '}
            <span className="text-sm font-semibold -mt-1 text-whiteText flex flex-col">
              Kazan
            </span>
          </p>
        </div>
        <div className="h-10 hidden lgl:flex flex-grow rounded-md relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All
            <ArrowDropDownOutlined />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-2 z-50">
                {allItems.map((item) => (
                  <li
                    key={item._id}
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            className="h-full text-base text-amazon_blue flex-grow border-none outline-none px-2"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md">
            <Search />
          </span>
        </div>
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
              Hello, sign-in
            </p>
            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists{' '}
              <span>
                <ArrowDropDownOutlined />
              </span>
            </p>
          </div>
        </Link>
        <div className="hidden lgl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">
            Returns
          </p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">
            & Orders
          </p>
        </div>
        <Link to="/cart">
          <div className="flex flex-col items-start justify-center headerHover relative">
            <ShoppingCart />
            <p className="text-xs font-semibold text-whiteText">
              Cart{' '}
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length}
              </span>
            </p>
          </div>
        </Link>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
