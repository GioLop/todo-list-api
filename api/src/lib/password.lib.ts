import bcrypt from 'bcrypt';
import appConfig from '../config/app.config';

const SALT_ROUNDS = Number(appConfig.SALT_ROUNDS); 

const getHashedPassword = async (rawPassword:string) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);
    return hashedPassword;
};

const comparePassword = async (toCompare:string, stored:string) => {
    const passwordMatch = await bcrypt.compare(toCompare, stored);
    return passwordMatch;
};

export {
    getHashedPassword,
    comparePassword
};