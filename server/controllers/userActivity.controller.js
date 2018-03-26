import UserActivity from '../models/userActivity';

import MacAddress from '../models/macAddress';


import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

import React from 'react';
import { render, renderToString } from 'react-dom/server';

import Sugar from 'sugar'
// import Activity from '../../client/modules/Activity/Activity';

// var MAC_ALIAS_MAPPING = {}

const userActivityFn = {
  requestPara2Objects: function(strIn){
    let objOut = {}

    let flag_act = false
    let flag_idle = false
    let x_newline = "\n"
    let x_tab = "\t"

    objOut = {
        "login": "",
        "user_id": 0,
        "remote_ip": "xxx",
        "mac": "",
        "activities": [],
        "idles": []
      }

    strIn.split(x_newline).forEach(function(l){
      let line = l.trim()
      if (line === ""){
        return;
      }

      switch(true) {
        case /^#LoginName=/.test(line):
            objOut["login"] = line.replace(/^#LoginName=*/,"")

            // user = User.select(:id).where({login: mapped_result[:login]}).first
            // unless user.nil?
            //   mapped_result[:user_id] = user.id
            // end
          
            break;
        case /^#MacAddress=/.test(line):
            objOut["mac_addr"] = line.replace(/^#MacAddress=*/,"")
            break;
        case /^__AGENT_ACTIVITY__/.test(line):
            flag_act = true
            flag_idle = false
            break;
        case /^__IDLE_TIME__/.test(line):
            flag_act = false
            flag_idle = true
            break;
        case /^__BROWSER_HISTORY__/.test(line):
            // do nothing
            break;
        case /^__WATCHER__/.test(line):
            // do nothing
            break;
        case /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(line):
            switch(true) {
              case flag_act:
                objOut["activities"].push(line.split(x_tab))
                break;
              case flag_idle:
                objOut["idles"].push(line.split(x_tab))
                break;
            }
            
            break;
        default:
            console.log("Activity log does not match - " + JSON.stringify(line) )
      }


    })

    let objOuts = []

    objOut["activities"].forEach(function(act){
      let activity={
        "start_time": act[0],
        "duration": act[1],
        "proc_name": act[2],
        "window_title": act[3],
        "login": objOut["login"] || "",
        "user_id": objOut["user_id"] || "",
        "remote_ip": objOut["remote_ip"] || "",
        "mac_addr": objOut["mac_addr"] || "",
        "proc_exec_name": act[4] || ""
      }

      objOuts.push(activity)

    })

    return objOuts
  },

  
  mapping_Mac_Alias: {},

  get_MAC_ALIAS_MAPPING: function(){
    let objOut = {}
    MacAddress.find().exec((err, macAddresses) => {
      if (err) {
        console.log('Can NOT get_MAC_ALIAS_MAPPING')
        return
      }

      // console.log(macAddresses)

      macAddresses.forEach(
        pair => {
          let objPair = pair.toObject()

          // console.log(objPair)
          
          objOut[objPair.mac] = objPair.alias
        }
      )
    });


    // console.log(objOut)
    return objOut
  },

  getAlias: function(act){
    if (Object.keys(userActivityFn.mapping_Mac_Alias).length === 0){
      userActivityFn.mapping_Mac_Alias = userActivityFn.get_MAC_ALIAS_MAPPING()
    }
    

    if (userActivityFn.mapping_Mac_Alias[act.mac_addr]){
      return userActivityFn.mapping_Mac_Alias[act.mac_addr]
    }

    return act.login || "UNKNOWN"
  },




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


export function getActivity(req, res) {
  console.log("function getActivity(req, res)")
  console.log(req.query)
  // console.log(req)

  if (req.query.distinct) {
    getDistinct(req, res)
    return;
  }

  //getActivityByCondition()
  let query = {}
  if ( (typeof(req.query.login) !== 'undefined') && (req.query.login !== 'all users') ){
    query = {login:req.query.login}
  }else if ( (typeof(req.query.alias) !== 'undefined') && (req.query.alias !== 'all users') ){
    if (Object.keys(userActivityFn.mapping_Mac_Alias).length === 0){
      userActivityFn.mapping_Mac_Alias = userActivityFn.get_MAC_ALIAS_MAPPING()
    }

    let mac = ""
    Object.keys(userActivityFn.mapping_Mac_Alias).forEach(
      macKey => {
        if (userActivityFn.mapping_Mac_Alias[macKey] === req.query.alias){
          mac = macKey
          return;
        }
      }
    )

    if (mac !== ""){
      query = {mac_addr: mac}
    }
    
  }


  let query_time = {}
  if (req.query.startDate){
    query_time = {$gte: req.query.startDate}
  }

  if (req.query.endDate){
    query_time = {...query_time, $lte: req.query.endDate}
  }

  if (Object.keys(query_time).length > 0){
    query = { ...query, start_time: query_time}
  }

  // SET SORT METHOD
  let sortby = '-start_time'

  
  UserActivity.find(query).limit(1000).sort(sortby).exec((err, activities) => {
    if (err) {
      res.status(500).send(err);
      return
    }

    let arrOut = activities.map(
      (act,idx) => {
        let actOut = act.toObject()
        if (actOut.start_time){
          // activities[idx].start_time = Sugar.Date.format(new Date(act.start_time), '{hh}:{mm}')
          let dt = Sugar.Date.format(new Date(act.start_time), '%c')
          // activities[idx].start_time = dt
          actOut.start_time = dt

          // console.log(dt)
          // console.log(actOut.start_time)
        }

        actOut.alias = userActivityFn.getAlias(actOut)

        return actOut
      }
    )

    // console.log(activities[0].start_time)

    res.json({ activities: arrOut });
  });
  

  
}

export function getDistinct(req, res) {
  let field = req.query.distinct
  // console.log(field)

  if (!field) {
    res.status(403).end();
    return;
  }
  // console.log(field)

  switch (field){
    case 'alias':
      if (Object.keys(userActivityFn.mapping_Mac_Alias).length === 0){
        userActivityFn.mapping_Mac_Alias = userActivityFn.get_MAC_ALIAS_MAPPING()
      }

      // let arrOut = Object.values( userActivityFn.mapping_Mac_Alias )
      let arrOut = Object.keys(userActivityFn.mapping_Mac_Alias).map((key) => userActivityFn.mapping_Mac_Alias[key] )

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
      UserActivity.distinct(field).exec((err, activities) => {
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


export function addActivity(req, res) {
  // console.log(req)
  // if (!req.body.activity.name || !req.body.activity.title || !req.body.activity.content) {
  //   res.status(403).end();
  // }
  if (!req.body.result) {
    res.status(403).end();
  }

  let activities = userActivityFn.requestPara2Objects(req.body.result)

  activities.forEach(function(act,idx){
    const newActivity = new UserActivity(act);

    // Let's sanitize inputs
    // newActivity.title = sanitizeHtml(newActivity.title);
    // newActivity.name = sanitizeHtml(newActivity.name);
    // newActivity.content = sanitizeHtml(newActivity.content);

    // newActivity.slug = slug(newActivity.title.toLocaleLowerCase(), { lowercase: true });
    // newActivity.cuid = cuid();
    newActivity.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      if (idx === activities.length-1){
        res.json({ "activity": "saved" });
      }
      
    });
  })

  
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
