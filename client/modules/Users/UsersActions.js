/////////////
import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_USERS = 'ADD_USERS';


// Export Actions
export function addUsers(users) {
  return {
    type: ADD_USERS,
    users,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    // return callApi('activities').then(res => {
    // return callApi('user_activity?distinct=login').then(res => {
    return callApi('user_activity?distinct=alias').then(res => {
      // console.log("ddddwwiikk")
      // console.log(res)
      let arrOut = res.users
      .filter( 
        u => ( ! /^_/.test(u) )
      )
      dispatch(addUsers(arrOut));
    });
  };
}
