import React from 'react';
import { css } from 'emotion';

import { Spinner } from './Spinner';
import { Text } from './Text';
import { Author } from './Author';
import { Divider } from './Divider';

let style = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 480px;
  min-height: 480px;
  margin: 32px auto 32px auto;
  border: 0.5rem solid rgb(215, 75, 75);
  padding: 2rem;
  text-align: center;
  background-color: rgb(45, 45, 45);
`;

let loadingStyle = css`
  ${style};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

let errorStyle = css`
  ${style};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Quote = ({ loading, error, text, author }) => (
  <div className={loading ? loadingStyle : error ? errorStyle : style}>
    {loading ? (
      <Spinner />
    ) : error ? (
      <div>
        <Text>Oh no!</Text>
        <p>An error occured trying to retrieve the quote.</p>
        <p>
          <code>Error: {error}</code>
        </p>
      </div>
    ) : (
      <React.Fragment>
        <Text>{text}</Text>
        <div>
          <Divider />
          <Author>{author}</Author>
        </div>
      </React.Fragment>
    )}
  </div>
);
