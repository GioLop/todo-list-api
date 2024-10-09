interface RefreshTokenBase {
    userId:number
};

interface RefreshToken extends RefreshTokenBase{
    id:number,
    hashedToken:string
    revoked:boolean
    createdAt:Date
    updatedAt:Date
};

export {
    RefreshTokenBase,
    RefreshToken
};