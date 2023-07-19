import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';

import { ContactsFormLabel, ContactsFormButton } from './ContactsForm.styled';
export default class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitContact = () => {
    const newContact = {
      id: nanoid(5),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addNewContact(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik initialValues={this.state} onSubmit={this.submitContact}>
        <Form>
          <ContactsFormLabel>
            <span>Name</span>
            <Field
              onChange={this.handleInputChange}
              value={this.state.name}
              autoComplete="off"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactsFormLabel>
          <ContactsFormLabel>
            <span>Phone</span>
            <Field
              onChange={this.handleInputChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactsFormLabel>
          <ContactsFormButton type="submit">Add Contact</ContactsFormButton>
        </Form>
      </Formik>
    );
  }
}

ContactsForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
