// const config = {
//   mongoURL: process.env.MONGO_URL || 'mongodb://192.168.1.53:27017/amivoice-watcher',
//   port: process.env.PORT || 8000,
// };

const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/amivoice-watcher',
  port: process.env.PORT || 8000,
};

export default config;
