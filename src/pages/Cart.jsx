import React from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { CheckCircle } from '@mui/icons-material';
import {
  deleteFromCart,
  removeAllElements,
  incQuantity,
  decQuantity,
} from '../redux/amazonSlice';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { emptyCart } from '../assets/index';

const Cart = () => {
  const products = useSelector(
    (state) => state.amazon.products
  );
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] =
    React.useState(0);
  React.useEffect(() => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [products]);
  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length ? (
        <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-3xl font-medium">
                Shopping Cart
              </h2>
              <h4 className="text-xl font-normal">
                Subtitle
              </h4>
            </div>
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
              >
                <div className="w-full flex items-center justify-between gap-6">
                  <div className="w-1/5">
                    <img
                      src={product.image}
                      alt="product"
                      className="w-full h-44 object-contain"
                    />
                  </div>
                  <div className="w-3/5">
                    <h2 className="font-semibold text-lg">
                      {product.title}
                    </h2>
                    <p className="text-sm">
                      {product.description}
                    </p>
                    <p className="text-base">
                      {product.price}$
                    </p>
                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-25 py-1 text-center drop-shadow-lg rounded-md">
                      <p className="mr-1">
                        qty: {product.quantity}
                      </p>
                      <p
                        onClick={() =>
                          dispatch(
                            incQuantity(
                              product.id
                            )
                          )
                        }
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        +
                      </p>
                      <p
                        onClick={() =>
                          dispatch(
                            decQuantity(
                              product.id
                            )
                          )
                        }
                        className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
                      >
                        -
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(
                          deleteFromCart(
                            product.id
                          )
                        )
                      }
                      className="bg-red-500 w-36 py-1 rounded-lg  text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  <div>
                    <p className="text-lg font-titleFont font-semibold">
                      {(
                        product.price *
                        product.quantity
                      ).toFixed(1)}
                      $
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <button
                onClick={() =>
                  dispatch(removeAllElements())
                }
                className="bg-red-500 w-36 py-2 font-titleFont font-semibold tracking-wide rounded-lg text-white my-3 hover:bg-red-700 active:bg-red-900 duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-full h-52 bg-white col-span-1 flex flex-col items-center justify-center p-4">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckCircle className="bg-white text-green-500 rounded-full" />
                </span>
                Your order qualifies for FREE
                Shopping Choose this option at
                checkout. See details
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center justify-between gap-2">
                Total:{' '}
                <span className="text-lg font-bold">
                  {totalPrice.toFixed(2)}$
                </span>
              </p>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              src={emptyCart}
              alt="emptyLogo"
              className="w-80 rounded-lg p-4 mx-auto"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your cart feels lonely.
            </h1>
            <p className="texxt-sm text-center">
              Your shopping cart lives to serve.
              Give it purpose - fill it with
              books. electronics, videos, etc and
              make it happy
            </p>
            <Link to="/home">
              <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
