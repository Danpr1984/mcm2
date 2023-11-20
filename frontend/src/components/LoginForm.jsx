import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CSRFToken from "../auth/CSRFToken";
import { AuthContext } from "../context/AuthContext";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const cookie = Cookies.get("csrftoken");
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": cookie,
      },
    };
    const body = JSON.stringify({ username, password });

    const response = await axios.post(
      "http://localhost:8000/api/login",
      body,
      config,
    );

    const { data } = await axios.get("http://localhost:8000/api/user", config);

    if (data.user) {
      navigate("/dashboard");
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={loginUser}
        className="flex flex-col items-center justify-center gap-5 rounded-lg border-2 border-white bg-violet-500 px-4 py-6 text-xl text-white shadow-md"
      >
        <CSRFToken />
        <label className="w-100">Username:</label>
        <input
          type="text"
          className="rounded-sm p-1 text-slate-950"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          className="rounded-sm p-1 text-slate-950"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="rounded-md bg-white px-3 py-1 text-2xl text-indigo-800 hover:cursor-pointer hover:bg-indigo-700 hover:text-white focus:cursor-pointer focus:bg-indigo-700 focus:text-white"
          type="submit"
        >
          Login
        </button>
      </form>
      <Link to="register">Register</Link>
    </div>
  );
};

export default LoginForm;
