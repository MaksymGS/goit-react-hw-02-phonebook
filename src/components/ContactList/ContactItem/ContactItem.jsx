import React from 'react';

export const ContactItem = ({ contacts }) => {
  return contacts.map(({ name, number }) => (
    <li>
      <p>{name}</p>
      <span>{number}</span>
    </li>
  ));
};
