import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SIGNUP_USER } from "../gqlOperation/mutation";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [SignupUser,{loading, error,data}] = useMutation(SIGNUP_USER)

  if(loading) return <h2>loading ...</h2>
  if(data) console.log(data)

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    SignupUser({
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
      <h3> Signup</h3>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handelChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handelChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handelChange}
        />
        <button type="submit" className="btn blue">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
