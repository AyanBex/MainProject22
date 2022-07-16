import "./footer.css";
// jshint ignore:start

const Footer = () => {
  return (
    <div className="footer">
      <div className="line4z"></div>
      <div className="ufooter">
        <a href="/logo" className="logo4z">
          Proton
        </a>
        <p className="pfz">Proton ©2022</p>
        <div className="nets">
          <a href="/instagram">
            <img
              className="instagram"
              src={require("../imgs/instagram.png")}
            />
          </a>
          <a href="/facebook">
            <img
              className="telegram"
              src={require("../imgs/telegram.png")}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
// jshint ignore:end

export default Footer;
