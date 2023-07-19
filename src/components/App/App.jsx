import { Component } from 'react';

import ContactsForm from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

import { AppContainer, AppTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = newContact => {
    if (this.state.contacts.find(el => el.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts`);
    }
    this.setState(state => ({ contacts: [...state.contacts, newContact] }));
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  normalizeContact = () => {
    const { filter, contacts } = this.state;
    const normalizedContact = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact)
    );
  };

  contactDelete = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <AppContainer>
        <AppTitle>Phonebook</AppTitle>
        <ContactsForm addNewContact={this.addNewContact} />
        <AppTitle>Contacts</AppTitle>
        <Filter
          filteredValue={this.state.filter}
          filterChange={this.filterChange}
        />
        <ContactList
          data={this.normalizeContact()}
          contactDelete={this.contactDelete}
        />
      </AppContainer>
    );
  }
}
