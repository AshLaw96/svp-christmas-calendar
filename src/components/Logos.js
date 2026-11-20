import svpTitleLogo from "../assets/images/title-logo.png";
import svpLogo from "../assets/images/svp-logo.webp";
import "../styles/Logos.css";

function Logos() {
  return (
    <div className="logo-container">
      <img src={svpLogo} alt="St Vincent de Paul Society"
      className="logo-image" width="100" height="100" />
      <img
        src={svpTitleLogo} alt="" className="logo-title" 
        width="200" height="100" />
    </div>
  );
}

export default Logos;
