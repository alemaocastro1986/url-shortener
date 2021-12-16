const app = {
  port: process.env.PORT || 3009,
  host: process.env.HOST || "http://localhost",
};

const databases = {
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/shortener-url",
};

export { app, databases };
