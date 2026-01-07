import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function App() {
  const [page, setPage] = useState("login-phone");

  // Login
  const [phone, setPhone] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ================= SUBMIT HANDLERS =================
  const submitPhoneLogin = () => {
    console.log("PHONE LOGIN DATA 👉", { phone });
  };

  const submitEmailLogin = () => {
    console.log("EMAIL LOGIN DATA 👉", {
      email: loginEmail,
      password: loginPassword,
    });
  };

  const submitSignup = () => {
    console.log("SIGNUP DATA 👉", {
      name,
      email,
      password,
      phone,
    });
  };

  // ================= BUTTON ACTIVE CHECK =================
  const phoneValid = phone.length === 10;
  const emailLoginValid = loginEmail && loginPassword;
  const signupValid = name && email && password && phone.length === 10;

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center bg-light">
      {/* LOGO */}
      <div className="my-4 text-center">
        <h1 className="fw-bold text-primary">W</h1>
        <small className="text-muted">WebVeda</small>
      </div>

      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: 420 }}>

        {/* ================= LOGIN WITH PHONE ================= */}
        {page === "login-phone" && (
          <>
            <h4 className="mb-3">Log in to WebVeda</h4>
            <label className="mb-2">Enter your phone number</label>

            <div className="input-group mb-3">
              <span className="input-group-text">🇮🇳 +91</span>
              <input
                className="form-control"
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
              />
            </div>

            <button
              className={`btn w-100 mb-3 ${
                phoneValid ? "btn-primary" : "btn-secondary"
              }`}
              disabled={!phoneValid}
              onClick={submitPhoneLogin}
            >
              Next
            </button>

            <div className="d-flex gap-3 mb-3">
              <button className="btn btn-outline-secondary w-50">
                <FaGoogle />
              </button>
              <button
                className="btn btn-outline-secondary w-50"
                onClick={() => setPage("login-email")}
              >
                <FaEnvelope />
              </button>
            </div>

            <p className="text-center">
              Don’t have an account?{" "}
              <span
                className="fw-bold text-primary"
                role="button"
                onClick={() => setPage("signup")}
              >
                Sign up
              </span>
            </p>
          </>
        )}

        {/* ================= LOGIN WITH EMAIL ================= */}
        {page === "login-email" && (
          <>
            <button
              className="btn btn-link p-0 mb-2"
              onClick={() => setPage("login-phone")}
            >
              <FaArrowLeft />
            </button>

            <h4 className="mb-3">Log in to WebVeda</h4>

            <input
              className="form-control mb-3"
              placeholder="Email address"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <input
              className="form-control mb-2"
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <p className="text-end small text-primary mb-3" role="button">
              Forgot password
            </p>

            <button
              className={`btn w-100 ${
                emailLoginValid ? "btn-primary" : "btn-secondary"
              }`}
              disabled={!emailLoginValid}
              onClick={submitEmailLogin}
            >
              Next
            </button>
          </>
        )}

        {/* ================= SIGN UP ================= */}
        {page === "signup" && (
          <>
            <h4 className="mb-3">Create an account</h4>

            <input
              className="form-control mb-2"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="form-control mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="input-group mb-3">
              <span className="input-group-text">🇮🇳 +91</span>
              <input
                className="form-control"
                placeholder="Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={10}
              />
            </div>

            <button
              className={`btn w-100 mb-3 ${
                signupValid ? "btn-primary" : "btn-secondary"
              }`}
              disabled={!signupValid}
              onClick={submitSignup}
            >
              Next
            </button>

            <div className="text-center text-muted mb-2">OR</div>

            <button className="btn btn-outline-dark w-100 mb-3">
              <FaGoogle className="me-2" />
              Continue with Google
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <span
                className="fw-bold text-primary"
                role="button"
                onClick={() => setPage("login-phone")}
              >
                Log in
              </span>
            </p>

            <p className="text-center small text-muted">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>

            <p className="text-center small fw-bold">
              Unable to Login? We are here – <br />
              support@webveda.com
            </p>
          </>
        )}
      </div>
    </div>
  );
}
