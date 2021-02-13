import tokenService from '../services/tokenService';
const BASE_URL = '/api/sessions/';

export function create(session) {
  console.log(session)
  return fetch(
    BASE_URL,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(session),
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function getOne(session) {
  return fetch(
    `${BASE_URL}${session._id}`,
    {
      headers: { Authorization: 'Bearer ' + tokenService.getToken() },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}
