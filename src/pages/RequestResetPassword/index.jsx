import React from "react";
import lock from "../../assets/images/lock.png";
import logo from "../../assets/images/logo.png";
import "./index.css";
export default function RequestResetPassword() {
  return (
    <div>
      <div className="container container-rrp text-center ">
        <div className="rrp ">
          <img src={logo} alt="" className="logo-rrp " />
          <p className="text-rrp">
            Request to Reset Your Account <br /> Password
          </p>
          <img src={lock} alt="" className="lock-rrp" />
          <p className="desc-rrp">
            The following is the button for you to reset the password.
          </p>
          <button
            type="button"
            className="btn btn-warning text-white w-50 mb-4"
          >
            Reset
          </button>
          <footer className="footer-rrp"></footer>
        </div>
      </div>
    </div>
  );
}