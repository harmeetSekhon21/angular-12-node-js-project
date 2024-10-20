module.exports = {
  HOST: "localhost:3306",
  USER: "root",
  PASSWORD: "secret",
  DB: "demodb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
