import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';

const TenantLayout = async ({ children }) => {
    const user = await getUserSession();
    
    // If not logged in OR not a tenant, immediately kick them out
    if (!user || user.role !== 'tenant') {
        redirect('/');
    }

    return <>{children}</>;
};

export default TenantLayout;