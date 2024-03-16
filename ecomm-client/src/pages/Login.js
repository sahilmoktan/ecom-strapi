import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN_USER } from "../gqlOperation/mutation";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [loginUser,{loading, error,data}] = useMutation(LOGIN_USER)

  if(loading) return <h2>loading ...</h2>
  if(data) console.log(data)

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    loginUser({
      variables:{
        input:formData
      }
    })
    
  };

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container" style={{ maxWidth: "500px" }}>
      {
        error &&
        <div className="card-panel red">{error.message}</div>
      }
      <h3> Login</h3>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="email or username"
          name="identifier"
          onChange={handelChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handelChange}
        />
        <button type="submit" className="btn blue">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
