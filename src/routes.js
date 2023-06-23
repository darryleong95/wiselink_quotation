import React from 'react'
import CreateQuotation from './views/CreateQuotation';
import { FiberNew } from '@material-ui/icons';

const routes = [
    {
        path: '/quotation/create',
        name: 'Create Quotation',
        icon: <FiberNew size={25} style={{ color: '#fff' }}
        />,
        component: CreateQuotation
    }
]

export default routes;