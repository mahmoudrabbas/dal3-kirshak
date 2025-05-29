import React, { useState } from "react";
import "./app.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../layout/rootLayout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Error from "../pages/error";
import DashboardLayout from "../layout/dashboardLayout";
import Dashboard from "./dashboard";
import Posts from "./posts";
import Users from "./users";
import Post from "./post";
import PostPageDefault from "./postPageDefault";
import ProtectedRoute from "./ProtectedRoute";
import Menu from "./menu";
import ShoppingCart from "./shoppingCart";
import PaymentOptions from "./payment";
import Login from "./login";
import Register from "./../pages/register";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Burger", price: 50, count: 1, isInCart: false },
    { id: 2, name: "Chips", price: 30, count: 1, isInCart: false },
    { id: 3, name: "Fries", price: 25, count: 1, isInCart: false },
    { id: 4, name: "Pizza", price: 40, count: 1, isInCart: false },
  ]);

  const handleAddToCar = (id) => {
    const clonedProducts = products.map((p) =>
      p.id === id ? { ...p, isInCart: !p.isInCart } : p
    );
    setProducts(clonedProducts);
  };

  const handleIncrement = (id) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p))
    );
  };

  const handleDecrement = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, count: p.count === 0 ? p.count : p.count - 1 } : p
      )
    );
  };

  const handleDelete = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isInCart: false } : p))
    );
  };

  const handleRest = () => {
    setProducts((prev) =>
      prev.map((p) => (p.isInCart ? { ...p, count: 0 } : p))
    );
  };

  const handleRemoveAll = () => {
    setProducts((prev) =>
      prev.map((p) => (p.isInCart ? { ...p, isInCart: false } : p))
    );
  };

  // const user = null;
  const user = { name: "Mahmoud abbas" };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout products={products} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="payment" element={<PaymentOptions />} />
        <Route
          path="cart"
          element={
            <ShoppingCart
              products={products.filter((p) => p.isInCart)}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
              handleRest={handleRest}
              handleRemoveAll={handleRemoveAll}
            />
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route
          path="menu"
          element={<Menu handleAddToCar={handleAddToCar} products={products} />}
        />
        <Route path="*" element={<Error />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<Posts />}>
            <Route index element={<PostPageDefault />} />
            <Route path="post" element={<Post />} />
            <Route path="post/:id?/:name?" element={<Post />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route />
        </Route>
      </Route>
    )
  );

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
