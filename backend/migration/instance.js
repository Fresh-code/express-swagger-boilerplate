import configApp from '../db/config';
import dbMigrate from 'db-migrate';
import configMigration from './database.json';

export const ENV_MIGRATION = 'dev';
const database = configApp.DATABASE;

const config = {
    ...configMigration,
    [ENV_MIGRATION]: {
        ...configMigration[ENV_MIGRATION],
        'user': database.user,
        'password': database.password,
        'host': database.host,
        'database': database.dbname
    }
};


export const instance = dbMigrate.getInstance(true, {
    config: config,
    cwd: __dirname
});
