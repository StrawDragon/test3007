import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Info extends React.Component {
  render() {
    return (
      <div>
        <button className="button">
          <Link to={`/`}>Вернуться</Link>
        </button>
      </div>
    );
  }
}

export default Info;
