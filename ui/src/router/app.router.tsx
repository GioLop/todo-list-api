import { createBrowserRouter } from 'react-router-dom';
import SignUpPage from '../pages/sign-up/sign-up.page';
import LoginPage from '../pages/login/login.page';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World!</div>
    },
    {
        path: "/sign-up",
        element: <SignUpPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
]);

export default appRouter;