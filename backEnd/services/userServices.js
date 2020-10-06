const mysql = require('../config/MySQL');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/**
 *  create user if he don't exist
 *  and login him
 * @param userData
 * @param res
 */
module.exports.register = async (userData, res) => {
    const querySelect = 'SELECT * FROM users WHERE userEmail = ?';
    const queryInsert = 'INSERT INTO users (userEmail) VALUES (?)';
    /*const salt = await bcrypt.genSalt();
    const email = await bcrypt.hash(userData.userEmail, salt);
    const compareEmail = await bcrypt.compare(userData.userEmail, usermail)*/
    try {
        const response = await mysql.db.query(querySelect, userData.userEmail, (err, row) => {
            if(row[0]) {
                let payload = { subject: `${row[0].Id}`};
                let userId = row[0].Id;
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({token, userId});
            }else {
                mysql.db.query(queryInsert, userData.userEmail, (err, result) => {
                    if (err) {
                        res.status(400).send(err.message);
                    } else {
                        let payload = { subject: result.insertId};
                        let userId = result.insertId;
                        let token = jwt.sign(payload, 'secretKey');
                        res.status(201).send({token, userId});
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
                    let payload = { subject: `${result[0].Id}`};
                    let userId = result[0].Id;
                    let userEmail = result[0].userEmail;
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({token, userId, userEmail});
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
