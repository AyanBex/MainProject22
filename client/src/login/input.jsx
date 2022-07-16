import React from "react";
import "./z2 2home.css";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/user";
import { DefaultContext } from "../Context";
import { useContext } from "react";

export default function Form() {
  const navigate = useNavigate();
  const {handleSetIsAuth, setEmail, setPassword, email, password} = useContext(DefaultContext);

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = () => {
    login(email, password, handleSetIsAuth);
    navigate('/');
  }

  return (
    <form className="Form2" action="post" onSubmit={() => handleSubmit()}>
      <input
        className="input1"
        type = "text"
        onChange={handleEmail}
        placeholder="Email"
      />
      <input
        className="input1"
        type = "password"
        onChange={handlePassword}
        placeholder="Password"
      />
      <input type="submit" value="Войти" className="buttonz2" />
    </form>
  );
}
