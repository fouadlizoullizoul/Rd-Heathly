"use client"
import { adminMenu, userMenu } from '@/data'
import Link from 'next/link'
import {useRouter , usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import { LogOut } from 'lucide-react'
import { House } from 'lucide-react';
import { User } from 'lucide-react';
import { ClipboardList } from 'lucide-react';
interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isDoctor:boolean;
  seenNotifications:[];
  unseenNotifications:[]
}

interface SidebarProps {
    collapsed: boolean;
    user:User | null
  }
const Sidebar:React.FC<SidebarProps> = ({collapsed,user}) => {
  const doctorMenu=[
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
        name:'Profile',
        path: `/profile/${user?._id}`,
        icon:User
    },

]
    const menuToBeRendered=user?.isAdmin ? adminMenu :user?.isDoctor ? doctorMenu  : userMenu
    const role =user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" :"user"
    const pathe=usePathname()
    const router =useRouter()

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <Image src='/J.png' alt='' height={80} width={80} />
      <h1 className=' text-gray-300'>{role}</h1>
      </div>
      
        <div className="">
            {menuToBeRendered.map((item, index) => (
              <div key={index} className={`flex items-center mt-[30px] gap-3 mx-[10px] ${pathe === item.path ? "bg-[#013737] p-1 rounded-md w-full" : ""}`}>
                <item.icon className='text-[rgba(225,225,225,0.9)]'/>
                {!collapsed && <Link href={item.path} className="text-[rgba(225,225,225,0.7)] text-[18px]">{item.name}</Link>}
              </div>
            ))}
        </div>
              <div  className={`flex items-center mt-[30px] gap-3 mx-[10px] `}  onClick={()=>{
                  localStorage.clear()
                  router.push('/login')
                  window.location.reload();
                }}>
                <LogOut className='text-[rgba(225,225,225,0.9)]'/>
                {!collapsed && <Link href='/login' className="text-[rgba(225,225,225,0.7)] text-[18px]">Logout</Link>}
              </div>
            
    </div>
  )
}

export default Sidebar
