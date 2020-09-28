const mssql = require('../config/MSSQL');

module.exports.add = function(req, res) {
    let queryAdd = `INSERT INTO task(selectedLanguage, speaking, writing, comprehension)
                     VALUES (?, ?, ?, ?, ?, ?)`;
    let params = [req.taskTitle, req.taskDescription, req.taskDone, req.taskVerified,
        req.taskLevel, req.employeeId, req.userId, req.taskDeadLine]

    mssql.db.query(queryAdd, params, (err, row) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(row);
    })
}


module.exports.findDone = function(req, res) {
    let querySelect = `SELECT selectedLanguage.* , user.id, user.email
                       FROM selectedLanguage 
                       LEFT JOIN user on selectedLanguage.userId = user.id
                       WHERE userId = req.userId`;

    mssql.db.query(querySelect, (err, row) => {
        res.status(200).send(row);
    })
}

module.exports.findAll = function(req, res) {
    let querySelect = `SELECT selectedLanguage.* , employee.employeeId, employee.employeeName
                       FROM selectedLanguage 
                       LEFT JOIN user on selectedLanguage.userId = user.id
                       WHERE userId = req.userId`;

    mysql.db.query(querySelect, (err, row) => {
        res.status(200).send(row);
    })
}
