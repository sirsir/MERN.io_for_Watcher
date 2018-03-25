import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
// import PostList from '../../components/PostList';
// import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

import styles from './ActivityListPage.css'

import ActivityListItem from '../../components/ActivityListItem';
import ActivitySummaryListItem from '../../components/ActivitySummaryListItem';

import ActivityListUser from '../..//components/ActivityListUser';

// Import Actions
import {  fetchActivities} from '../../ActivityActions';
import {  fetchUsers } from '../../../Users/UsersActions';

import { changeActivityView, changeSelectUser, changeSelectStartDate, changeSelectEndDate } from '../../../App/AppActions';


// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
import { getActivities } from '../../ActivityReducer';
import { getUsers } from '../../../Users/UsersReducer';
import { getActivityView, getSelectUser, getSelectStartDate, getSelectEndDate } from '../../../App/AppReducer';

import { DateRange  } from 'react-date-range';


class ActivityListPage extends Component {
  componentDidMount() {
    // this.props.dispatch(fetchActivities());
    this.props.dispatch(fetchUsers());
  }

  // handleDeletePost = post => {
  //   if (confirm('Do you want to delete this post')) { // eslint-disable-line
  //     this.props.dispatch(deletePostRequest(post));
  //   }
  // };

  handleChangeActivityView = mode => {
    
      this.props.dispatch(changeActivityView(mode));
    
  };

  handleChangeSelectUser = e => {
      let user = e.target.value;
      this.props.dispatch(changeSelectUser(user));
    
  };

  handleClickSearch = e => {
      // let user = e.target.value;
      this.props.dispatch(fetchActivities(this.props.selectUser,this.props.selectStartDate,this.props.selectEndDate));
    
  };

  handleSelectDateRange = range => {
    // console.log(range);
    // console.log(range.startDate.format())

    // let newStartDate = range.startDate.format()

    // this.props.dispatch(changeSelectStartDate("xxx"))

    // this.props.dispatch(changeSelectStartDate(newStartDate))

    this.props.dispatch(changeSelectStartDate(range.startDate.format('YYYY-MM-DD 00:00:00')))
    this.props.dispatch(changeSelectEndDate(range.endDate.format('YYYY-MM-DD 23:59:59')))
  };



  // handleAddPost = (name, title, content) => {
  //   this.props.dispatch(toggleAddPost());
  //   this.props.dispatch(addPostRequest({ name, title, content }));
  // };

  // <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
  // <a className={styles['add-post-button']} href="#" onClick={this.handleChangeActivityView("summary")}>Summary</a>     

  render() {
    // console.log(this.props)
    let activities = this.props.activityView==="summary"?
      <ActivitySummaryListItem items={this.props.activities} />
      :
      <ActivityListItem items={this.props.activities} />
    

    return (
      <div>
        <ActivityListUser users={this.props.users} handleChangeSelectUser={this.handleChangeSelectUser}/>
        <DateRange 
          onChange={e=>{this.handleSelectDateRange(e)}}
        />
        <button className='btn btn-primary btn-block' onClick={(e)=>this.handleClickSearch(e)}>
          Load <i className='fa fa-search'/>
        </button>
        
        <br/>
        <br/>
          {
            this.props.activityView === 'normal'?
              <button className='btn btn-success' onClick={(e)=>this.handleChangeActivityView("summary")}>
                Summary <i className='fa fa-list-alt'/>
              </button>
              :
              <button className='btn btn-info' onClick={(e)=>this.handleChangeActivityView("normal")}>
                Raw Data <i className='fa fa-chevron-circle-down'/>
              </button>               
          }                     
          {activities}        
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
  //       <PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />
  //     </div>
  //   );
  // }
}

// Actions required to provide data for this component to render in sever side.
// ActivityListPage.need = [() => { return fetchActivities(); }];
ActivityListPage.need = [() => { return fetchUsers(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    // showAddActivity: getShowAddActivity(state),
    activities: getActivities(state),
    users: getUsers(state),
    activityView: getActivityView(state),
    selectUser: getSelectUser(state),
    selectStartDate: getSelectStartDate(state),
    selectEndDate: getSelectEndDate(state),
  };
}

ActivityListPage.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  // })).isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

ActivityListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ActivityListPage);
