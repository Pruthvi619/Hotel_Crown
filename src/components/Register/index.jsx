import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";

import AuthService from "./../../services/auth.service";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    setMessage("");
    setSuccessful(false);

    AuthService.register(data.username, data.email, data.password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  return (
    <>
      <Header />
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          {!successful && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className={`form-control ${errors.username ? "is-invalid" : ""}`}
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Username must be less than 20 characters",
                    },
                  })}
                />
                {errors.username && (
                  <div className="invalid-feedback d-block">
                    {errors.username.message}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => isEmail(value) || "Invalid email address",
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback d-block">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 40,
                      message: "Password must be less than 40 characters",
                    },
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback d-block">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </form>
          )}

          {message && (
            <div className="form-group">
              <div
                className={successful ? "alert alert-success" : "alert alert-danger"}
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
