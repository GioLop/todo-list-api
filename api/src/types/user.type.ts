type role = 'admin' | 'user';

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

export {
    Register,
    User
};