const mysql = require('mysql');

class MySQL{
    constructor() {
        this.db = mysql.createPool({
            host: 'HOSTNAME',
            user: 'USERNAME',
            password: 'PASSWORD',
            database: 'DATABASE',
            port: 'PORT',
            insecureAuth: true
        });
    }
}


module.exports = new MySQL();
