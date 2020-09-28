const mysql = require('../config/MySQL');


/**
 *  create user if he don't exist
 *  and login him
 * @param userData
 * @param res
 */
module.exports.register = function(userData, res) {
    const querySelect = 'SELECT * FROM user WHERE userEmail = ?';
    const param = [userData.email];
    const query = 'INSERT INTO user (userEmail) VALUES (?)';
    const params = [userData.email];

    mysql.db.query(querySelect, param, (err, row) => {
        if(row[0]) {
            if (userData.email === row[0].email) {
                res.status(401).send('The user already exist');
            }
        }else {
            mysql.db.query(query, params, (err, result) => {
                if (err) {
                    res.status(400).send(err)
                } else {
                    res.status(200).send(result)
                }

            });
        }

    });
}
