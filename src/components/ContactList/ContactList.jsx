import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ListContainer } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ListContainer>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={() => onDeleteContact(contact.id)}
      />
    ))}
  </ListContainer>
);


