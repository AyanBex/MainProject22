import "./home3.css";
// jshint ignore:start

const Home3 = () => {
  return (
    <div className="home3">
      <div className="third">
        <div className="progressbar">
          <div className="topic">
            <div className="bu1">Посты</div>
            <div className="bu2">Сторисы</div>
            <div className="bu3">Highlights</div>
          </div>
          <div className="lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <img className="image3z1" src={require("../../imgs/loop.png")} />
        <img
          className="image3z2"
          src={require("../../imgs/loop opacity.png")}
        />
        <div className="slide">
          <div className="slide1">
            <div className="sl1z1"></div>
            <div className="sl1z2"></div>
            <div className="sl1z3"></div>
            <div className="sl1z4"></div>
          </div>
          <p className="middletext">{"<->"} </p>
          <div className="slide2">
            <div className="sl2z1"></div>
            <div className="sl2z2"></div>
            <div className="sl2z3"></div>
            <div className="sl2z4"></div>
          </div>
        </div>
      </div>
      <div className="line3z1"></div>
    </div>
  );
};
// jshint ignore:end

export default Home3;
