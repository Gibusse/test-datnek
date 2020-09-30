const mysql = require('mysql');

class MySQL{
    constructor() {
        this.db = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'Coolbreeze_01',
            database: 'datnek',
            port: '3306',
            insecureAuth: true
        });
    }
}


module.exports = new MySQL();
