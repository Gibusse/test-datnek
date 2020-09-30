const mysql = require('../config/MySQL');



module.exports.getAllLanguages = function(res) {
    const querySelect = 'SELECT * FROM languages';

    mysql.db.query(querySelect, (err, result) => {
        if (err) {
            res.status(400).send(err)
        } else {
            result.message = 'Ajout réussi';
            res.status(200).send(result)
        }

    });
}
