import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, Redirect } from "react-router-dom";
import Cookies from 'js-cookie'; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let nevigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(response);
      console.log("Login successful");
      console.log("Token:", response.data.token);
      Cookies.set('jwtToken', response.data.token);
      setTimeout(() => {
        setLoggedIn(true);
      }, 2000);
    } catch (error) {
      console.error("Login error:", error.response);
    }
  };
  if (isLoggedIn) {
    nevigate("/pockman");
  }
  return (
   
      <div
        style={{
          marginTop: 'auto',
          margin: 'auto',
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          justifyContent: "center",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "16px",
         
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                color: "#4a5568",
                fontSize: "0.875rem",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
              htmlFor="email"
            >
              Email:
            </label>

            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
 
  );
};

export default Login;
