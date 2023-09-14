import dotnev from "dotenv";
dotnev.config();

export default {
  development: {
    database: process.env.PG_DATABASE,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    configs: {
      host: process.env.PG_HOST,
      dialect: process.env.PG_DIALECT,
    },
  },
};
