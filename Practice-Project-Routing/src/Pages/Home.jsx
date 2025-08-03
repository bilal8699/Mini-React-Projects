import React from "react";
import Header from "../comman/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="page" id="home">
        <h2>Smart, Stylish & Affordable</h2>
        <p>
          Welcome to <strong>EcoStore</strong> – your trusted destination for
          high-quality fashion and lifestyle products. We believe shopping
          should be simple, smooth, and smart.
        </p>
        <p>
          Explore exclusive deals on clothing, gadgets, and more. Modern design
          meets daily essentials.
        </p>
      </div>
    </div>
  );
}

export default Home;
