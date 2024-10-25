type LoginType = {
    email: string,
    password: string
};

type RegisterType = LoginType & {
    name: string
};

export type {
    LoginType,
    RegisterType
};