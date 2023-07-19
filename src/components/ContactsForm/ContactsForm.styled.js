import styled from '@emotion/styled';

export const ContactsFormLabel = styled.label`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ContactsFormButton = styled.button`
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
