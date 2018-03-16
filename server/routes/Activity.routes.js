import { Router } from 'express';
// import * as ActivityController from '../controllers/Activity.controller';
import * as UserActivityController from '../controllers/userActivity.controller';

const router = new Router();

// router.get('/', function(req, res){
//   res.render('index')
// });

// router.route('/').get(ActivityController.show);
router.route('/').get(UserActivityController.show);


export default router;
