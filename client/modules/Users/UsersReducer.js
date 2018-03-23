// Import Actions
import { ADD_USERS  } from './UsersActions';

// Initial State
const initialState = {data: []};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS :
      return {
        data: action.users,
      };

    default:
      return state;
  }
};

// export const getUsers = state => {state.users.data};
export const getUsers = state => {return state.users.data};

export default UsersReducer;
