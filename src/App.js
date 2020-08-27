import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'Univ0',
        },
        {
          name: 'Dracula',
          id: 'Univ1',
        },
        {
          name: 'Zombie',
          id: 'Univ2',
        },
      ]
    };
  };

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{ monster.name }</h1>)
        }
      </div>
    );
  };
};

export default App;