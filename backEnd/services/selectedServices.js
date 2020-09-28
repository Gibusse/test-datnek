const mysql = require('../config/MySQL');

module.exports.add = function(req, res) {
    let queryAdd = `INSERT INTO selectedLanguage(speaking, writing, comprehension, languageId, userId)
                     VALUES (?, ?, ?, ?, ?)`;
    let params = [req.speaking, req.writing, req.comprehension, req.languageId, req.userId]

    mysql.db.query(queryAdd, params, (err, row) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(row);
    })
}


module.exports.findDone = function(req, res) {
    let querySelect = `SELECT selectedLanguage.* , user.Id, user.email, language.Id, language.name
                       FROM selectedLanguage 
                       LEFT JOIN user on selectedLanguage.userId = user.Id
                       AND language on selectedLanguage.languageId = language.Id
                       WHERE userId = req.userId`;

    mysql.db.query(querySelect, (err, row) => {
        res.status(200).send(row);
    })
}

module.exports.findAll = function(req, res) {
    let querySelect = `SELECT selectedLanguage.* , user.Id, user.email, language.Id, language.name
                       FROM selectedLanguage 
                       LEFT JOIN user on selectedLanguage.userId = user.Id
                       AND language on selectedLanguage.languageId = language.Id
                       WHERE userId = req.userId`;

    mysql.db.query(querySelect, (err, row) => {
        res.status(200).send(row);
    })
}
