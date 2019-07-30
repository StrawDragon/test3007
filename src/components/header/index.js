import React from "react";
import "./index.css";
//Создаю шапку

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          alt="imgmmmggg"
          className="header-logo"
          src="https://banner2.kisspng.com/20180831/yc/kisspng-retail-computer-icons-clip-art-iconfinder-shopping-store-svg-png-icon-free-download-568525-onlin-5b897ee8c9b710.1049169115357375768262.jpg"
        />
      </div>
    );
  }
}

export default Header;
