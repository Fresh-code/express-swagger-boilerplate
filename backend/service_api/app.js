import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import migrate from '../migration/migrate';
import morgan from 'morgan';

const app = express();

const apiKey = process.env.API_KEY || null;

if (!apiKey) {
    throw new Error('API_KEY are not specified');
}

const AuthError = new Error('token error');

const config = {
    appRoot: __dirname,
    swaggerSecurityHandlers: {
        api_key: function (req, authOrSecDef, scopesOrApiKey, callback) {
            if (scopesOrApiKey !== apiKey) {
                callback(AuthError);
            } else {
                callback(null);
            }
        },
        auth_token: function (req, authOrSecDef, scopesOrApiKey, callback) {
            try {
                console.log('auth_token', authOrSecDef, scopesOrApiKey);
                callback(null);
            } catch (e) {
                console.log(e.message);
                callback(null);
            }

        }
    }
};

app.use(morgan('common'));

SwaggerExpress.create(config, async (err, swaggerExpress) => {
    if (err) {
        console.log(err);
        throw err;
    }

    await migrate();

    swaggerExpress.register(app);
    console.log('registered');

    const port = process.env.PORT || 3000;

    app.listen(port, '0.0.0.0', () => {
        console.log(`Started at http://127.0.0.1:${port}`);
    });
});

export default app; // for testing
