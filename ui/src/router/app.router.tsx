import { createBrowserRouter } from 'react-router-dom';
import SignUpPage from '../pages/sign-up/sign-up.page';
import LoginPage from '../pages/login/login.page';
import TodoList from '../pages/todo-list/todo-list.page';

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <TodoList/>
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