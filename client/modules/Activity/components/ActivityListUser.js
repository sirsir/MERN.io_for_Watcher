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


  if (!props.users)
    return null;

  let users = ["all users",...props.users]
  // console.log("dddd")
  // console.log(users)
  
  if (users.length === 0 )
    return null;

  // xxxxx
  //     {
  //       JSON.stringify(activities)
  //     }
  //     yyy

  // const createUserSelect = (user,idx) => <option
  //     key={idx}
  //     value={user}
  //   >
  //   {user}
  //   </option>
      

  return (
    <div>      
      <select
          onChange={e => {props.handleChangeSelectUser(e)}}
        >
          {users.map((user,idx) => <option
            key={idx}
            value={user}
          >
          {user}
          </option>

            )}
        </select>
    
    </div>
  )
}


      // <ul>
      // {

      //   users.map(
      //     (user,idx) => (
      //       <li key={idx}>
      //         {user}
      //       </li>
      //     )          
      //   )
      // }
      // </ul>

// <select
//           onChange={event => this.setState({ value: event.target.value })}
//           value={this.state.value}
//         >
//           {this.state.options.map(createItem)}
//         </select>

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