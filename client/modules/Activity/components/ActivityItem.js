

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './ActivityItem.css';

// require('./ActivityItem.css');


// function Activity(props) {
//   return (
//     <div>
//       xxxxx
    
//     </div>
//   );
// }

const ActivityItem= (item) => { 
  // Activities = 


  return (
    <div className={styles['activity_item']}>
      <div className={styles['name']}>
        {item.item.login}
      </div>
      <div className={styles['proc_name']}>
        {item.item.proc_name}
      </div>
      <div className={styles['window_title']}>
        {item.item.window_title}
      </div>
      <div className={styles['start_time']}>
        {item.item.start_time? item.item.start_time.toString():"b"}
      </div>
      <div className={styles['duration']}>
        {item.item.duration}
      </div>
      
    
    </div>
  )
}

// <div className="proc_name">
//         {item.item.proc_name}
//       </div>
//       <div className="window_title">
//         {item.item.window_title}
//       </div>
//       <div className="start_time">
//         {item.item.start_time}
//       </div>
//       <div className="duration">
//         {item.item.duration}
//       </div>

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

export default ActivityItem;