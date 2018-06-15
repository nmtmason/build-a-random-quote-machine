import React from 'react';

import { Container } from '../components/Container';
import { Quote } from '../components/Quote';
import { Actions } from '../components/Actions';
import { FetchQuote } from '../containers/FetchQuote';

export const QuotePage = props => (
  <Container>
    <FetchQuote>
      {(loading, error, text, author, loadQuote) => (
        <React.Fragment>
          <Quote loading={loading} error={error} text={text} author={author} />
          <Actions
            loading={loading}
            text={text}
            author={author}
            loadQuote={loadQuote}
          />
        </React.Fragment>
      )}
    </FetchQuote>
  </Container>
);
