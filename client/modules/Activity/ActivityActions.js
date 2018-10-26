// Export Constants

// Export Actions

/////////////
import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

// Export Actions
export function addActivity(activity) {
  return {
    type: ADD_ACTIVITY,
    activity,
  };
}

export function addActivityRequest(activity) {
  return (dispatch) => {
    return callApi('activities', 'activity', {
      activity: {
        name: activity.name,
        title: activity.title,
        content: activity.content,
      },
    }).then(res => dispatch(addActivity(res.activity)));
  };
}

export function addActivities(activities) {
  return {
    type: ADD_ACTIVITIES,
    activities,
  };
}



export function fetchActivities(user, startDate, endDate, onlyStrange) {
  return (dispatch) => {
    // return callApi('activities').then(res => {
      // let body = {}

      // if (user)
      //   body = {...body, user}

      // if (startDate)
      //   body = {...body, startDate}
      // if (endDate)
      //   body = {...body, endDate}

      let apiUrl = 'user_activity'

      if (typeof(user)!=='undefined'||typeof(startDate)!=='undefined'||typeof(endDate)!=='undefined'||typeof(onlyStrange)!=='undefined'){
        apiUrl += '?'

        // if (typeof(user)!=='undefined'){
        //   apiUrl += 'login='+user +'&'
        // }

        if (typeof(user)!=='undefined'){
          apiUrl += 'alias='+user +'&'
        }

        if (typeof(startDate)!=='undefined'){
          apiUrl += 'startDate='+startDate +'&'
        }

        if (typeof(endDate)!=='undefined'){
          apiUrl += 'endDate='+endDate +'&'
        }

        if (typeof(onlyStrange)!=='undefined'){
          apiUrl += 'onlyStrange='+onlyStrange +'&'
        }

        apiUrl = apiUrl.replace(/\?$/, '')
        apiUrl = apiUrl.replace(/\&$/, '')
      }
      

    // return callApi('user_activity', 'get', body).then(res => {
    return callApi(apiUrl).then(res => {
      // console.log("ddddwwiikk")
      // console.log(res)
      dispatch(addActivities(res.activities));
    });
  };
}


export function fetchActivity(cuid) {
  return (dispatch) => {
    return callApi(`activities/${cuid}`).then(res => dispatch(addActivity(res.activity)));
  };
}

export function deleteActivity(cuid) {
  return {
    type: DELETE_ACTIVITY,
    cuid,
  };
}

export function deleteActivityRequest(cuid) {
  return (dispatch) => {
    return callApi(`activities/${cuid}`, 'delete').then(() => dispatch(deleteActivity(cuid)));
  };
}
