import PropTypes from 'prop-types';
import {
  ContactListList,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';

export const ContactList = ({ data, contactDelete }) => {
  return (
    <ContactListList>
      {data.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <ContactListButton type="button" onClick={() => contactDelete(id)}>
              Delete Contact
            </ContactListButton>
          </ContactListItem>
        );
      })}
    </ContactListList>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  contactDelete: PropTypes.func.isRequired,
};
