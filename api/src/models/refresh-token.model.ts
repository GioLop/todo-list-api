import prisma from '../db/prisma.db';
import { hashToken } from '../lib/token.lib';

const addRefreshTokenToWhiteList = (token:string, userId:number) => {
    const hashedToken = hashToken(token);

    return prisma.refreshToken.create({
        data: {
            hashedToken,
            userId
        }
    });
};

const getSavedRefreshTokens = (userId:number) => {
    return prisma.refreshToken.findMany({
        where: {
            userId
        }
    });
};

const revokeRefreshToken = async (tokenId:number) => {
    return prisma.refreshToken.update({
        where: {
            id: tokenId
        },
        data: {
            revoked: true
        }
    });
};

const revokeTokens = (userId:number) => {
    return prisma.refreshToken.updateMany({
        where: {
            userId
        },
        data: {
            revoked: true
        }
    });
};

export {
    addRefreshTokenToWhiteList,
    getSavedRefreshTokens,
    revokeRefreshToken,
    revokeTokens
};