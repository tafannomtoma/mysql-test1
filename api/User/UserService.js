const DBquery = require("./UserDB.js")

const pool = require("../../Config/dataDB")

exports.createUserService = (data, callback) => {
    pool.query(DBquery.UsersCreateQuery,
        [
            data.name,
            data.email,
            data.number,
            data.password,
            data.profileimage

        ],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callback(error, results)
            }
            console.log(results)
            return callback(null, results)
        }
    )
}
exports.updateUserService = (data, callback) => {
    pool.query(DBquery.UsersUpdateQuery,
        [
            data.name,
            data.email,
            data.number,
            data.password,
            data.profileimage,
            data.id
        ],
        (error, results, fields) => {
            if (error) {
                console.log(error)
                callback(error)
            }
            console.log(results)
            callback(null, results)
        }
    )
}