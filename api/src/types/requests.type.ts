interface UserRegistration {
    name: string,
    email: string,
    password: string
};

interface UserLogin {
    email: string,
    password: string
}

export {
    UserRegistration,
    UserLogin
};