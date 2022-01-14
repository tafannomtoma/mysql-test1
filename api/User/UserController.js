const Services = require("./UserService")

//const pool = require("../../Config/dataDB")

exports.createUserController = (req, res) => {
    const body = req.body
    Services.createUserService(body, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(500).json({
                success: 0,
                error: error,
                result: result,
                message: "Database connection failed"
            })
        }
        console.log(result)
        return res.status(200).json({
            success: 1,
            data: result,
            message: "Database created"
        })
    })
}

// update user
exports.updateUserController = (req, res) => {
    const body = req.body
    Services.updateUserService(body, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(500).json({
                success: 0,
                message: "databse connection error"
            })
        }
        return res.status(200).json({
            success: 1,
            data: result,
            message: "database updated"
        })

    })

}

// database delete
exports.deleteUserController = (req, res) => {
    const id = req.params.id
    Services.deleteUserService(id, (error, results) => {
        if (error) {
            console.log(error)
            return res.json({
                success: 0,
                message: "Database connection failed."
            })
        }
        return res.json({
            success: 1,
            message: "Client record successfully deletd."
        })
    })
}