import prisma from '../db/prisma.db';
import { getHashedPassword } from '../lib/password.lib';
import { Register } from '../types/user.type';

const getUserById = async (userId:number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        
        return user; 
    } catch (error) {
        throw new Error(`Error while getting user by id: ${(error as Error).message}`);
    }
};

const getUserByEmail = async (email:string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        
        return user;    
    } catch (error) {
        throw new Error(`Error while getting user by email: ${(error as Error).message}`);
    }
};

const createUser = async (register:Register) => {
    try {
        const password = await getHashedPassword(register.password);
        const user = await prisma.user.create({ data: { ...register, password } });
        
        return user;    
    } catch (error) {
        throw new Error(`Error while creating user: ${(error as Error).message}`);
    }
};

const emailExists = async (email:string) => {
   const user = await getUserByEmail(email);
   return !!user;
};

export {
    getUserById,
    getUserByEmail,
    createUser,
    emailExists
};