const mysql = require('../config/MySQL');


/**
 *  create user if he don't exist
 *  and login him
 * @param userData
 * @param res
 */
module.exports.register = async (userData, res) => {
    const querySelect = 'SELECT * FROM users WHERE userEmail = ?';
    const queryInsert = 'INSERT INTO users (userEmail) VALUES (?)';
    try {
        const response = await mysql.db.query(querySelect, userData.userEmail, (err, row) => {
            if(row[0]) {
                res.status(200).send(row[0]);
            }else {
                mysql.db.query(queryInsert, userData.userEmail, (err, result) => {
                    if (err) {
                        res.status(400).send(err.message);
                    } else {
                        res.status(201).send(result);
                    }
                });
            }
        });
        return response;
    } catch (e) {
        throw Error(`Error ${e.message}`);
    }
};


/**
 * @param userData
 * @param res
 */
module.exports.getUser = async (data, res) => {
    try {
        var user = await mysql.db.query('SELECT * FROM users WHERE Id = ?', data.id, (err, result) => {
            if(err) {
                res.status(400).send(err);
            } else {
                if(result[0]) {
                    res.status(200).send(result[0]);
                } else {
                    res.status(404).send(err);
                }
            }
        });
        
        return user;

    } catch(e) {
        throw new Error(`Error ${e.message}`);
    }

};
