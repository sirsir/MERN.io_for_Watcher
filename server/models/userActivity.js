import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userActivitySchema = new Schema({
  start_time: { type: 'Date', default: Date.now, required: true  },
  duration: { type: 'Number', required: true },
  proc_name: { type: 'String', required: false },
  window_title: { type: 'String', required: false },
  login: { type: 'String', required: true },
  user_id: { type: 'String', required: false },
  remote_ip: { type: 'String', required: false },
  mac_addr: { type: 'String', required: true },
  proc_exec_name: { type: 'String', required: false },
});

export default mongoose.model('UserActivity', userActivitySchema);
