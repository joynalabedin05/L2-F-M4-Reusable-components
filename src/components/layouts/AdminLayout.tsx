
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = () => {
    return (
        <div className='flex'>
            {/* <h1>admin</h1> */}
            <div className='flex-[1]'>
            <Sidebar></Sidebar>
            </div>
           <div className='flex-[3]'>
           <Outlet></Outlet>
           </div>
           
        </div>
    );
};

export default AdminLayout;