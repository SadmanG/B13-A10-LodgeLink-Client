import { getUserSession } from '@/lib/core/session';
import React from 'react';

const MyPropertiesPage = async () => {
    const user = await getUserSession;
    return (
        <div>
            Owners Properties will be shown here.
        </div>
    );
};

export default MyPropertiesPage;