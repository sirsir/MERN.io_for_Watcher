import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
// import PostList from '../../components/PostList';
// import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

import ActivityList from '../../components/ActivityListItem';

// Import Actions
import {  fetchActivities } from '../../ActivityActions';
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
import { getActivities } from '../../ActivityReducer';

class ActivityListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchActivities());
  }

  // handleDeletePost = post => {
  //   if (confirm('Do you want to delete this post')) { // eslint-disable-line
  //     this.props.dispatch(deletePostRequest(post));
  //   }
  // };

  // handleAddPost = (name, title, content) => {
  //   this.props.dispatch(toggleAddPost());
  //   this.props.dispatch(addPostRequest({ name, title, content }));
  // };

  render() {
    return (
      <div>        
        <ActivityList items={this.props.activities} />
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
ActivityListPage.need = [() => { return fetchActivities(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    // showAddActivity: getShowAddActivity(state),
    activities: getActivities(state),
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
