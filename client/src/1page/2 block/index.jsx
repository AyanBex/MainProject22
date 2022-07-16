import "./home2.css";
// jshint ignore:start

const Home2 = () => {
  return (
    <div className="home2">
      <div className="first">
        <div className="head2">
          <p className="header2">
            <span>Что входит</span> <span>в инструменты?</span>
          </p>
          <p className="subtext3">
            <span>И всё это в одной упаковке!</span>
          </p>
        </div>
        <div className="cards2">
          <div className="card1">
            <a href="/posts" className="c1">
              Создание <br></br>постов
            </a>
            <p className="ct1">
              <span className="colort">Поможем </span>{" "}
              <span className="colort">переупаковать</span>
              <span className="colort">ленту постов для </span>{" "}
              <span className="colort">позиционирования</span>
            </p>
            <img
              className="image2z1"
              src={require("../../imgs/bulb opacity.png")}
            />
          </div>
          <div className="card2">
            <a href="/stories" className="c2">
              Создание<br></br>сторисов
            </a>
            <p className="ct2">
              <span className="colort">Пополните свои </span>{" "}
              <span className="colort">сторисы живым</span>
              <span className="colort">контентом с нашими</span>{" "}
              <span className="colort">шаблонами</span>
            </p>
            <img
              className="image2z2"
              src={require("../../imgs/lamp opacity.png")}
            />
          </div>
          <div className="card3">
            <a href="/stories" className="c2">
              Обложки<br></br>для highlights
            </a>
            <p className="ct2">
              <span className="colort">Приведите обложки </span>{" "}
              <span className="colort">актуалных сторисов</span>
              <span className="colort">в единый стиль</span>
            </p>
            <img
              className="image2z3"
              src={require("../../imgs/achieve opacity.png")}
            />
          </div>
          <div className="illustrations">
            <img className="ibulb" src={require("../../imgs/bulb.png")} />
            <img className="ilamp" src={require("../../imgs/lamp.png")} />
            <img className="iachieve" src={require("../../imgs/achieve.png")} />
          </div>
        </div>
        <div className="subhead2">
          <a href="http://localhost:4000/" className="button2">
            Создать дизайн
          </a>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};
// jshint ignore:end

export default Home2;
