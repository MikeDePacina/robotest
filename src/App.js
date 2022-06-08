import React, { Component } from "react";
import CardList from "./Components/CardList";
import Scroll from "./Components/Scroll";
import SearchBox from "./Components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ members: users }));
  }

  onSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredMembers = this.state.members.filter((member) => {
      return member.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="text-center m-2">
        <h1 className="text-6xl m-4"> Loona</h1>
        <SearchBox searchChange={this.onSearch} />
        <Scroll>
          <CardList members={filteredMembers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
