import React from 'react';
import { DeleteButton, ListItem } from './ContactItem.styled';
import { AiFillCloseCircle } from 'react-icons/ai';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      <p>
        {name} : <span>{number}</span>
      </p>
      <DeleteButton onClick={() => onDelete(id)}>
        <AiFillCloseCircle size={18} />
      </DeleteButton>
    </ListItem>
  );
};
