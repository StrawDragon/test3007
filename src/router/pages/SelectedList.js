import React from "react";
import Header from "../../components/header";
import NaviMenu from "../../components/naviMenu";
import Info from "../../components/selectedList";
import ListData from "../../components/selectedList/item-table";

class Information extends React.Component {
  render() {
    return (
      <div className="vac">
        <Header />
        <NaviMenu />
        <ListData />
        <Info />
      </div>
    );
  }
}

export default Information;
