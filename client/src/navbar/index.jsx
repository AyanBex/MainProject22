import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { DefaultContext } from "../Context";
import { useContext } from "react";
// jshint ignore:start

const Navbar = () => {
  const { isAuth } = useContext(DefaultContext);
  
  return (
    <div className="navbar">
      <a href="/" className="logo">
        Proton
      </a>
      <div className="links1">
        <a href="/catalog" className="a1">
          Шаблоны
        </a>
        <a href="/action" className="a1">
          Категории
        </a>
        <a href="/comm" className="a1">
          Цены
        </a>
      </div>
      {!isAuth ?
        <div className="links2">
        <a className="login" href="/login">
          Войти
        </a>
        <a className="button" href="/registration">
          Регистрация
        </a>
      </div> : 
      <div className="links2">
        <a className="login" href="/[profile]">
          Профиль
        </a>
      </div>
      }
    </div>
  );
};
// jshint ignore:end

export default Navbar;
