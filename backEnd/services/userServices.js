const mysql = require('../config/MySQL');


/**
 *  create user if he don't exist
 *  and login him
 * @param userData
 * @param res
 */
module.exports.register = function(userData, res) {
    const querySelect = 'SELECT * FROM users WHERE userEmail = ?';
    const param = [userData.userEmail];
    const query = 'INSERT INTO users (userEmail) VALUES (?)';
    const params = [userData.userEmail];

    mysql.db.query(querySelect, param, (err, row) => {
        if(row[0]) {
            if (userData.userEmail === row[0].userEmail) {
                res.status(200).send(row);
            }
        }else {
            mysql.db.query(query, params, (err, result) => {
                if (err) {
                    res.status(400).send(err)
                } else {
                    result.message = 'Ajout réussi';
                    res.status(200).send(result)
                }

            });
        }

    });
};

module.exports.getUser = ((userData, res) => {
    const querySelect = 'SELECT * FROM users WHERE Id = ?';
    const userId = [userData.id];


    mysql.db.query(querySelect, userId, (err, result) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(result);
        }
    })
})
