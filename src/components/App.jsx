import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  onAddContacts = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid(5) }],
    }));
  };

  render() {
    console.log(this.state.contacts);
    return (
      <>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          contacts={this.state.contacts}
          onAddContacts={this.onAddContacts}
        />
        <ContactList contacts={this.state.contacts}/>
      </>
    );
  }
}
