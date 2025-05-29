import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ products, handleAddToCar }) => {
  return (
    <div className="own-container container py-5">
      <h2 className="text-center text-primary mb-4">Our Delicious Menu</h2>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-dark">{product.name}</h5>
                  <p className="card-text text-muted mb-3">
                    Price:{" "}
                    <strong className="text-success">
                      {product.price} EGP
                    </strong>
                  </p>
                  <button
                    className={`btn ${
                      product.isInCart ? "btn-dark" : "btn-outline-primary"
                    }`}
                    onClick={() => handleAddToCar(product.id)}
                  >
                    <FontAwesomeIcon
                      icon={product.isInCart ? faCartShopping : faCartPlus}
                      className="me-2"
                    />
                    {product.isInCart ? "Cancel" : "Order"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col text-center text-muted">
            <p>No items available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
