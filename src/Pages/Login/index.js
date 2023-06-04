import React, { useState } from "react";
import awan2 from "../../img/weather2.png";

function PageContent_Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Email dan password tidak boleh kosong");
    } else if (!isValidEmail(email)) {
      alert("Email tidak valid");
    } else {
      onLogin();
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <body>
      <form>
        <div className="login-container">
          <img src={awan2} alt="Awan2" className="welcome-image1" />
          <h2 className="welcome-1">WeatherReport!</h2>
          <h3 className="welcome-2">Please Login For Better Experience!</h3>
          <label className="label1" for="password">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className="label2" for="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </body>
  );
}

export default PageContent_Login;
