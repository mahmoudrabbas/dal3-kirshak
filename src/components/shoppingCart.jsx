import React from "react";
import Product from "./product";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingCart = ({
  products,
  handleDecrement,
  handleDelete,
  handleIncrement,
  handleRemoveAll,
  handleRest,
}) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment");
  };

  const totalPrice = products.reduce(
    (total, p) => total + Number(p.price * p.count),
    0
  );

  return (
    <div
      className="own-container d-flex justify-content-center align-items-center bg-light"
      // style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "700px", borderRadius: "16px" }}
      >
        <h4 className="text-center mb-4 text-primary">سلة المشتريات</h4>

        <div className="d-flex justify-content-center flex-wrap mb-3">
          <button onClick={handleRest} className="btn btn-warning btn-sm m-2">
            Reset
          </button>

          <button
            onClick={handleRemoveAll}
            className="btn btn-danger btn-sm m-2"
          >
            Remove Items
          </button>
        </div>

        <div className="mb-3">
          {products.length > 0 ? (
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
                handleDelete={handleDelete}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            ))
          ) : (
            <p className="text-center text-muted">
              لا توجد منتجات حالياً في السلة.
            </p>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center border-top pt-3">
          <p className="m-0 fw-bold">Total Price: {totalPrice} EGP</p>
          <button onClick={handlePayment} className="btn btn-success btn-sm">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
