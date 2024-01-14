import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import AdminLayout from '../components/layouts/AdminLayout';

const router = createBrowserRouter([
    {
        path: '',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: 'about',
                element: <About></About>,
            },
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                index: true,
                element: <h1>this is admin dashboard</h1>,
            },
            {
                path: 'addAdmin',
                element: <h1>this is admin addadmin page</h1>,
            },
        ],
    },
]);
export default router;