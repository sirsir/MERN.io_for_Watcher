// // Import Actions
// import {  } from './ActivityActions';

// // Initial State
// const initialState = {};

// const ActivityReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default ActivityReducer;



import { ADD_ACTIVITY, ADD_ACTIVITIES, DELETE_ACTIVITY } from './ActivityActions';

// Initial State
const initialState = { data: [] };

const ActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVITY :
      return {
        data: [action.activity, ...state.data],
      };

    case ADD_ACTIVITIES :
      return {
        data: action.activities,
      };

    case DELETE_ACTIVITY :
      return {
        data: state.data.filter(activity => activity.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getActivities = state => state.activities.data;

// Get post by cuid
export const getActivity = (state, cuid) => state.activities.data.filter(activity => activity.cuid === cuid)[0];

// Export Reducer
export default ActivityReducer;
