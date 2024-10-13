const Login = () => {
    return (
        <div>
            <div>
                <h2>Welcome to your to-do list app</h2>
            </div>
            
            <div>
                <h3>Login</h3>
            </div>
            
            <div>
                <p>Enter your email and your password.</p>
                <form>
                    <input type="text" />
                    <input type="password" />
                    <input type="submit" value='Login' />
                </form>
                <p>Don't have an account? <a>Sign Up</a></p>
            </div>
        </div>
    ); 
};

export default Login;