import React from 'react'
import CreateQuotation from './views/CreateQuotation';
import { FiberNew, GetApp } from '@material-ui/icons';
import GetQuotation from './views/GetQuotation';

const routes = [
    {
        path: '/quotation/create',
        name: 'Create Quotation',
        icon: <FiberNew size={25} style={{ color: '#fff' }}
        />,
        component: CreateQuotation
    },
    {
        path: '/quotation/get',
        name: 'Get Quotation',
        icon: <GetApp size={25} style={{ color: '#fff' }}
        />,
        component: GetQuotation
    }
]

export default routes;