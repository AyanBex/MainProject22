import axios from "axios";

export const registration = async (email, username, password) => {
  try {
    const response = await axios.post(
      "http://localhost:1500/api/auth/registration",
      {
        email,
        username,
        password,
      }
    );
    console.log(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = async (email, password, handleSetIsAuth) => {
  try {
    const response = await axios.post("http://localhost:1500/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    handleSetIsAuth();
    console.log("Logged in succesfully!");
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const items = async () => {
  try {
    const response = await axios.get("http://localhost:1500/api/auth/items");
    console.log("Got items succesfully!", response.data);
    return response.data;
  } catch (e) {
    alert(e.response.data.message);
  }
};
