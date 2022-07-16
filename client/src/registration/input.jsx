import React, { useState } from "react";
import "./z2 home.css";
import { useNavigate } from "react-router";
import { registration } from "../actions/user";
import { DefaultContext } from "../Context";
import { useContext } from "react";

export default function Form() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const { setEmail, setPassword, email, password } = useContext(DefaultContext);

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = () => {
    registration(email, username, password);
    navigate('/login');
  }

  return (
    <form className="Form2" onSubmit={() => handleSubmit()} action="post">
      <input
        className="input1"
        type="text"
        onChange={handleUsername}
        placeholder="Username"
      />
      <input
        className="input1"
        type="email"
        onChange={handleEmail}
        placeholder="Email"
      />
      <input
        className="input1"
        type="password"
        onChange={handlePassword}
        placeholder="Password"
      />
      <input type="submit" value="Создать аккаунт" className="buttonz2" />
    </form>
  );
}