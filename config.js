const config = {
  db: {
    host: "localhost",
    user: "root",
    password: "",
    database: "sso_demo",
  },
  listPerPage: 10,
  defaultAppUrl: "https://testing.planprofessional.com",
  jwtSecret: "sso_demo",
  jwtTimeoutDuration: 3600
};
module.exports = config;