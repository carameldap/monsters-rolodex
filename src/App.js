import React, { Component } from "react";
import "./styles.css";
import { CardList } from "./card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      //.then(users=> console.log(users));
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
export default App;
