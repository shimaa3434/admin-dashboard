import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Navbar from './compenents/Navbar/Navbar';
import Footer from './compenents/footer/Footer';
import SideBar from './compenents/sideBar/SideBar';
import Login from './pages/login/Login';
import User from './pages/user/User';
import Product from './pages/product/Product';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <SideBar />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  
  return (
    <RouterProvider router={router}/>
   
  );
}

export default App;
