import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, Signin, Cart, Registration } from './pages';
import { fetchProducts } from './api/fetchApiProducts';


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/home"
            element={<Home />}
            loader={fetchProducts}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Route>
        <Route
          path="/signin"
          element={<Signin />}
        />
        <Route
          path="/registration"
          element={<Registration />}
        />
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
