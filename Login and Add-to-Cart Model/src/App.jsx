import { useState } from "react";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="model">
      <header>
        <div className="header-container">
          <div className="logo">
            <h2>
              Shop<span>Easy</span>
            </h2>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="buttons">
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              Login
            </button>
            <button className="cart-btn" onClick={() => setShowCart(true)}>
              Add to Cart
            </button>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <div className="LoginModel">
        <div
          onClick={() => setShowLogin(false)}
          className={`ShowOverlay ${showLogin ? "overlay-showing" : ""}`}
        ></div>
        <div className={`login ${showLogin ? "login-show" : ""}`}>
          <h3>Login</h3>
          <p>Welcome back! Please login to your account.</p>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p className="account">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
          <p>
            <a href="#">Forgot Password?</a>
          </p>
          <button className="close-btn" onClick={() => setShowLogin(false)}>
            {" "}
            &times;{" "}
          </button>
        </div>
      </div>

      {/* Cart Modal */}
      <div className="cart-model">
        <div
          onClick={() => setShowCart(false)}
          className={`ShowOverlay cart-overlay ${
            showCart ? "overlay-showing" : ""
          }`}
        ></div>
        <div className={`cart ${showCart ? "cart-show" : ""}`}>
          <h3>Add to Cart</h3>
          <button
            className="close-btn close-btn-1"
            onClick={() => setShowCart(false)}
          >
            {" "}
            &times;{" "}
          </button>

          <div className="modal-content">
            <p>Upgrade to unlock these powerful features:</p>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <div className="feature-text">
                  <h4>Advanced Security</h4>
                  <p>
                    Bank-level encryption to keep your data safe and private.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <h4>Priority Support</h4>
                  <p>Get your questions answered quickly by our expert team.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-text">
                  <h4>Advanced Analytics</h4>
                  <p>
                    Dive deeper with custom reports and data visualizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline">Learn More</button>
            <button className="btn btn-primary">Upgrade Now</button>
          </div>
        </div>
      </div>
      <div className="main">
        <h1>Welcome to ShopEasy</h1>
        <p>Your one-stop shop for everything you need!</p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
}

export default App;
