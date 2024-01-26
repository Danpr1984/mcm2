import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
// import CSRFToken from "./CSRFToken";
import { Link } from "react-router-dom";

const RegisterForm = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    re_password: "",
  });

  const { username, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password === re_password) {
      const cookie = Cookies.get("csrftoken");
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": cookie,
        },
      };
      const body = JSON.stringify({ username, password, re_password });

      const { data } = await axios.post(
        "http://localhost:8000/api/register",
        body,
        config,
      );

      console.log(data);

      // if (data.user) {
      //   navigate("/dashboard");
      // }
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="text-2xl">Register for an Account</h1>
      <form
        className="flex flex-col items-center justify-center gap-5 rounded-lg border-2 border-white bg-violet-500 px-4 py-6 text-xl text-white shadow-md"
        onSubmit={(e) => onSubmit(e)}
      >
        <CSRFToken />
        <div className="form-group">
          <label className="form-label">Username: </label>
          <input
            className="rounded-sm p-1 text-slate-950"
            type="text"
            placeholder="Username*"
            name="username"
            onChange={(e) => onChange(e)}
            value={username}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label mt-3">Password: </label>
          <input
            className="rounded-sm p-1 text-slate-950"
            type="password"
            placeholder="Password*"
            name="password"
            onChange={(e) => onChange(e)}
            value={password}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label mt-3">Confirm Password: </label>
          <input
            className="rounded-sm p-1 text-slate-950"
            type="password"
            placeholder="Confirm Password*"
            name="re_password"
            onChange={(e) => onChange(e)}
            value={re_password}
            minLength="6"
            required
          />
        </div>
        <button
          className="rounded-md bg-white px-3 py-1 text-2xl text-indigo-800 hover:cursor-pointer hover:bg-indigo-700 hover:text-white focus:cursor-pointer focus:bg-indigo-700 focus:text-white"
          type="submit"
        >
          Register
        </button>
      </form>
      <p className="mt-3">
        Already have an Account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
