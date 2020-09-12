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
      title: '',
    };
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value, title: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  };

  render() {
    // Destructuring
    const { monsters, searchField, title } = this.state;
    // const monsters = this.state.monsters etc.

    // const filteredMonsters = monsters.filter(monster =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    //   )

    return (
      <div className="App">

        <h1>{title}</h1>

        <SearchBox
          placeholder='Search Users'
          handleChange={this.handleChange}
        />

        <CardList monsters={monsters} />

        <p className="footer">
          Page by Adam Goździelewski <br />
          based on the Zero to Mastery React.JS course
        </p>

      </div>
    );
  };
};

export default App;