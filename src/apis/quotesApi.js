import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
});
