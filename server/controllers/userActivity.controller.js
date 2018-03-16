import UserActivity from '../models/userActivity';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

import React from 'react';
import { render, renderToString } from 'react-dom/server';
// import Activity from '../../client/modules/Activity/Activity';

var userActivityFn = {
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


  }
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
  UserActivity.find().sort('-dateAdded').exec((err, activities) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ activities });
  });
}


export function addActivity(req, res) {
  console.log(req)
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
