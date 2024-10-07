import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10; 

const getHashedPassword = async (rawPassword:string) => {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(rawPassword, salt);
    return hashedPassword;
};

const comparePassword = async (toCompare:string, stored:string,) => {
    const passwordMatch = await bcrypt.compare(toCompare, stored);
    return passwordMatch;
};

export {
    getHashedPassword,
    comparePassword
};