// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const CHANGE_ACTIVITY_VIEW = 'CHANGE_ACTIVITY_VIEW';
export const CHANGE_SELECT_USER = 'CHANGE_SELECT_USER';
export const CHANGE_SELECT_START_DATE = 'CHANGE_SELECT_START_DATE';
export const CHANGE_SELECT_END_DATE = 'CHANGE_SELECT_END_DATE';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function changeActivityView(activityView) {
  return {
    type: CHANGE_ACTIVITY_VIEW,
    activityView,
  };
}

export function changeSelectUser(selectUser) {
  return {
    type: CHANGE_SELECT_USER,
    selectUser,
  };
}

export function changeSelectStartDate(selectStartDate) {
  return {
    type: CHANGE_SELECT_START_DATE,
    selectStartDate,
  };
}

export function changeSelectEndDate(selectEndDate) {
  return {
    type: CHANGE_SELECT_END_DATE,
    selectEndDate,
  };
}

// export function fetchActivities() {
//   return (dispatch) => {
//     // return callApi('activities').then(res => {
//     return callApi('user_activity').then(res => {
//       // console.log("ddddwwiikk")
//       // console.log(res)
//       dispatch(addActivities(res.activities));
//     });
//   };
// }