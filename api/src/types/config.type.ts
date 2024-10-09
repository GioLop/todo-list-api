interface Config {
    JWT_ACCESS_SECRET_KEY:string,
    JWT_ACCESS_EXPIRATION_TIME: string,
    JWT_REFRESH_SECRET_KEY:string,
    JWT_REFRESH_EXPIRATION_TIME:string,
    SALT_ROUNDS:string
};

export {
    Config
};