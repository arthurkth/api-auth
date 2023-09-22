import dotnev from "dotenv";
dotnev.config();

export default {
  development: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    configs: {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    },
  },
};
