import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/esm/Badge";

const Product = (props) => {
  const { product, handleIncrement, handleDecrement, handleDelete } = props;

  const getBadgeVariant = () => {
    if (product.count > 5) return "dark";
    if (product.count > 0) return "info";
    return "warning";
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="text-start mb-3 mb-md-0">
          <h5 className="mb-1 text-primary">{product.name}</h5>
          <p className="mb-0 text-muted">Price: {product.price} EGP</p>
        </div>

        <div className="d-flex align-items-center flex-wrap">
          <Badge bg={getBadgeVariant()} className="me-2">
            {product.count}
          </Badge>

          <button
            onClick={() => handleIncrement(product.id)}
            className="btn btn-success btn-sm me-1"
          >
            +
          </button>

          <button
            onClick={() => handleDecrement(product.id)}
            className="btn btn-warning btn-sm me-1"
          >
            -
          </button>

          <button
            onClick={() => handleDelete(product.id)}
            className="btn btn-danger btn-sm"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
