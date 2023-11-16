import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    const response = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (data) {
      navigate("library/");
    }
  }

  return (
    <form
      onSubmit={loginUser}
      className="flex flex-col items-center justify-center gap-5 rounded-lg border-2 border-white bg-violet-500 px-4 py-6 text-xl text-white shadow-md"
    >
      <label className="w-100">Email:</label>
      <input
        type="email"
        className="rounded-sm p-1"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Password: </label>
      <input
        type="password"
        className="rounded-sm p-1"
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
  );
};

export default LoginForm;
