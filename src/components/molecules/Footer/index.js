import React from "react";
import './footer.scss'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICLinkedin, Logo } from "../../../assets";

const Icon = ({img}) =>{
    return (
        <div className="icon-wrapper">
            <img src={img} alt="icon social media" className="icon-medsos" />
        </div>
    )
}

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <div className="social-wrapper">
            <Icon img={ICFacebook}/>
            <Icon img={ICInstagram}/>
            <Icon img={ICDiscord}/>
            <Icon img={ICLinkedin}/>
            <Icon img={ICGithub}/>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
