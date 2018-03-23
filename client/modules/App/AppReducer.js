// Import Actions
import { TOGGLE_ADD_POST, CHANGE_ACTIVITY_VIEW, CHANGE_SELECT_USER, CHANGE_SELECT_START_DATE, CHANGE_SELECT_END_DATE} from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  activityView: 'normal',
  selectUser: 'all users',
  selectStartDate: '',
  selectEndDate: '',
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        ...state,
        showAddPost: !state.showAddPost,

      };

    case CHANGE_ACTIVITY_VIEW:
      return {
        ...state,
        activityView: action.activityView,
      };

    case CHANGE_SELECT_USER:
      return {
        ...state,
        selectUser: action.selectUser,
      };

    case CHANGE_SELECT_START_DATE:
      return {
        ...state,
        selectStartDate: action.selectStartDate,
      };

    case CHANGE_SELECT_END_DATE:
      return {
        ...state,
        selectEndDate: action.selectEndDate,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getActivityView = state => state.app.activityView;
export const getSelectUser = state => state.app.selectUser;
export const getSelectStartDate = state => state.app.selectStartDate;
export const getSelectEndDate = state => state.app.selectEndDate;
// export const getActivityView = state => state.app.getActivityView;


// Export Reducer
export default AppReducer;
