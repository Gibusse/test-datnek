
dbConfig = {
    server: 'localhost',
    port: 1433,
    user: 'sa',
    password: 'Coolbreeze_01',
    database: 'datnek',
    connectionTimeout: 150000,
    pool: {
        max: 20,
        min: 0,
        idleTimeoutMillis: 3000
    }
};
module.exports = dbConfig;
