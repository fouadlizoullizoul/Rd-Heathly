import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { ClipboardList } from 'lucide-react';
import { Contact } from 'lucide-react';
import { Users } from 'lucide-react';
import { Hospital } from 'lucide-react';

export const userMenu=[
    {
        name:'Home',
        path: '/',
        icon:House ,
    },
    {
        name:'Appointments',
        path: '/appointments',
        icon:ClipboardList
    },
    {
        name:'Apply Doctor',
        path: '/apply-doctor',
        icon:Contact
    },
    {
        name:'Profile',
        path: '/profile',
        icon:User
    },
 
]
export const adminMenu=[
    {
        name:'Home',
        path: '/',
        icon:House ,
    },
    {
        name:'Users',
        path: '/admin/users',
        icon:Users
    },
    {
        name:'Doctors',
        path: '/admin/doctors',
        icon:Hospital
    },
    {
        name:'Profile',
        path: '/profile',
        icon:User
    },

]
