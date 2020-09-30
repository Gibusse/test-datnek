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


module.exports.findOne = function(req, res) {
    const languageId = [req.languageId];
    const userId = [req.userId];
    let querySelect = `SELECT Users_languages.* , users.Id, languages.Id, languages.languageName
                       FROM Users_languages 
                       LEFT JOIN users on Users_languages.userId = users.Id
                       LEFT JOIN  languages on Users_languages.languageId = languages.Id
                       WHERE userId = ?
                       AND selectedLanguage.Id = ?`;

    mysql.db.query(querySelect, [userId, languageId], (err, row) => {
        res.status(200).send(row);
    })
}

module.exports.findAll = function(userData, res) {
    let id = [userData.id];
    let querySelect = `SELECT Users_languages.* , users.Id, languages.Id, languages.languageName
                       FROM Users_languages 
                       LEFT JOIN users on Users_languages.userId = users.Id
                       INNER JOIN languages on Users_languages.languageId = languages.Id
                       WHERE userId = ?`;

    mysql.db.query(querySelect, id, (err, row) => {

        res.status(200).send(row);
    })
}
