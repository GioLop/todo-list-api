type role = 'admin' | 'user';

interface Login {
    email: string;
    password: string;
};

interface Register {
    email: string;
    name: string;
    password: string;
};

interface User {
    id: string;
    email: string;
    name: string;
    password: string;
    role: role
};

interface UserToken {
    id: number;
    email: string;
    role: string
}

export {
    Login,
    Register,
    User,
    UserToken
};