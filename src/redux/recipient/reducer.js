import initialState from './state';
import {
  FETCH_RECIPIENTS_BEGIN,
  FETCH_RECIPIENTS_SUCCESS,
  FETCH_RECIPIENTS_FAILURE,
} from '../types';

// * I understand the idea of abstracting out each reducer
// * and honestly it's a personal opinion, but for me it's
// * more work than benefit so I do all things related in the same reducers
// * so all things recipients effect, such as the loading prop, will just get handled with it

const recipientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RECIPIENTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECIPIENTS_SUCCESS:
      let recipientsById = {};

      // * loop over the recipients array and add each one to the
      // * temporary recipientsById object, setting the key of each to their respective id
      payload.forEach((r) => {
        recipientsById = { ...recipientsById, [r.id]: r };
      });

      return {
        ...state,
        loading: false,
        recipients: payload,
        recipientsById,
        recipientIds: payload.map(({ id }) => parseInt(id, 10)),
      };
    case FETCH_RECIPIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        recipients: [],
        recipientsById: [],
        recipientIds: [],
      };
    case 'ADD_RECIPIENT':
      return {
        ...state,
        recipients: [...state.recipients, payload],
      };
    case 'REMOVE_RECIPIENT':
      return {
        ...state,
        recipients: state.recipients.filter(
          ({ id }) => parseInt(id, 10) !== parseInt(payload, 10)
        ),
      };
    // case 'UPDATE_RECIPIENT':
    //   const foundRecipient = state.recipients.find(recipient => parseInt(recipient.id, 10) === parseInt(recipient.id, 10));
    //   const foundRecipientIndex = state.recipients.findIndex(foundRecipient);
    // Remove the found recipient from the state
    // Add the updated recipient (a.k.a. the recipient object) at foundRecipientIndex
    // Return recipients
    // ! TODO: UNFINISHED
    // return state;
    default:
      return state;
  }
};

export default recipientReducer;
