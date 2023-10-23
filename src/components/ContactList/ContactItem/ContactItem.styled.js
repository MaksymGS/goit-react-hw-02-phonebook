import styled from 'styled-components';

export const ListItem = styled.li`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color:  #16437e
`;
export const DeleteButton = styled.button`
  display: block;
  background-color: #0a66c2;
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  width: 18;
  height: 18px;
  padding: 0;

  &:hover {
    background-color: #16437e;
  }
`;
