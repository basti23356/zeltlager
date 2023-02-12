const pg = require("pg");
const dotenv = require("dotenv");


dotenv.config();
const conString = process.env.DB_CON_STRING;

/*configure connection and connect to client*/
if (conString === undefined) {
    console.log("ERROR: environment variable DB_CON_STRING not set.");
    process.exit(1);
}

const dbConfig = {
    connectionString: conString,
    ssl: {rejectUnauthorized: false}
}
pg.defaults.ssl = true;
let dbClient = new pg.Client(dbConfig);
dbClient.connect();