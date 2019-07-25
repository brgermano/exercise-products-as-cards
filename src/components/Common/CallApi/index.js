import axios from 'axios';
import config from '../../../config.json';

function* CallApi(method, endpoint) {
  const { apiEndpoint } = config;
  const call = yield axios(`${apiEndpoint}${endpoint}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response)
    .catch(e => e);

  return call;
}

export default CallApi;
