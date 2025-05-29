import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      alert("Signed");
    }
  };

  const validate = () => {
    const errs = {};
    if (email.trim() === "") {
      errs.email = "Email is required";
    }
    if (password.trim() === "") {
      errs.password = "Password is required";
    }

    return errs;
  };

  return (
    <div className="d-flex align-items-center own-container justify-content-center  bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "16px" }}
      >
        <h3 className="text-center mb-4 text-primary">Sign in</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && (
            <div className="alert alert-danger text-center py-2">
              {errors.email}
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="alert alert-danger text-center py-2">
                {errors.password}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
