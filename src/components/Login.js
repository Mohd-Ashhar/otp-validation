import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Logo from "../assets/logo-img.jpg";

const Login = () => {
  return (
    <>
      <div>
        <div className="">
          <img className=" mb-15" src={Logo} alt="logo-img" />
        </div>
        <div className="p-4 box text-center">
          <h2 className="mb-3">Welcome Back</h2>
          <p>Please sign in to your account</p>

          <Link to="/phonesignup">
            <div className="d-grid gap-2 mt-5">
              <Button variant="warning" type="Submit">
                Sign in with Phone
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
