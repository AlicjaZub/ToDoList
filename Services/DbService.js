const MongoClient = require('mongodb').MongoClient

const url = "mongodb://root:password@localhost:27017"
const dbName = 'tasks'

async function dbConnection() {
    const connection = await MongoClient.connect(url)
    return connection.db(dbName)
}


module.exports.dbConnection = dbConnection;