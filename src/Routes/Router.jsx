import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Registration/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../components/AllUsers/AllUsers";
import AddProduct from "../components/AddProduct/AddProduct";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element: <Home></Home>
        },
        {
            path : "/products",
            element: <Products></Products>
        },
        {
            path : "/about",
            element: <About></About>
        },
        {
            path : "/contact",
            element: <Contact></Contact>
        },
        {
            path : "/login",
            element: <Login></Login>
        },
        {
            path : "/signup",
            element: <SignUp></SignUp>
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: 'allUsers',
              element: <AllUsers></AllUsers>
            },
            {
              path: 'addProduct',
              element: <AddProduct></AddProduct>
            },
            
            
          ]
        },
       
        
      ]
    },
  ]);