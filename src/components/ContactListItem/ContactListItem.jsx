import { ListItemButton, ListItemWrapper } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onDeleteContact }) => (
  <li>
    <ListItemWrapper>
      <span>
        {name}: {number}
      </span>
      <ListItemButton type="button" onClick={onDeleteContact}>
        Delete
      </ListItemButton>
    </ListItemWrapper>
  </li>
);
