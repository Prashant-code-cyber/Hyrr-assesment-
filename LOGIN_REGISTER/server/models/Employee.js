const mongoose = require('mongoose')

const EmplyeesSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees", EmplyeesSchema)
module.exports = EmployeeModel