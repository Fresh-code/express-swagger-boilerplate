import Sequelize from 'sequelize';
import { DATABASE as config } from './config';

const db = new Sequelize(config.dbname, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


db.authenticate()
    .then((errors) => {
        if (errors) {
            console.log(errors);
        } else {
            console.log('Sequelise connected');
        }
    });

export default db;
