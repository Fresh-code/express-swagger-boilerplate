const config = {
    DATABASE: {
        password: process.env.POSTGRES_PASSWORD || 'root',
        user: process.env.POSTGRES_USER || 'root',
        dbname: process.env.POSTGRES_DB || 'rfp',
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST || 'db'
    }
};

export default config;
