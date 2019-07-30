import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
//Создаю черную полоску
class NaviMenu extends React.Component {
  render() {
    return (
      <div className="navi-menu">
        <div className="Menu">
          <p href="/" className="menu-item">
            <Link to={`/`}>Магазины</Link>
          </p>
          <p href="/" className="menu-item">
            <Link to={`/SelectedList`}>Списки</Link>
          </p>
          <p href="/" className="menu-item">
            Продажи
          </p>
          <p href="/" className="menu-item">
            Покупки
          </p>
          <p href="/" className="menu-item">
            Оплата
          </p>
          <p href="/" className="menu-item">
            Обратная связь
          </p>
        </div>
      </div>
    );
  }
}

export default NaviMenu;
