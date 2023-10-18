import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  render() {
    return <input type="text" name="name" required />
  }
}
