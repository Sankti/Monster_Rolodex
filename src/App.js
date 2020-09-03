import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  };

  render() {
    // Destructuring
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters etc.

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">

        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  };
};

export default App;