import React from 'react';
import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contacts}) => {
  console.log(contacts);
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        <ContactItem key={contacts.id} contacts={contacts} />
      </ul>
    </div>
  );
};
