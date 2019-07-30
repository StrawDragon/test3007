import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectedList from "./pages/SelectedList";
import "../styles.css";
/*

//Создаю черную полоску
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      data: []
    };
  }

  setId = id => {
    this.setState({
      id,
    })
  }

  setData = data => {
    this.setState({
      data: { ...data }
    })
  }

  render() {
    const { id, data } = this.state;

    return (
      <div className="main">
        <Header />
        <NaviMenu />
        {id ?
          <SelectedList data={data} id={id} setId={this.setId} setData={this.setData} /> :
          <Home data={data} setId={this.setId} setData={this.setData} />
        }
      </div>
    );
  }
}*/

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/:id" component={SelectedList} />
  </Switch>
);

export default App;
