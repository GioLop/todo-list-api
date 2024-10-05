import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10; 

const getHashedPassword = async (rawPassword:string) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);
    return hashedPassword;
};

const comparePasswrod = async (stored:string, toCompare:string) => {
    const passwordMatch = await bcrypt.compare(stored, toCompare);
    return passwordMatch;
};

export {
    getHashedPassword,
    comparePasswrod
};