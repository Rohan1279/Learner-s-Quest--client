import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
// import Hero from "/src/utils/Hero.png";
const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="rounded-lg">
      <div
        className="hero min-h-screen p-5 "
        // style={{ backgroundImage: `/src/utils/Hero.png` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              This is a simple course content webpage with firebsae
              authentication and uses react router dom.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
