import React, { useState } from "react";
import Joi, { log } from "joi-browser";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  const validate = () => {
    const errors = {};
    const res = Joi.validate({ name, email, password }, schema, {
      abortEarly: false,
    });
    if (res.error == null) {
      setErrors({});
      return null;
    }

    for (const err of res.error.details) {
      errors[err.path] = err.message;
    }

    setErrors({ ...errors });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert("Signed up");
    }
  };

  return (
    <div className="own-container d-flex align-items-center justify-content-center bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "450px", borderRadius: "16px" }}
      >
        <h3 className="text-center mb-4 text-primary">create new account</h3>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="write full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {errors.name && (
              <div className="alert alert-danger text-center py-2">
                {errors.name}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="alert alert-danger text-center py-2">
                {errors.email}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="alert alert-danger text-center py-2">
                {errors.password}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="form-label">Password confirmation</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
