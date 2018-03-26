/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	exports.changeActivityView = changeActivityView;
	exports.changeSelectUser = changeSelectUser;
	exports.changeSelectStartDate = changeSelectStartDate;
	exports.changeSelectEndDate = changeSelectEndDate;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	var CHANGE_ACTIVITY_VIEW = exports.CHANGE_ACTIVITY_VIEW = 'CHANGE_ACTIVITY_VIEW';
	var CHANGE_SELECT_USER = exports.CHANGE_SELECT_USER = 'CHANGE_SELECT_USER';
	var CHANGE_SELECT_START_DATE = exports.CHANGE_SELECT_START_DATE = 'CHANGE_SELECT_START_DATE';
	var CHANGE_SELECT_END_DATE = exports.CHANGE_SELECT_END_DATE = 'CHANGE_SELECT_END_DATE';
	
	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}
	
	function changeActivityView(activityView) {
	  return {
	    type: CHANGE_ACTIVITY_VIEW,
	    activityView: activityView
	  };
	}
	
	function changeSelectUser(selectUser) {
	  return {
	    type: CHANGE_SELECT_USER,
	    selectUser: selectUser
	  };
	}
	
	function changeSelectStartDate(selectStartDate) {
	  return {
	    type: CHANGE_SELECT_START_DATE,
	    selectStartDate: selectStartDate
	  };
	}
	
	function changeSelectEndDate(selectEndDate) {
	  return {
	    type: CHANGE_SELECT_END_DATE,
	    selectEndDate: selectEndDate
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(1);
	
	var _reactCssModules = __webpack_require__(72);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ActivityItem = {
	  "name": "_3u_FCZqBd8bzQrAxc8Lv8y",
	  "activity_item": "_3YDy59pihht102O6fyHtop",
	  "proc_name": "_2pr5lnOYyQ65hBlwRqx1Hp",
	  "window_title": "_2AbBzbKGoZX8OelfKU_uaw",
	  "start_time": "_2DN8-m8NSiA9CsyjFmp3xN",
	  "duration": "_1fz1ye6Ljogokz9NQOBGiU"
	};
	
	var _ActivityItem2 = _interopRequireDefault(_ActivityItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	var ActivityItem = function ActivityItem(item) {
	  // Activities = 
	
	
	  return _jsx('div', {
	    className: _ActivityItem2.default['activity_item']
	  }, void 0, _jsx('div', {
	    className: _ActivityItem2.default['name']
	  }, void 0, item.item.alias), _jsx('div', {
	    className: _ActivityItem2.default['proc_name']
	  }, void 0, item.item.proc_name), _jsx('div', {
	    className: _ActivityItem2.default['window_title']
	  }, void 0, item.item.window_title), _jsx('div', {
	    className: _ActivityItem2.default['duration']
	  }, void 0, item.item.duration), _jsx('div', {
	    className: _ActivityItem2.default['start_time']
	  }, void 0, item.item.start_time ? item.item.start_time.toString() : null));
	
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
	
	};
	
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
	
	exports.default = (0, _reactCssModules2.default)(ActivityItem, _ActivityItem2.default, { allowMultiple: true });

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSelectEndDate = exports.getSelectStartDate = exports.getSelectUser = exports.getActivityView = exports.getShowAddPost = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Import Actions
	
	
	var _AppActions = __webpack_require__(5);
	
	// Initial State
	var initialState = {
	  showAddPost: false,
	  activityView: 'normal',
	  selectUser: 'all users',
	  selectStartDate: '',
	  selectEndDate: ''
	};
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return _extends({}, state, {
	        showAddPost: !state.showAddPost
	
	      });
	
	    case _AppActions.CHANGE_ACTIVITY_VIEW:
	      return _extends({}, state, {
	        activityView: action.activityView
	      });
	
	    case _AppActions.CHANGE_SELECT_USER:
	      return _extends({}, state, {
	        selectUser: action.selectUser
	      });
	
	    case _AppActions.CHANGE_SELECT_START_DATE:
	      return _extends({}, state, {
	        selectStartDate: action.selectStartDate
	      });
	
	    case _AppActions.CHANGE_SELECT_END_DATE:
	      return _extends({}, state, {
	        selectEndDate: action.selectEndDate
	      });
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};
	var getActivityView = exports.getActivityView = function getActivityView(state) {
	  return state.app.activityView;
	};
	var getSelectUser = exports.getSelectUser = function getSelectUser(state) {
	  return state.app.selectUser;
	};
	var getSelectStartDate = exports.getSelectStartDate = function getSelectStartDate(state) {
	  return state.app.selectStartDate;
	};
	var getSelectEndDate = exports.getSelectEndDate = function getSelectEndDate(state) {
	  return state.app.selectEndDate;
	};
	// export const getActivityView = state => state.app.getActivityView;
	
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;
	
	var _apiCaller = __webpack_require__(12);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	
	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}
	
	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}
	
	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts').then(function (res) {
	      dispatch(addPosts(res.posts));
	    });
	  };
	}
	
	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}
	
	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(10);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };
	
	    case _PostActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };
	
	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};
	
	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(68);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(13);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	
	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// const config = {
	//   mongoURL: process.env.MONGO_URL || 'mongodb://192.168.1.53:27017/amivoice-watcher',
	//   port: process.env.PORT || 8000,
	// };
	
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/amivoice-watcher',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;
	
	var _reactIntl = __webpack_require__(1);
	
	var _intl = __webpack_require__(64);
	
	var _intl2 = _interopRequireDefault(_intl);
	
	var _intlLocalesSupported = __webpack_require__(65);
	
	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
	
	__webpack_require__(66);
	
	var _en = __webpack_require__(74);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _en3 = __webpack_require__(45);
	
	var _en4 = _interopRequireDefault(_en3);
	
	__webpack_require__(67);
	
	var _fr = __webpack_require__(75);
	
	var _fr2 = _interopRequireDefault(_fr);
	
	var _fr3 = __webpack_require__(46);
	
	var _fr4 = _interopRequireDefault(_fr3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];
	
	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};
	
	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)
	
	
	// need Intl polyfill, Intl not supported in Safari
	
	
	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}
	
	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	
	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }
	
	    return messages;
	  }, {});
	}
	
	// bring in intl polyfill, react-intl, and app-specific language data
	
	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);
	
	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_ACTIVITY = exports.ADD_ACTIVITIES = exports.ADD_ACTIVITY = undefined;
	exports.addActivity = addActivity;
	exports.addActivityRequest = addActivityRequest;
	exports.addActivities = addActivities;
	exports.fetchActivities = fetchActivities;
	exports.fetchActivity = fetchActivity;
	exports.deleteActivity = deleteActivity;
	exports.deleteActivityRequest = deleteActivityRequest;
	
	var _apiCaller = __webpack_require__(12);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_ACTIVITY = exports.ADD_ACTIVITY = 'ADD_ACTIVITY'; // Export Constants
	
	// Export Actions
	
	/////////////
	var ADD_ACTIVITIES = exports.ADD_ACTIVITIES = 'ADD_ACTIVITIES';
	var DELETE_ACTIVITY = exports.DELETE_ACTIVITY = 'DELETE_ACTIVITY';
	
	// Export Actions
	function addActivity(activity) {
	  return {
	    type: ADD_ACTIVITY,
	    activity: activity
	  };
	}
	
	function addActivityRequest(activity) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('activities', 'activity', {
	      activity: {
	        name: activity.name,
	        title: activity.title,
	        content: activity.content
	      }
	    }).then(function (res) {
	      return dispatch(addActivity(res.activity));
	    });
	  };
	}
	
	function addActivities(activities) {
	  return {
	    type: ADD_ACTIVITIES,
	    activities: activities
	  };
	}
	
	function fetchActivities(user, startDate, endDate) {
	  return function (dispatch) {
	    // return callApi('activities').then(res => {
	    // let body = {}
	
	    // if (user)
	    //   body = {...body, user}
	
	    // if (startDate)
	    //   body = {...body, startDate}
	    // if (endDate)
	    //   body = {...body, endDate}
	
	    var apiUrl = 'user_activity';
	
	    if (typeof user !== 'undefined' || typeof startDate !== 'undefined' || typeof endDate !== 'undefined') {
	      apiUrl += '?';
	
	      // if (typeof(user)!=='undefined'){
	      //   apiUrl += 'login='+user +'&'
	      // }
	
	      if (typeof user !== 'undefined') {
	        apiUrl += 'alias=' + user + '&';
	      }
	
	      if (typeof startDate !== 'undefined') {
	        apiUrl += 'startDate=' + startDate + '&';
	      }
	
	      if (typeof endDate !== 'undefined') {
	        apiUrl += 'endDate=' + endDate;
	      }
	
	      apiUrl = apiUrl.replace(/\?$/, '');
	    }
	
	    // return callApi('user_activity', 'get', body).then(res => {
	    return (0, _apiCaller2.default)(apiUrl).then(function (res) {
	      // console.log("ddddwwiikk")
	      // console.log(res)
	      dispatch(addActivities(res.activities));
	    });
	  };
	}
	
	function fetchActivity(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('activities/' + cuid).then(function (res) {
	      return dispatch(addActivity(res.activity));
	    });
	  };
	}
	
	function deleteActivity(cuid) {
	  return {
	    type: DELETE_ACTIVITY,
	    cuid: cuid
	  };
	}
	
	function deleteActivityRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('activities/' + cuid, 'delete').then(function () {
	      return dispatch(deleteActivity(cuid));
	    });
	  };
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getActivity = exports.getActivities = undefined;
	
	var _ActivityActions = __webpack_require__(17);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var ActivityReducer = function ActivityReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActivityActions.ADD_ACTIVITY:
	      return {
	        data: [action.activity].concat(_toConsumableArray(state.data))
	      };
	
	    case _ActivityActions.ADD_ACTIVITIES:
	      return {
	        data: action.activities
	      };
	
	    case _ActivityActions.DELETE_ACTIVITY:
	      return {
	        data: state.data.filter(function (activity) {
	          return activity.cuid !== action.cuid;
	        })
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getActivities = exports.getActivities = function getActivities(state) {
	  return state.activities.data;
	};
	
	// Get post by cuid
	var getActivity = exports.getActivity = function getActivity(state, cuid) {
	  return state.activities.data.filter(function (activity) {
	    return activity.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = ActivityReducer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _ActivityListPage = {
	  "add-post-button": "yhDrETym9vMPQqqqux4QU",
	  "text-align-center": "_2VsxNKPTHCVZsqXzEXjWMT"
	};
	
	var _ActivityListPage2 = _interopRequireDefault(_ActivityListPage);
	
	var _ActivityListItem = __webpack_require__(47);
	
	var _ActivityListItem2 = _interopRequireDefault(_ActivityListItem);
	
	var _ActivitySummaryListItem = __webpack_require__(49);
	
	var _ActivitySummaryListItem2 = _interopRequireDefault(_ActivitySummaryListItem);
	
	var _ActivityListUser = __webpack_require__(48);
	
	var _ActivityListUser2 = _interopRequireDefault(_ActivityListUser);
	
	var _ActivityActions = __webpack_require__(17);
	
	var _UsersActions = __webpack_require__(24);
	
	var _AppActions = __webpack_require__(5);
	
	var _ActivityReducer = __webpack_require__(18);
	
	var _UsersReducer = __webpack_require__(25);
	
	var _AppReducer = __webpack_require__(9);
	
	var _reactDateRange = __webpack_require__(73);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	// import PostList from '../../components/PostList';
	// import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';
	
	// Import Actions
	
	
	// import { toggleAddPost } from '../../../App/AppActions';
	
	// Import Selectors
	// import { getShowAddPost } from '../../../App/AppReducer';
	
	
	var _ref2 = _jsx('i', {
	  className: 'fa fa-search'
	});
	
	var _ref3 = _jsx('br', {});
	
	var _ref4 = _jsx('br', {});
	
	var _ref5 = _jsx('i', {
	  className: 'fa fa-list-alt'
	});
	
	var _ref6 = _jsx('i', {
	  className: 'fa fa-chevron-circle-down'
	});
	
	var ActivityListPage = function (_Component) {
	  _inherits(ActivityListPage, _Component);
	
	  function ActivityListPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ActivityListPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActivityListPage.__proto__ || Object.getPrototypeOf(ActivityListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangeActivityView = function (mode) {
	
	      _this.props.dispatch((0, _AppActions.changeActivityView)(mode));
	    }, _this.handleChangeSelectUser = function (e) {
	      var user = e.target.value;
	      _this.props.dispatch((0, _AppActions.changeSelectUser)(user));
	    }, _this.handleClickSearch = function (e) {
	      // let user = e.target.value;
	      _this.props.dispatch((0, _ActivityActions.fetchActivities)(_this.props.selectUser, _this.props.selectStartDate, _this.props.selectEndDate));
	    }, _this.handleSelectDateRange = function (range) {
	      // console.log(range);
	      // console.log(range.startDate.format())
	
	      // let newStartDate = range.startDate.format()
	
	      // this.props.dispatch(changeSelectStartDate("xxx"))
	
	      // this.props.dispatch(changeSelectStartDate(newStartDate))
	
	      _this.props.dispatch((0, _AppActions.changeSelectStartDate)(range.startDate.format('YYYY-MM-DD 00:00:00')));
	      _this.props.dispatch((0, _AppActions.changeSelectEndDate)(range.endDate.format('YYYY-MM-DD 23:59:59')));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ActivityListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // this.props.dispatch(fetchActivities());
	      this.props.dispatch((0, _UsersActions.fetchUsers)());
	    }
	
	    // handleDeletePost = post => {
	    //   if (confirm('Do you want to delete this post')) { // eslint-disable-line
	    //     this.props.dispatch(deletePostRequest(post));
	    //   }
	    // };
	
	  }, {
	    key: 'render',
	
	
	    // handleAddPost = (name, title, content) => {
	    //   this.props.dispatch(toggleAddPost());
	    //   this.props.dispatch(addPostRequest({ name, title, content }));
	    // };
	
	    // <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
	    // <a className={styles['add-post-button']} href="#" onClick={this.handleChangeActivityView("summary")}>Summary</a>     
	
	    value: function render() {
	      var _this2 = this;
	
	      // console.log(this.props)
	      var activities = this.props.activityView === "summary" ? _jsx(_ActivitySummaryListItem2.default, {
	        items: this.props.activities
	      }) : _jsx(_ActivityListItem2.default, {
	        items: this.props.activities
	      });
	
	      return _jsx('div', {}, void 0, _jsx(_ActivityListUser2.default, {
	        users: this.props.users,
	        handleChangeSelectUser: this.handleChangeSelectUser
	      }), _jsx(_reactDateRange.DateRange, {
	        onChange: function onChange(e) {
	          _this2.handleSelectDateRange(e);
	        }
	      }), _jsx('button', {
	        className: 'btn btn-primary btn-block',
	        onClick: function onClick(e) {
	          return _this2.handleClickSearch(e);
	        }
	      }, void 0, 'Load ', _ref2), _ref3, _ref4, this.props.activityView === 'normal' ? _jsx('button', {
	        className: 'btn btn-success',
	        onClick: function onClick(e) {
	          return _this2.handleChangeActivityView("summary");
	        }
	      }, void 0, 'Summary ', _ref5) : _jsx('button', {
	        className: 'btn btn-info',
	        onClick: function onClick(e) {
	          return _this2.handleChangeActivityView("normal");
	        }
	      }, void 0, 'Raw Data ', _ref6), activities);
	    }
	
	    // render() {
	    //   return (
	    //     <div>
	    //       <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
	    //       <PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />
	    //     </div>
	    //   );
	    // }
	
	  }]);
	
	  return ActivityListPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	// ActivityListPage.need = [() => { return fetchActivities(); }];
	
	
	ActivityListPage.need = [function () {
	  return (0, _UsersActions.fetchUsers)();
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    // showAddActivity: getShowAddActivity(state),
	    activities: (0, _ActivityReducer.getActivities)(state),
	    users: (0, _UsersReducer.getUsers)(state),
	    activityView: (0, _AppReducer.getActivityView)(state),
	    selectUser: (0, _AppReducer.getSelectUser)(state),
	    selectStartDate: (0, _AppReducer.getSelectStartDate)(state),
	    selectEndDate: (0, _AppReducer.getSelectEndDate)(state)
	  };
	}
	
	ActivityListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ActivityListPage);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(76);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(78);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(77);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.switchLanguage = switchLanguage;
	
	var _setup = __webpack_require__(16);
	
	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	
	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	exports.PostDetailPage = PostDetailPage;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(7);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(1);
	
	var _PostListItem = {
	  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
	  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
	  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
	  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
	  "post-action": "_3S84cKmlvGO49pK1biPlXr",
	  "divider": "y2SIF3ydn02JYMgeklO7S",
	  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _PostActions = __webpack_require__(10);
	
	var _PostReducer = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'by'
	});
	
	function PostDetailPage(props) {
	  return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	    title: props.post.title
	  }), _jsx('div', {
	    className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail']
	  }, void 0, _jsx('h3', {
	    className: _PostListItem2.default['post-title']
	  }, void 0, props.post.title), _jsx('p', {
	    className: _PostListItem2.default['author-name']
	  }, void 0, _ref, ' ', props.post.name), _jsx('p', {
	    className: _PostListItem2.default['post-desc']
	  }, void 0, props.post.content)));
	}
	
	// Actions required to provide data for this component to render in server side.
	PostDetailPage.need = [function (params) {
	  return (0, _PostActions.fetchPost)(params.cuid);
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    post: (0, _PostReducer.getPost)(state, props.params.cuid)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _PostList = __webpack_require__(55);
	
	var _PostList2 = _interopRequireDefault(_PostList);
	
	var _PostCreateWidget = __webpack_require__(54);
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	var _PostActions = __webpack_require__(10);
	
	var _AppActions = __webpack_require__(5);
	
	var _AppReducer = __webpack_require__(9);
	
	var _PostReducer = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PostListPage = function (_Component) {
	  _inherits(PostListPage, _Component);
	
	  function PostListPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostListPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostListPage.__proto__ || Object.getPrototypeOf(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
	      if (confirm('Do you want to delete this post')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
	      }
	    }, _this.handleAddPost = function (name, title, content) {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	      _this.props.dispatch((0, _PostActions.addPostRequest)({ name: name, title: title, content: content }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PostActions.fetchPosts)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_PostCreateWidget2.default, {
	        addPost: this.handleAddPost,
	        showAddPost: this.props.showAddPost
	      }), _jsx(_PostList2.default, {
	        handleDeletePost: this.handleDeletePost,
	        posts: this.props.posts
	      }));
	    }
	  }]);
	
	  return PostListPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	
	
	PostListPage.need = [function () {
	  return (0, _PostActions.fetchPosts)();
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    showAddPost: (0, _AppReducer.getShowAddPost)(state),
	    posts: (0, _PostReducer.getPosts)(state)
	  };
	}
	
	PostListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ADD_USERS = undefined;
	exports.addUsers = addUsers;
	exports.fetchUsers = fetchUsers;
	
	var _apiCaller = __webpack_require__(12);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_USERS = exports.ADD_USERS = 'ADD_USERS';
	
	// Export Actions
	/////////////
	function addUsers(users) {
	  return {
	    type: ADD_USERS,
	    users: users
	  };
	}
	
	function fetchUsers() {
	  return function (dispatch) {
	    // return callApi('activities').then(res => {
	    // return callApi('user_activity?distinct=login').then(res => {
	    return (0, _apiCaller2.default)('user_activity?distinct=alias').then(function (res) {
	      // console.log("ddddwwiikk")
	      // console.log(res)
	      var arrOut = res.users.filter(function (u) {
	        return !/^_/.test(u);
	      });
	      dispatch(addUsers(arrOut));
	    });
	  };
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUsers = undefined;
	
	var _UsersActions = __webpack_require__(24);
	
	// Initial State
	var initialState = { data: [] }; // Import Actions
	
	
	var UsersReducer = function UsersReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _UsersActions.ADD_USERS:
	      return {
	        data: action.users
	      };
	
	    default:
	      return state;
	  }
	};
	
	// export const getUsers = state => {state.users.data};
	var getUsers = exports.getUsers = function getUsers(state) {
	  return state.users.data;
	};
	
	exports.default = UsersReducer;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(4);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("react-table");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _reactRedux = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _App = __webpack_require__(50);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Activity from './modules/Activity/Activity'
	
	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}
	
	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(23);
	  __webpack_require__(22);
	  __webpack_require__(19);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(23).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/posts/:slug-:cuid',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(22).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/activity',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(19).default);
	    }).bind(null, __webpack_require__));
	  }
	}));
	
	// Route
	//       path="/activityy"
	//       getComponent={(nextState, cb) => {
	//         require.ensure([], require => {
	//           cb(null, require('./modules/Activity/Activity').default);
	//         });
	//       }}
	//     />
	
	
	// <Route
	//       path="/activityy"
	//       component={Activity}
	//     />

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(30);
	
	var _reduxThunk = __webpack_require__(79);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(20);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(57);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  _post2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	
	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';
	
	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';
	
	    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
	
	    _post2.default.create([post1, post2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};
	
	var _post = __webpack_require__(26);
	
	var _post2 = _interopRequireDefault(_post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(6);
	
	var _post = __webpack_require__(58);
	
	var PostController = _interopRequireWildcard(_post);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/posts').get(PostController.getPosts);
	
	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);
	
	// Add a new Post
	router.route('/posts').post(PostController.addPost);
	
	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);
	
	exports.default = router;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(6);
	
	var _userActivity = __webpack_require__(59);
	
	var UserActivityController = _interopRequireWildcard(_userActivity);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	// router.route('/posts').get(PostController.getPosts);
	router.route('/user_activity').get(UserActivityController.getActivity);
	// router.route('/user_activity/field').get(UserActivityController.getField);
	router.route('/user_activity').post(UserActivityController.addActivity);
	
	// Get one post by cuid
	// router.route('/posts/:cuid').get(PostController.getPost);
	
	// Add a new Post
	// router.route('/posts').post(PostController.addPost);
	
	// Delete a post by cuid
	// router.route('/posts/:cuid').delete(PostController.deletePost);
	
	exports.default = router;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(63);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(15);
	var cssnext = __webpack_require__(69);
	var postcssFocus = __webpack_require__(70);
	var postcssReporter = __webpack_require__(71);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  module: {
	    loaders: [{
	      test: /react-table\.css$/,
	      loader: ['style-loader', 'css-loader']
	    }, {
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'Amivoice Watcher - User Activity Report',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); // import React, { Component, PropTypes } from 'react';
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
	
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(1);
	
	var _ActivityItem = __webpack_require__(8);
	
	var _ActivityItem2 = _interopRequireDefault(_ActivityItem);
	
	var _ActivityListItem = {
	  "container": "_2RgJ7whnsUlnTTOEfa6Mq_"
	};
	
	var _ActivityListItem2 = _interopRequireDefault(_ActivityListItem);
	
	var _reactTable = __webpack_require__(29);
	
	var _reactTable2 = _interopRequireDefault(_reactTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	var Activity = function Activity(props) {
	  // Activities = 
	  var data = props.items;
	
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
	  var columns = [{
	    Header: 'Computer',
	    accessor: 'alias' // String-based value accessors!
	  }, {
	    Header: 'Process Name',
	    accessor: 'proc_name' // String-based value accessors!
	  }, {
	    Header: 'Window Title',
	    accessor: 'window_title' // String-based value accessors!
	  }, {
	    Header: 'Duration',
	    accessor: 'duration' // String-based value accessors!
	  }, {
	    Header: 'Time',
	    accessor: 'start_time' // String-based value accessors!
	  }];
	
	  if (!props.items) return null;
	
	  var activities = props.items;
	
	  if (activities.length === 0) return null;
	
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
	
	  return _jsx('div', {
	    className: _ActivityListItem2.default.container
	  }, void 0, _jsx(_reactTable2.default, {
	    data: data,
	    columns: columns
	  }));
	};
	
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
	
	exports.default = Activity;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(1);
	
	var _ActivityItem = __webpack_require__(8);
	
	var _ActivityItem2 = _interopRequireDefault(_ActivityItem);
	
	var _ActivityListItem = {
	  "container": "_2RgJ7whnsUlnTTOEfa6Mq_"
	};
	
	var _ActivityListItem2 = _interopRequireDefault(_ActivityListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // import React, { Component, PropTypes } from 'react';
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
	
	
	// Import Style
	
	
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
	
	var Activity = function Activity(props) {
	  // Activities = 
	
	
	  if (!props.users) return null;
	
	  var users = ["all users"].concat(_toConsumableArray(props.users));
	  // console.log("dddd")
	  // console.log(users)
	
	  if (users.length === 0) return null;
	
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
	
	
	  return _jsx('div', {}, void 0, _jsx('select', {
	    onChange: function onChange(e) {
	      props.handleChangeSelectUser(e);
	    }
	  }, void 0, users.map(function (user, idx) {
	    return _jsx('option', {
	      value: user
	    }, idx, user);
	  })));
	};
	
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
	
	exports.default = Activity;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(1);
	
	var _ActivityItem = __webpack_require__(8);
	
	var _ActivityItem2 = _interopRequireDefault(_ActivityItem);
	
	var _ActivityListItem = {
	  "container": "_2RgJ7whnsUlnTTOEfa6Mq_"
	};
	
	var _ActivityListItem2 = _interopRequireDefault(_ActivityListItem);
	
	var _reactTable = __webpack_require__(29);
	
	var _reactTable2 = _interopRequireDefault(_reactTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import stylesBootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
	// import stylesBootstrap from 'bootstrap/dist/css/bootstrap.css';
	
	// require('bootstrap/dist/css/bootstrap.css');
	// require('../../../node_modules/bootstrap/dist/css/bootstrap.css');
	// require('../../node_modules/bootstrap/dist/css/bootstrap-theme.css');
	
	var fn_ActivitySummaryListItem = {
	  formatDuration: function formatDuration(sec) {
	    var date = new Date(null);
	    date.setSeconds(sec); // specify value for SECONDS here
	    var result = date.toISOString().substr(11, 8);
	
	    var strOut = result.split(":").map(function (strNum, idx) {
	      // if (strNum==="00")
	      //   return 0
	
	      switch (idx) {
	        case 0:
	          return strNum + " hr";
	          break;
	        case 1:
	          return strNum + " min";
	          break;
	        case 2:
	          return strNum + " sec";
	          break;
	      }
	    }).filter(function (val) {
	      return val;
	    }).join(" ");
	
	    // console.log(strOut)
	
	    return strOut;
	  }
	  // function Activity(props) {
	  //   return (
	  //     <div>
	  //       xxxxx
	
	  //     </div>
	  //   );
	  // }
	};var summarize = function summarize(activities) {
	  var activitiesX = activities.map(function (act) {
	    var key = JSON.stringify({ proc_name: act.proc_name, window_title: act.window_title });
	    var objOut = {};
	    objOut[key] = act;
	    return objOut;
	  });
	
	  activitiesX = activitiesX.reduce(function (objOut, objIn) {
	    // console.log(objIn)
	
	    var key = Object.keys(objIn)[0];
	    var val = objIn[key];
	    // console.log(JSON.stringify(objOut))
	    // console.log(JSON.stringify(objOut[key]))
	    // console.log(val.duration)
	
	    if (objOut.hasOwnProperty(key)) {
	      // console.log(objOut[key])
	      var duration = val.duration ? objOut[key].duration + val.duration : objOut[key].duration;
	      // console.log(duration)
	      // console.log(objOut[key].duration)
	      objOut[key] = _extends({}, objOut[key], { duration: duration });
	    } else {
	      objOut[key] = _extends({}, val);
	      // let {start_time, x} = {...val}
	      // objOut[key] = x
	      objOut[key].start_time = undefined;
	
	      objOut[key].duration = objOut[key].duration ? objOut[key].duration : 0;
	
	      // console.log('xxxxx')
	      // console.log(objOut[key])
	    }
	    // console.log('xxxxx')
	    // console.log(JSON.stringify(objOut[key]))
	
	
	    return objOut;
	  }, {});
	
	  // console.log('zzzzzzzzz')
	  // console.log(activitiesX)
	
	
	  Object.keys(activitiesX).forEach(function (key) {
	    var act = activitiesX[key];
	    if (!act.duration) return;
	
	    act.duration = fn_ActivitySummaryListItem.formatDuration(act.duration);
	  });
	
	  return activitiesX;
	};
	
	var Activity = function Activity(props) {
	  // Activities = 
	
	
	  if (!props.items) return null;
	
	  var activities = props.items;
	
	  if (activities.length === 0) return null;
	
	  activities = summarize(activities);
	
	  // console.log(activities)
	
	  // const data = Object.values(activities)
	  var data = Object.keys(activities).map(function (key) {
	    return activities[key];
	  });
	
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
	  var columns = [{
	    Header: 'Computer',
	    accessor: 'alias' // String-based value accessors!
	  }, {
	    Header: 'Process Name',
	    accessor: 'proc_name' // String-based value accessors!
	  }, {
	    Header: 'Window Title',
	    accessor: 'window_title' // String-based value accessors!
	  }, {
	    Header: 'Total Duration',
	    accessor: 'duration' // String-based value accessors!
	  }];
	
	  // const activitiesRender = Object.keys(activities).map(
	  //         (key,idx)=>{
	  //           if (!activities[key])
	  //             return null;
	  //           console.log(activities[key].login)
	  //           return (
	  //             <ActivityItem key={idx} item={activities[key]}>
	  //             </ActivityItem>
	  //           )
	  //         }
	  //       )
	
	  return _jsx('div', {
	    className: _ActivityListItem2.default.container
	  }, void 0, _jsx(_reactTable2.default, {
	    data: data,
	    columns: columns
	  }));
	};
	
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
	
	exports.default = Activity;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(7);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(20);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(52);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(51);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _AppActions = __webpack_require__(5);
	
	var _IntlActions = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	// import Activity from '../Activity/Activity';
	
	// Import Actions
	
	
	var _ref = _jsx(_DevTools2.default, {});
	
	var _ref2 = _jsx(_Footer2.default, {});
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.toggleAddPostSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	    };
	
	    _this.state = { isMounted: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'MERN Starter - Blog App',
	        titleTemplate: '%s - Blog App',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Header2.default, {
	        switchLanguage: function switchLanguage(lang) {
	          return _this2.props.dispatch((0, _IntlActions.switchLanguage)(lang));
	        },
	        intl: this.props.intl,
	        toggleAddPost: this.toggleAddPostSection
	      }), _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.children), _ref2));
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	// Import Images
	
	
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";
	
	var _headerBk2 = _interopRequireDefault(_headerBk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('p', {}, void 0, '\xA9 2016 \xB7 Hashnode \xB7 LinearBytes Inc.');
	
	var _ref2 = _jsx('p', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'twitterMessage'
	}), ' : ', _jsx('a', {
	  href: 'https://twitter.com/@mern_io',
	  target: '_Blank'
	}, void 0, '@mern_io'));
	
	function Footer() {
	  return _jsx('div', {
	    style: { background: '#FFF url(' + _headerBk2.default + ') center' },
	    className: _Footer2.default.footer
	  }, void 0, _ref, _ref2);
	}
	
	exports.default = Footer;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Header = Header;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Header = {
	  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
	  "content": "_1eavAvnySzoZc5rld6Q4pa",
	  "site-title": "UfFn6muOcOBjkVI5_yltp",
	  "add-post-button": "CkTz6a2gQTJjwXIEAlTSk",
	  "language-switcher": "_3bviQya5ZWCvWr6lGdfO9h",
	  "selected": "_3IRlmCpgSZBcTGVIGHvgaI"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'switchLanguage'
	}));
	
	var _ref2 = _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'siteTitle'
	}));
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'addPost'
	});
	
	function Header(props, context) {
	  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
	    return _jsx('li', {
	      onClick: function onClick() {
	        return props.switchLanguage(lang);
	      },
	      className: lang === props.intl.locale ? _Header2.default.selected : ''
	    }, lang, lang);
	  });
	
	  return _jsx('div', {
	    className: _Header2.default.header
	  }, void 0, _jsx('div', {
	    className: _Header2.default['language-switcher']
	  }, void 0, _jsx('ul', {}, void 0, _ref, languageNodes)), _jsx('div', {
	    className: _Header2.default.content
	  }, void 0, _jsx('h1', {
	    className: _Header2.default['site-title']
	  }, void 0, _ref2), context.router.isActive('/', true) ? _jsx('a', {
	    className: _Header2.default['add-post-button'],
	    href: '#',
	    onClick: props.toggleAddPost
	  }, void 0, _ref3) : null));
	}
	
	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = Header;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _setup = __webpack_require__(16);
	
	var _IntlActions = __webpack_require__(21);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var initLocale = global.navigator && global.navigator.language || 'en';
	
	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});
	
	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line
	
	
	        return _extends({}, state, actionWithoutType);
	      }
	
	    default:
	      return state;
	  }
	};
	
	exports.default = IntlReducer;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostCreateWidget = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _PostCreateWidget = {
	  "form": "_1HNxVmVCIfsWU6Q22cRSd7",
	  "form-content": "VlHIHfXe5nkoruuc0N8pJ",
	  "form-title": "_32cczwmKrlcNdTsvCr-oBL",
	  "form-field": "_1srubE9zVaJuCqkgKCA3lY",
	  "post-submit-button": "_2m9Bzr_sJcQ7FK3o3X0PBL",
	  "appear": "_30KT3DYyUvGj_5sBYnixvw"
	};
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'createNewPost'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'submit'
	});
	
	var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
	  _inherits(PostCreateWidget, _Component);
	
	  function PostCreateWidget() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostCreateWidget);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCreateWidget.__proto__ || Object.getPrototypeOf(PostCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
	      var nameRef = _this.refs.name;
	      var titleRef = _this.refs.title;
	      var contentRef = _this.refs.content;
	      if (nameRef.value && titleRef.value && contentRef.value) {
	        _this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
	        nameRef.value = titleRef.value = contentRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostCreateWidget, [{
	    key: 'render',
	    value: function render() {
	      var cls = _PostCreateWidget2.default.form + ' ' + (this.props.showAddPost ? _PostCreateWidget2.default.appear : '');
	      return _jsx('div', {
	        className: cls
	      }, void 0, _jsx('div', {
	        className: _PostCreateWidget2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _PostCreateWidget2.default['form-title']
	      }, void 0, _ref2), _react2.default.createElement('input', { placeholder: this.props.intl.messages.authorName, className: _PostCreateWidget2.default['form-field'], ref: 'name' }), _react2.default.createElement('input', { placeholder: this.props.intl.messages.postTitle, className: _PostCreateWidget2.default['form-field'], ref: 'title' }), _react2.default.createElement('textarea', { placeholder: this.props.intl.messages.postContent, className: _PostCreateWidget2.default['form-field'], ref: 'content' }), _jsx('a', {
	        className: _PostCreateWidget2.default['post-submit-button'],
	        href: '#',
	        onClick: this.addPost
	      }, void 0, _ref3)));
	    }
	  }]);
	
	  return PostCreateWidget;
	}(_react.Component);
	
	exports.default = (0, _reactIntl.injectIntl)(PostCreateWidget);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Components
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PostListItem = __webpack_require__(56);
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function PostList(props) {
	  return _jsx('div', {
	    className: 'listView'
	  }, void 0, props.posts.map(function (post) {
	    return _jsx(_PostListItem2.default, {
	      post: post,
	      onDelete: function onDelete() {
	        return props.handleDeletePost(post.cuid);
	      }
	    }, post.cuid);
	  }));
	}
	
	exports.default = PostList;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactIntl = __webpack_require__(1);
	
	var _PostListItem = {
	  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
	  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
	  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
	  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
	  "post-action": "_3S84cKmlvGO49pK1biPlXr",
	  "divider": "y2SIF3ydn02JYMgeklO7S",
	  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'by'
	});
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'deletePost'
	});
	
	function PostListItem(props) {
	  return _jsx('div', {
	    className: _PostListItem2.default['single-post']
	  }, void 0, _jsx('h3', {
	    className: _PostListItem2.default['post-title']
	  }, void 0, _jsx(_reactRouter.Link, {
	    to: '/posts/' + props.post.slug + '-' + props.post.cuid
	  }, void 0, props.post.title)), _jsx('p', {
	    className: _PostListItem2.default['author-name']
	  }, void 0, _ref, ' ', props.post.name), _jsx('p', {
	    className: _PostListItem2.default['post-desc']
	  }, void 0, props.post.content), _jsx('p', {
	    className: _PostListItem2.default['post-action']
	  }, void 0, _jsx('a', {
	    href: '#',
	    onClick: props.onDelete
	  }, void 0, _ref2)), _jsx('hr', {
	    className: _PostListItem2.default.divider
	  }));
	}
	
	exports.default = PostListItem;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(30);
	
	var _AppReducer = __webpack_require__(9);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(11);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _IntlReducer = __webpack_require__(53);
	
	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);
	
	var _ActivityReducer = __webpack_require__(18);
	
	var _ActivityReducer2 = _interopRequireDefault(_ActivityReducer);
	
	var _UsersReducer = __webpack_require__(25);
	
	var _UsersReducer2 = _interopRequireDefault(_UsersReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  intl: _IntlReducer2.default,
	  activities: _ActivityReducer2.default,
	  users: _UsersReducer2.default
	});
	
	// Import Reducers

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	
	var _post = __webpack_require__(26);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(27);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(28);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(31);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}
	
	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }
	
	  var newPost = new _post2.default(req.body.post);
	
	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);
	
	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}
	
	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}
	
	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	
	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.getActivity = getActivity;
	exports.getDistinct = getDistinct;
	exports.addActivity = addActivity;
	
	var _userActivity = __webpack_require__(61);
	
	var _userActivity2 = _interopRequireDefault(_userActivity);
	
	var _macAddress = __webpack_require__(60);
	
	var _macAddress2 = _interopRequireDefault(_macAddress);
	
	var _cuid = __webpack_require__(27);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(28);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(31);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(14);
	
	var _sugar = __webpack_require__(80);
	
	var _sugar2 = _interopRequireDefault(_sugar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Activity from '../../client/modules/Activity/Activity';
	
	// var MAC_ALIAS_MAPPING = {}
	
	var userActivityFn = {
	  requestPara2Objects: function requestPara2Objects(strIn) {
	    var objOut = {};
	
	    var flag_act = false;
	    var flag_idle = false;
	    var x_newline = "\n";
	    var x_tab = "\t";
	
	    objOut = {
	      "login": "",
	      "user_id": 0,
	      "remote_ip": "xxx",
	      "mac": "",
	      "activities": [],
	      "idles": []
	    };
	
	    strIn.split(x_newline).forEach(function (l) {
	      var line = l.trim();
	      if (line === "") {
	        return;
	      }
	
	      switch (true) {
	        case /^#LoginName=/.test(line):
	          objOut["login"] = line.replace(/^#LoginName=*/, "");
	
	          // user = User.select(:id).where({login: mapped_result[:login]}).first
	          // unless user.nil?
	          //   mapped_result[:user_id] = user.id
	          // end
	
	          break;
	        case /^#MacAddress=/.test(line):
	          objOut["mac_addr"] = line.replace(/^#MacAddress=*/, "");
	          break;
	        case /^__AGENT_ACTIVITY__/.test(line):
	          flag_act = true;
	          flag_idle = false;
	          break;
	        case /^__IDLE_TIME__/.test(line):
	          flag_act = false;
	          flag_idle = true;
	          break;
	        case /^__BROWSER_HISTORY__/.test(line):
	          // do nothing
	          break;
	        case /^__WATCHER__/.test(line):
	          // do nothing
	          break;
	        case /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(line):
	          switch (true) {
	            case flag_act:
	              objOut["activities"].push(line.split(x_tab));
	              break;
	            case flag_idle:
	              objOut["idles"].push(line.split(x_tab));
	              break;
	          }
	
	          break;
	        default:
	          console.log("Activity log does not match - " + JSON.stringify(line));
	      }
	    });
	
	    var objOuts = [];
	
	    objOut["activities"].forEach(function (act) {
	      var activity = {
	        "start_time": act[0],
	        "duration": act[1],
	        "proc_name": act[2],
	        "window_title": act[3],
	        "login": objOut["login"] || "",
	        "user_id": objOut["user_id"] || "",
	        "remote_ip": objOut["remote_ip"] || "",
	        "mac_addr": objOut["mac_addr"] || "",
	        "proc_exec_name": act[4] || ""
	      };
	
	      objOuts.push(activity);
	    });
	
	    return objOuts;
	  },
	
	  mapping_Mac_Alias: {},
	
	  get_MAC_ALIAS_MAPPING: function get_MAC_ALIAS_MAPPING() {
	    var objOut = {};
	    _macAddress2.default.find().exec(function (err, macAddresses) {
	      if (err) {
	        console.log('Can NOT get_MAC_ALIAS_MAPPING');
	        return;
	      }
	
	      // console.log(macAddresses)
	
	      macAddresses.forEach(function (pair) {
	        var objPair = pair.toObject();
	
	        // console.log(objPair)
	
	        objOut[objPair.mac] = objPair.alias;
	      });
	    });
	
	    // console.log(objOut)
	    return objOut;
	  },
	
	  getAlias: function getAlias(act) {
	    if (Object.keys(userActivityFn.mapping_Mac_Alias).length === 0) {
	      userActivityFn.mapping_Mac_Alias = userActivityFn.get_MAC_ALIAS_MAPPING();
	    }
	
	    if (userActivityFn.mapping_Mac_Alias[act.mac_addr]) {
	      return userActivityFn.mapping_Mac_Alias[act.mac_addr];
	    }
	
	    return act.login || "UNKNOWN";
	  }
	
	  // export function show(req, res) {
	  //   UserActivity.find().exec((err, items) => {
	  //     if (err) {
	  //       res.status(500).send(err);
	  //     }
	  //     // res.json({ items });
	
	  //     // const appString = renderToString(<Activity/>);
	
	  //     const appString = renderToString(<Activity {...items} />);
	
	  //     // res
	  //     //   .set('Content-Type', 'text/html')
	  //     //   .status(200)
	  //     //   .end(appString);
	
	  //     res.render(render(<Activity {...items} />))
	
	  //     // res.render('index.js', {
	  //     //   react: appString
	  //     // })
	
	  //     // res
	  //     //   .set('Content-Type', 'text/html')
	  //     //   .status(200)
	  //     //   .end(renderFullPage(initialView, finalState));
	
	  //     // res.send(Activity({
	  //     //   body: appString,
	  //     //   title: 'Hello World from the server'
	  //     // }));
	
	  //     // res.send(Activity({
	  //     //   body: 'xxss',
	  //     //   title: 'Hello World from the server'
	  //     // }));
	
	
	  //   });
	  // }
	
	  /**
	   * Get all posts
	   * @param req
	   * @param res
	   * @returns void
	   */
	  // export function getPosts(req, res) {
	  //   Post.find().sort('-dateAdded').exec((err, posts) => {
	  //     if (err) {
	  //       res.status(500).send(err);
	  //     }
	  //     res.json({ posts });
	  //   });
	  // }
	
	
	};function getActivity(req, res) {
	  console.log("function getActivity(req, res)");
	  console.log(req.query);
	  // console.log(req)
	
	  if (req.query.distinct) {
	    getDistinct(req, res);
	    return;
	  }
	
	  //getActivityByCondition()
	  var query = {};
	  if (typeof req.query.login !== 'undefined' && req.query.login !== 'all users') {
	    query = { login: req.query.login };
	  } else if (typeof req.query.alias !== 'undefined' && req.query.alias !== 'all users') {
	    if (Object.keys(userActivityFn.mapping_Mac_Alias).length === 0) {
	      userActivityFn.mapping_Mac_Alias = userActivityFn.get_MAC_ALIAS_MAPPING();
	    }
	
	    var mac = "";
	    Object.keys(userActivityFn.mapping_Mac_Alias).forEach(function (macKey) {
	      if (userActivityFn.mapping_Mac_Alias[macKey] === req.query.alias) {
	        mac = macKey;
	        return;
	      }
	    });
	
	    if (mac !== "") {
	      query = { mac_addr: mac };
	    }
	  }
	
	  var query_time = {};
	  if (req.query.startDate) {
	    query_time = { $gte: req.query.startDate };
	  }
	
	  if (req.query.endDate) {
	    query_time = _extends({}, query_time, { $lte: req.query.endDate });
	  }
	
	  if (Object.keys(query_time).length > 0) {
	    query = _extends({}, query, { start_time: query_time });
	  }
	
	  // SET SORT METHOD
	  var sortby = '-start_time';
	
	  _userActivity2.default.find(query).limit(1000).sort(sortby).exec(function (err, activities) {
	    if (err) {
	      res.status(500).send(err);
	      return;
	    }
	
	    var arrOut = activities.map(function (act, idx) {
	      var actOut = act.toObject();
	      if (actOut.start_time) {
	        // activities[idx].start_time = Sugar.Date.format(new Date(act.start_time), '{hh}:{mm}')
	        var dt = _sugar2.default.Date.format(new Date(act.start_time), '%c');
	        // activities[idx].start_time = dt
	        actOut.start_time = dt;
	
	        // console.log(dt)
	        // console.log(actOut.start_time)
	      }
	
	      actOut.alias = userActivityFn.getAlias(actOut);
	
	      return actOut;
	    });
	
	    // console.log(activities[0].start_time)
	
	    res.json({ activities: arrOut });
	  });
	}
	
	function getDistinct(req, res) {
	  var field = req.query.distinct;
	  // console.log(field)
	
	  if (!field) {
	    res.status(403).end();
	    return;
	  }
	  // console.log(field)
	
	  switch (field) {
	    case 'alias':
	      if (Object.keys(userActivityFn.mapping_Mac_Alias).length === 0) {
	        userActivityFn.mapping_Mac_Alias = userActivityFn.get_MAC_ALIAS_MAPPING();
	      }
	
	      // let arrOut = Object.values( userActivityFn.mapping_Mac_Alias )
	      var arrOut = Object.keys(userActivityFn.mapping_Mac_Alias).map(function (key) {
	        return userActivityFn.mapping_Mac_Alias[key];
	      });
	
	      res.json({ users: arrOut });
	
	      // UserActivity.distinct(field).exec((err, activities) => {
	      // // UserActivity.distinct(field, {}, (err, activities) => {
	      // // UserActivity.find().limit(50).exec((err, activities) => {
	      //   if (err) {
	      //     res.status(500).send(err);
	      //   }
	      //   // console.log(activities)
	      //   res.json({ users: activities });
	      // });
	
	      break;
	
	    default:
	      _userActivity2.default.distinct(field).exec(function (err, activities) {
	        // UserActivity.distinct(field, {}, (err, activities) => {
	        // UserActivity.find().limit(50).exec((err, activities) => {
	        if (err) {
	          res.status(500).send(err);
	        }
	        // console.log(activities)
	        res.json({ users: activities });
	      });
	
	  }
	}
	
	function addActivity(req, res) {
	  // console.log(req)
	  // if (!req.body.activity.name || !req.body.activity.title || !req.body.activity.content) {
	  //   res.status(403).end();
	  // }
	  if (!req.body.result) {
	    res.status(403).end();
	  }
	
	  var activities = userActivityFn.requestPara2Objects(req.body.result);
	
	  activities.forEach(function (act, idx) {
	    var newActivity = new _userActivity2.default(act);
	
	    // Let's sanitize inputs
	    // newActivity.title = sanitizeHtml(newActivity.title);
	    // newActivity.name = sanitizeHtml(newActivity.name);
	    // newActivity.content = sanitizeHtml(newActivity.content);
	
	    // newActivity.slug = slug(newActivity.title.toLocaleLowerCase(), { lowercase: true });
	    // newActivity.cuid = cuid();
	    newActivity.save(function (err, saved) {
	      if (err) {
	        res.status(500).send(err);
	      }
	      if (idx === activities.length - 1) {
	        res.json({ "activity": "saved" });
	      }
	    });
	  });
	}
	
	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	// export function addPost(req, res) {
	//   if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	//     res.status(403).end();
	//   }
	
	//   const newPost = new Post(req.body.post);
	
	//   // Let's sanitize inputs
	//   newPost.title = sanitizeHtml(newPost.title);
	//   newPost.name = sanitizeHtml(newPost.name);
	//   newPost.content = sanitizeHtml(newPost.content);
	
	//   newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
	//   newPost.cuid = cuid();
	//   newPost.save((err, saved) => {
	//     if (err) {
	//       res.status(500).send(err);
	//     }
	//     res.json({ post: saved });
	//   });
	// }
	
	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	// export function getPost(req, res) {
	//   Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
	//     if (err) {
	//       res.status(500).send(err);
	//     }
	//     res.json({ post });
	//   });
	// }
	
	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	// export function deletePost(req, res) {
	//   Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
	//     if (err) {
	//       res.status(500).send(err);
	//     }
	
	//     post.remove(() => {
	//       res.status(200).end();
	//     });
	//   });
	// }

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(4);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var macAddressSchema = new Schema({
	  alias: { type: 'String', required: true },
	  mac: { type: 'String', required: true }
	}, { collection: 'macAddresses' });
	
	exports.default = _mongoose2.default.model('MacAddress', macAddressSchema);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(4);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var userActivitySchema = new Schema({
	  start_time: { type: 'Date', default: Date.now, required: true },
	  duration: { type: 'Number', required: true },
	  proc_name: { type: 'String', required: false },
	  window_title: { type: 'String', required: false },
	  login: { type: 'String', required: true },
	  user_id: { type: 'String', required: false },
	  remote_ip: { type: 'String', required: false },
	  mac_addr: { type: 'String', required: true },
	  proc_exec_name: { type: 'String', required: false },
	  alias: { type: 'String', required: false }
	});
	
	exports.default = _mongoose2.default.model('UserActivity', userActivitySchema);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Webpack Requirements
	
	
	var _express = __webpack_require__(6);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(41);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(4);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(40);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(42);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _IntlWrapper = __webpack_require__(32);
	
	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);
	
	var _webpack = __webpack_require__(15);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(39);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(43);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(44);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(34);
	
	var _reactRedux = __webpack_require__(3);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(14);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactHelmet = __webpack_require__(7);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(33);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(38);
	
	var _post = __webpack_require__(36);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _userActivity = __webpack_require__(37);
	
	var _userActivity2 = _interopRequireDefault(_userActivity);
	
	var _dummyData = __webpack_require__(35);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(13);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Initialize the Express App
	var app = new _express2.default();
	
	// Set Development modes checks
	var isDevMode = process.env.NODE_ENV === 'development' || false;
	var isProdMode = process.env.NODE_ENV === 'production' || false;
	
	// Run Webpack dev server in development mode
	if (isDevMode) {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	// React And Redux Setup
	
	
	// Import required modules
	
	
	// import activity from './routes/Activity.routes';
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  (0, _dummyData2.default)();
	});
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../client/assets')));
	app.use('/api', _post2.default);
	// app.use('/activity', activity);
	app.use('/api', _userActivity2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	  //         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n        <link rel="stylesheet" href="/bootstrap4.0.0/bootstrap.min.css">\n        <link rel="stylesheet" href="/font-awesome4.7.0/css/font-awesome.min.css">\n        \n        <link rel=\'stylesheet\' href=\'react-table.css\' />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("react-css-modules");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("react-date-range");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("sugar");

/***/ }
/******/ ]);