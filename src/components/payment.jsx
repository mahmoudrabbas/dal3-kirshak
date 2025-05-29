import React, { useState } from "react";

const PaymentOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Paied: ${paymentMethod}`);
  };

  return (
    <form onSubmit={handleSubmit} className="container own-container mt-4">
      <h4 className="mb-4">Payment Way:</h4>

      <div className="row g-3">
        <div className="col-md-4">
          <label
            className="card p-3 d-flex align-items-center gap-3"
            htmlFor="cash"
          >
            <input
              type="radio"
              name="payment"
              value="cash"
              id="cash"
              onChange={handleChange}
              checked={paymentMethod === "cash"}
              className="form-check-input"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
              alt="Cash"
              width="40"
              height="40"
            />
            <span className="fw-bold">Cash On Delivery</span>
          </label>
        </div>

        <div className="col-md-4">
          <label
            className="card p-3 d-flex align-items-center gap-3"
            htmlFor="visa"
          >
            <input
              type="radio"
              name="payment"
              value="visa"
              id="visa"
              onChange={handleChange}
              checked={paymentMethod === "visa"}
              className="form-check-input"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              alt="Visa"
              width="40"
              height="40"
            />
            <span className="fw-bold">Visa / MasterCard</span>
          </label>
        </div>

        <div className="col-md-4">
          <label
            className="card p-3 d-flex align-items-center gap-3"
            htmlFor="vodafone"
          >
            <input
              type="radio"
              name="payment"
              value="vodafone"
              id="vodafone"
              onChange={handleChange}
              checked={paymentMethod === "vodafone"}
              className="form-check-input"
            />
            <img
              src="https://cdn.prod.website-files.com/64c7f4cbdcc768b8275308ea/65a7a1ee0fb200379b7133e3_New%20Vodafone%20payment%20method.png"
              alt="Vodafone"
              width="40"
              height="40"
            />
            <span className="fw-bold">Vodafone Cash</span>
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-success mt-4">
        Pay
      </button>
    </form>
  );
};

export default PaymentOptions;
