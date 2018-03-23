import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import ActivityItem from './ActivityItem';

// Import Style
import styles from './ActivityListItem.css';

// import stylesBootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import stylesBootstrap from 'bootstrap/dist/css/bootstrap.css';

// require('bootstrap/dist/css/bootstrap.css');
// require('../../../node_modules/bootstrap/dist/css/bootstrap.css');
// require('../../node_modules/bootstrap/dist/css/bootstrap-theme.css');

const fn_ActivitySummaryListItem = {
  formatDuration: (sec) => {
    let date = new Date(null);
    date.setSeconds(sec); // specify value for SECONDS here
    let result = date.toISOString().substr(11, 8);

    let strOut = result.split(":").map(
      (strNum,idx) => {
        if (strNum==="00")
          return 0

        switch (idx){
          case 0:
            return strNum+" hr"
            break;
          case 1:
            return strNum+" min"
            break;
          case 2:
            return strNum+" sec"
            break;
        }

      }
    )
    .filter(val => val)
    .join(" ")

    // console.log(strOut)
        
    return strOut
  },
}
// function Activity(props) {
//   return (
//     <div>
//       xxxxx
    
//     </div>
//   );
// }
const summarize = (activities) => {
  let activitiesX = activities.map(
    act =>{
      let key = JSON.stringify({proc_name:act.proc_name , window_title: act.window_title})
      let objOut = {}
      objOut[key] = act
      return objOut
    }    
  )

  activitiesX = activitiesX.reduce( 
    (objOut,objIn) =>{
      // console.log(objIn)
      
      let key = Object.keys(objIn)[0]
      let val = objIn[key]
      // console.log(JSON.stringify(objOut))
      // console.log(JSON.stringify(objOut[key]))
      // console.log(val.duration)

      if (objOut.hasOwnProperty(key)){
        // console.log(objOut[key])
        let duration = val.duration? (objOut[key].duration+val.duration) : objOut[key].duration
        // console.log(duration)
        // console.log(objOut[key].duration)
        objOut[key] = {...objOut[key], duration}

        
      }else{
        objOut[key] = {...val}
        // let {start_time, x} = {...val}
        // objOut[key] = x
        objOut[key].start_time = undefined

        objOut[key].duration = objOut[key].duration? objOut[key].duration : 0 

        // console.log('xxxxx')
        // console.log(objOut[key])
      }
      // console.log('xxxxx')
      // console.log(JSON.stringify(objOut[key]))


      return objOut

    },
    {}

  )

  // console.log('zzzzzzzzz')
  // console.log(activitiesX)
  

  Object.keys(activitiesX).forEach(
    (key) => {
      let act = activitiesX[key]
      if (! act.duration)
        return;

      act.duration = fn_ActivitySummaryListItem.formatDuration(act.duration)

    }  

  )

  return activitiesX

}

const Activity= (props) => { 
  // Activities = 


  if (!props.items)
    return null;

  let activities = props.items
  
  if (activities.length === 0 )
    return null;

  activities = summarize(activities)

  console.log(activities)

  // xxxxx
  //     {
  //       JSON.stringify(activities)
  //     }
  //     yyy

  return (
    <div>
      

      {
        

        Object.keys(activities).map(
          (key,idx)=>{
            if (!activities[key])
              return null;
            console.log(activities[key].login)
            return (
              <ActivityItem key={idx} item={activities[key]}>
              </ActivityItem>
            )
          }
        )
      }

      {

      }
    
    </div>
  )
}

// Activity.propTypes = {
//   Activity: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   }).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default Activity;