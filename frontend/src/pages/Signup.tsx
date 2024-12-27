import React from "react";
import Quote from "../components/Quote";
import Auth from "../components/Auth";

const Signup = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-full">
        <Auth type="signup" />
      </div>
      <div className="w-full hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signup;
