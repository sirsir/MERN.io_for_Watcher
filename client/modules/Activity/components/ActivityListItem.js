// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// Import Style
// import styles from './Activity.css';

// class Activity extends Component {
//   render() {
//     return (
//       <div>
//       xxxxxx
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// Activity.propTypes = {
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Activity);




import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import ActivityItem from './ActivityItem';

// Import Style
import styles from './ActivityListItem.css';


import ReactTable from 'react-table'

// import "./react-table.css";
// import styles2 from "./react-table.css";
// import "../../../../node_modules/react-table/react-table.css";

// const css = require("../../../../node_modules/react-table/react-table.css").toString();

// console.log(css); // {String}
// require("../../../../node_modules/react-table/react-table.css")
 // require("./react-table.css")

// import stylesBootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import stylesBootstrap from 'bootstrap/dist/css/bootstrap.css';

// require('bootstrap/dist/css/bootstrap.css');
// require('../../../node_modules/bootstrap/dist/css/bootstrap.css');
// require('../../node_modules/bootstrap/dist/css/bootstrap-theme.css');


// function Activity(props) {
//   return (
//     <div>
//       xxxxx
    
//     </div>
//   );
// }

const Activity= (props) => { 
  // Activities = 
  const data = props.items
 
  // const columns = [{
  //   Header: 'Process Name',
  //   accessor: 'proc_name' // String-based value accessors!
  // }, {
  //   Header: 'Age',
  //   accessor: 'age',
  //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  // }, {
  //   id: 'friendName', // Required because our accessor is not a string
  //   Header: 'Friend Name',
  //   accessor: d => d.friend.name // Custom value accessors!
  // }, {
  //   Header: props => <span>Friend Age</span>, // Custom header components!
  //   accessor: 'friend.age'
  // }]
  const columns = [{
    Header: 'Computer',
    accessor: 'alias' // String-based value accessors!
  },
  {
    Header: 'Process Name',
    accessor: 'proc_name' // String-based value accessors!
  }, 
  {
    Header: 'Window Title',
    accessor: 'window_title' // String-based value accessors!
  }, 
  {
    Header: 'Duration',
    accessor: 'duration' // String-based value accessors!
  }, 
  {
    Header: 'Time',
    accessor: 'start_time' // String-based value accessors!
  }, 
  ]
 
  

  if (!props.items)
    return null;

  let activities = props.items
  
  if (activities.length === 0 )
    return null;


  // const activitiesAll = Object.keys(activities).map(
  //         (key,idx)=>{
  //           if (!activities[key])
  //             return null;
  //           // console.log(activities[key].login)
  //           return (
  //             <ActivityItem key={idx} item={activities[key]}>
  //             </ActivityItem>
  //           )
  //         }
  //       )

  return (
    <div className={styles.container}>
      <ReactTable
        data={data}
        columns={columns}
      />
    
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