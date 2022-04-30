const db = require('../helpers/db');
const helper = require('../helpers/helper');

async function getUserByIdAndPassword(username, password){
  const rows = await db.query(
    `SELECT * FROM users WHERE username='${username}' AND password='${password}'`
  );
  const data = helper.emptyOrRows(rows);

  return data
}

module.exports = {
  getUserByIdAndPassword
}