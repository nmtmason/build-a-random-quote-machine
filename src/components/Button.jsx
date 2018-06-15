import styled from 'react-emotion';

export const Button = styled('button')`
  margin: 0 0.5rem;
  border: 0;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  color: rgb(200, 200, 200);
  background-color: transparent;
  outline: none;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
