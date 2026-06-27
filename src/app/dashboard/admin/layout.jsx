import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';

const AdminLayout = async ({ children }) => {
    const user = await getUserSession();
    
    // If not logged in OR not an admin, immediately kick them out
    if (!user || user.role !== 'admin') {
        redirect('/');
    }

    return <>{children}</>;
};

export default AdminLayout;