import { nanoid } from 'nanoid';
import { Component } from 'react';
import {
  ContactFormContainer,
  FormButton,
  FormInput,
  FormLabel,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddContact, contacts } = this.props;
    if (name.trim() === '' || number.trim() === '') return;

    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    onAddContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <ContactFormContainer onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="nameInput">Name</FormLabel>
        <FormInput
          id="nameInput"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={name}
          onChange={this.handleNameChange}
        />
        <FormLabel htmlFor="numberInput">Number</FormLabel>
        <FormInput
          id="numberInput"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleNumberChange}
        />
        <FormButton type="submit">Add contact</FormButton>
      </ContactFormContainer>
    );
  }
}
