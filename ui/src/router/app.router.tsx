import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpPage from '../pages/sign-up/sign-up.page';
import LoginPage from '../pages/login/login.page';
import TodoList from '../pages/todo-list/todo-list.page';
import ProtectedRoute from './ProtectedRoute';

const routesForAuthenticatedUsers = [
    {
        path: "/",
        element: <ProtectedRoute/>,
        children: [
            {
                path: "",
                element: <TodoList/>
            }
        ]
    }
];

const routesForNonAuthenticatedUsers = [
    {
        path: "/sign-up",
        element: <SignUpPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
];

const AppRouter = () => {
    const appRoutes = createBrowserRouter([
        ...routesForAuthenticatedUsers,
        ...routesForNonAuthenticatedUsers
    ]);

    return <RouterProvider router={appRoutes} />;
};

export default AppRouter;