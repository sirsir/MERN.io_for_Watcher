

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import CSSModules from 'react-css-modules';

// Import Style
import styles from './ActivityItem.css';
// import './ActivityItem.css';

// require('./ActivityItem.css');

// import { alert, buttons, jumbotron } from 'bootstrap-css'

// Object.assign(styles, alert, jumbotron, buttons)
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
        {item.item.alias}
      </div>
      <div className={styles['proc_name']}>
        {item.item.proc_name}
      </div>
      <div className={styles['window_title']}>
        {item.item.window_title}
      </div>      
      <div className={styles['duration']}>
        {item.item.duration}
      </div>
      <div className={styles['start_time']}>
        {item.item.start_time? item.item.start_time.toString():null}
      </div>          
    </div>
  )

  // return (
  //   <div styleName='jumbotron'>
  //     <h1>Hello, world!</h1>

  //   </div>
  // )

      // <a styleName='btn btn-primary btn-lg'>Learn more</a>
      // <div styleName='alert alert-info'>...</div>


  // return (
  //   <div className='activity_item'>
  //     <div className='name'>
  //       {item.item.login}
  //     </div>
  //     <div className='proc_name'>
  //       {item.item.proc_name}
  //     </div>
  //     <div className='window_title'>
  //       {item.item.window_title}
  //     </div>
  //     <div className='start_time'>
  //       {item.item.start_time? item.item.start_time.toString():"b"}
  //     </div>
  //     <div className='duration'>
  //       {item.item.duration}
  //     </div>    
  //   </div>
  // )


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

// export default ActivityItem;

export default CSSModules(ActivityItem, styles, {allowMultiple: true});