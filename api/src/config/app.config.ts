import 'dotenv/config';
import { Config } from '../types/config.type';

const {
    JWT_ACCESS_SECRET_KEY,
    JWT_REFRESH_SECRET_KEY,
    JWT_ACCESS_EXPIRATION_TIME,
    JWT_REFRESH_EXPIRATION_TIME,
    SALT_ROUNDS,
} = process.env;

export default {
    JWT_ACCESS_SECRET_KEY,
    JWT_REFRESH_SECRET_KEY,
    JWT_ACCESS_EXPIRATION_TIME,
    JWT_REFRESH_EXPIRATION_TIME,
    SALT_ROUNDS,
} as Config;