import React, { useState } from "react";
import Registration from "./registration";
import Login from "./login";
import Main from "./1page/pages";
import Homez3 from "./z3 1block";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SecondPage from "./secondpage";
import { DefaultContext } from "./Context";
import Navbar from "./navbar";
import Footer from "./footer";
import ContentPage from "./secondpage/content";

// jshint ignore:start
function App() {
  const [title, setTitle] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetIsAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <DefaultContext.Provider
      value={{
        email,
        password,
        isAuth,
        setEmail,
        setPassword,
        handleSetIsAuth,
        title,
        setTitle,
      }}
    >
      <Navbar />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/creating" element={<Homez3 />} />
            <Route path="/catalog" element={<SecondPage />} />
            <Route path="/content" element={<ContentPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </DefaultContext.Provider>
  );
}

export default App;
