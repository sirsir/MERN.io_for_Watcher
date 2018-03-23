// import Activity from '../models/Activity';
import UserActivity from '../models/userActivity';


export function getSomething(req, res) {
  return res.status(200).end();
}

// export function show(req, res) {
//   UserActivity.find().exec((err, items) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json({ items });
//   });
// }