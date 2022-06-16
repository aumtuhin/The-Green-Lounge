import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./signin.signup.syles.scss";

const SigninSignup = () => {
  return (
    <div className="auth-page container">
      <div className="row">
        <div className="col-md-6">
          <SignIn />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SigninSignup;
