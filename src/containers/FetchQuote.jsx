import { Component } from 'react';
import fetch from '../utils/fetch';

const cors = 'https://cors-everywhere.herokuapp.com/';
const api =
  'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const url = `${cors}${api}`;

const reducer = (
  state = {
    loading: false,
    error: null,
    text: null,
    author: null
  },
  action = {}
) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'LOADED':
      return {
        ...state,
        loading: false,
        error: null,
        text: action.text,
        author: action.author
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export class FetchQuote extends Component {
  constructor(props) {
    super(props);
    this.state = reducer();
  }

  loadQuote = event => {
    if (event) {
      event.preventDefault();
    }

    if (this.state.loading) {
      return;
    }

    this.setState(state => reducer(state, { type: 'LOADING' }));

    fetch(url)
      .then(response => response.json())
      .then(json =>
        this.setState(state =>
          reducer(state, {
            type: 'LOADED',
            text: json.quoteText.trim(),
            author: json.quoteAuthor.trim() || 'Unknown'
          })
        )
      )
      .catch(error =>
        this.setState(state =>
          reducer(state, { type: 'ERROR', error: error.message })
        )
      );
  };

  componentDidMount() {
    this.loadQuote();
  }

  render() {
    return this.props.children(
      this.state.loading,
      this.state.error,
      this.state.text,
      this.state.author,
      this.loadQuote
    );
  }
}
