import { FETCH_QUOTE } from './types';
import quotesApi from '../apis/quotesApi';

export const fetchQuote = () => async (dispatch) => {
  const response = await quotesApi.get(`/?method=getQuote&format=jsonp&lang=en&jsonp=?`);

  dispatch({ type: FETCH_QUOTE, payload: response.data });
};
