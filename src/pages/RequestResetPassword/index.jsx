import React from "react";
import lock from "../../assets/images/lock.png";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import "./index.css";
export default function RequestResetPassword() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container container-rrp text-center ">
        <div className="rrp ">
          <img
            src={logo}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
            className="logo-rrp "
          />
          <p className="text-rrp">
            Request to Reset Your Account <br /> Password
          </p>
          <img src={lock} alt="" className="lock-rrp" />
          <p className="desc-rrp">
            Check Your Email For Confirm Reset Password
          </p>

          <footer className="footer-rrp"></footer>
        </div>
      </div>
    </div>
  );
}
