import { FETCH_QUOTE } from './types';
import quotesApi from '../apis/quotesApi';

export const fetchQuote = () => async (dispatch) => {
  console.log('fetchQuote');
  const response = await quotesApi.get('/');
  console.log('response', response);

  dispatch({ type: FETCH_QUOTE, payload: response.data });
};
