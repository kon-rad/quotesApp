import { FETCH_QUOTE } from './types';
import $ from 'jquery';

export const fetchQuote = () => async (dispatch) => {
  const response = await $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?');

  dispatch({ type: FETCH_QUOTE, payload: response });
};
