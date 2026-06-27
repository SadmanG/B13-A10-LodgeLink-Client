import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';

const OwnerLayout = async ({ children }) => {
    const user = await getUserSession();
    
    // If not logged in OR not an owner, immediately kick them out
    if (!user || user.role !== 'owner') {
        redirect('/');
    }

    return <>{children}</>;
};

export default OwnerLayout;