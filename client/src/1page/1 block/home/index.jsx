import "./home.css";
// jshint ignore:start

const Home = () => {
  const images = ["planet", "nature", "future"];

  return (
    <div className="home">
      <div className="first">
        <div className="head">
          <p className="header">
            <span>Упаковка Instagram</span> <span>аккаунта в один клик</span>
          </p>
          <p className="subtext">
            <span>Выберите категорию бизнеса и получите широкий спектр</span>
            <span>шаблонов для постов, сторисов и обложек для актуальных</span>
          </p>
        </div>
        <div className="subhead">
          <a href="/catalog" className="button1">
            Создать дизайн
          </a>
          <p className="subtext2">*Как это работает?</p>
        </div>

        <img className="image" src={require("../../../imgs/insta.png")} />
        <img className="image2" src={require("../../../imgs/key.png")} />
        <img
          className="image3"
          src={require("../../../imgs/key opacity.png")}
        />
      </div>
    </div>
  );
};
// jshint ignore:end

export default Home;
