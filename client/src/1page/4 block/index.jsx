import "./home4.css";
// jshint ignore:start

const Home4 = () => {
  return (
    <div className="home4">
      <div className="fourth">
        <div className="ccards4z">
          <div className="ucards4z">
            <div className="card4z">
              <p className="cd1">1 000</p>
              <p className="ucd1">Постов </p>
            </div>
            <div className="card4z2">
              <p className="cd1">5 000</p>
              <p className="ucd1">Сторисов</p>
            </div>
            <div className="card4z3">
              <p className="cd1">500+</p>
              <p className="ucd1">Упаковок</p>
            </div>
            <div className="lines4z">
              <div className="line4z1"></div>
              <div className="line4z2"></div>
            </div>
          </div>
        </div>
        <div className="cards4z">
          <img
            className="image4z1"
            src={require("../../imgs/drot opacity.png")}
          />
        </div>
        <div className="subhead4z1">
          <a href="http://localhost:4000/" className="button2">
            Создать дизайн
          </a>
        </div>
        <div className="illustrations4z">
          <img className="il4z1" src={require("../../imgs/sgear.png")} />
          <img className="il4z2" src={require("../../imgs/gear.png")} />
        </div>
      </div>
    </div>
  );
};
// jshint ignore:end

export default Home4;
