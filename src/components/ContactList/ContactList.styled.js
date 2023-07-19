import styled from '@emotion/styled';

export const ContactListList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactListButton = styled.button`
  cursor: pointer;
  margin: 0 auto;
  display: block;
  margin-bottom: 10px;
  background-color: transparent;
  border: 1px black solid;
  padding: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
