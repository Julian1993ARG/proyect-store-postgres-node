const { Pool } = require('pg');

const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword)

    const pool = new Pool({
        host: 'localhost',
        port: 5432,
        user: 'julian',
        password: 'Patri193',
        database: 'my_store'
    });

module.exports = pool