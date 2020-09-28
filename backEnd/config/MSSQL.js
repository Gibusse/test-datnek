
dbConfig = {
    server: 'HOSTNAME',
    port: 1433,
    user: 'USERNAME',
    password: 'PASSWORD',
    database: 'DATABASE',
    connectionTimeout: 150000,
    pool: {
        max: 20,
        min: 0,
        idleTimeoutMillis: 3000
    }
};
module.exports = dbConfig;
