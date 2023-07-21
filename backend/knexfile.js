const path = require('path');
require('dotenv/config');

const migrationsDirectory = path.resolve(
    __dirname,
    'src',
    'database',
    'migrations'
)

module.exports = {
    development: {
        // client: 'sqlite3',
        // connection: {
        //     filename: path.resolve(
        //         __dirname,
        //         'src',
        //         'database',
        //         'dev.sqlite'
        //     )
        // },
        client: 'pg',
        connection: {
            host: process.env.PG_HOST,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            port: process.env.PG_PORT,
        },
        migrations: {
            directory: migrationsDirectory,
        },
        useNullAsDefault: true,
    },

    test: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(
                __dirname,
                'src',
                'database',
                'test.sqlite'
            )
        },
        migrations: {
            directory: migrationsDirectory,
        },
        useNullAsDefault: true,     // SQLite não suporta valores default
    },

    production: {
        client: 'pg',
        connection: process.env.PG_DATABASE_URL,
        migrations: {
            directory: migrationsDirectory,
        }
    }
};
