import React from 'react';
import { css } from 'emotion';

import { Link } from './Link';
import { Button } from './Button';

let style = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

let leftStyle = css`
  width: 50%;
  text-align: right;
`;

let rightStyle = css`
  width: 50%;
  text-align: left;
`;

export const Actions = ({ loading, text, author, loadQuote }) => {
  let tweet = `${text} (${author})`;
  return (
    <div className={style}>
      <div className={leftStyle}>
        <Link href={`https://twitter.com/intent/tweet?text=${tweet}`}>
          Tweet Quote
        </Link>
      </div>
      {'  |  '}
      <div className={rightStyle}>
        <Button disabled={loading} onClick={loadQuote}>
          Next Quote
        </Button>
      </div>
    </div>
  );
};
