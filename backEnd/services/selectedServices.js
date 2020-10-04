const mysql = require('../config/MySQL');

module.exports.add = function(req, res) {
    let queryAdd = `INSERT INTO Users_languages(speaking, writing, comprehension, userId, languageId)
                     VALUES (?, ?, ?, ?, ?)`;
    let params = [req.speaking, req.writing, req.comprehension, req.userId, req.languageId]

    mysql.db.query(queryAdd, params, (err, row) => {
        if(err) res.status(400).send(err);
        res.status(200).send(row);
    })
}


module.exports.findOne = function(data, res) {
    const querySelect = `SELECT Users_languages.* , users.Id as user_id, languages.Id as language_id, languages.languageName
                       FROM Users_languages 
                       LEFT JOIN users on Users_languages.userId = users.Id
                       INNER JOIN  languages on Users_languages.languageId = languages.Id
                       WHERE userId = ?
                       AND languageId = ?`;

    mysql.db.query(querySelect, [data.id, data.languageId], (err, row) => {
        res.status(200).send(row);
    })
}

module.exports.findAll = function(data, res) {
    const querySelect = `SELECT Users_languages.* , users.Id as user_id, languages.Id as language_id, languages.languageName
                       FROM Users_languages 
                       LEFT JOIN users on Users_languages.userId = users.Id
                       INNER JOIN languages on Users_languages.languageId = languages.Id
                       WHERE userId = ?`;

    mysql.db.query(querySelect, data.id, (err, row) => {

        res.status(200).send(row);
    })
}


module.exports.deleteOne = function(data, res) {
    const querySelect = `DELETE FROM Users_languages
                       WHERE languageId = ?
                       AND userId = ?`;

    mysql.db.query(querySelect, [data.languageId, data.id], (err, row) => {
        if(err) res.status(400).send(err)
        res.status(200).send(row);
    })
}
