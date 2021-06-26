import {
  FETCH_RECIPIENTS_BEGIN,
  FETCH_RECIPIENTS_SUCCESS,
  FETCH_RECIPIENTS_FAILURE,
} from '../types';

// export function fetchRecipients() {
//   return (dispatch) => {
//     dispatch(fetchRecipientsBegin());
//     return fetch(`http://localhost:3001/api/recipients`)
//       .then((response) => response.json())
//       .then(({ data }) => {
//         dispatch(fetchRecipientsSuccess(data));
//         return data;
//       })
//       .catch((error) => dispatch(fetchRecipientsFailure(error)));
//   };
// }

// ! This first one users the .then() like you did above
// ! I prefer async/await so I put an example of both

// * with .then()
// export const fetchRecipients = () => (dispatch) => {
//   dispatch(fetchRecipientsBegin());

//   // * Not using your server so just hitting a fake rest api resource
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((res) => res.json())
//     .then((data) => {
//       dispatch(fetchRecipientsSuccess(data));
//     })
//     .catch((err) => console.error('Error: ', err));
// };

// * with async/await
export const fetchRecipients = () => async (dispatch) => {
  dispatch(fetchRecipientsBegin());

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    dispatch(fetchRecipientsSuccess(data));
  } catch (err) {
    console.error(`Error: ${err}`);
    dispatch(fetchRecipientsFailure());
  }
};

export const fetchRecipientsBegin = () => ({
  type: FETCH_RECIPIENTS_BEGIN,
});

export const fetchRecipientsSuccess = (data) => ({
  type: FETCH_RECIPIENTS_SUCCESS,
  payload: data,
});

export const fetchRecipientsFailure = () => ({
  type: FETCH_RECIPIENTS_FAILURE,
});
