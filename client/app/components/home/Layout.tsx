'use client'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Bell } from 'lucide-react';
import { useSelector } from "react-redux";
import { RootState } from '@/app/redux/store';
import Link from 'next/link';
interface LayoutProps {
    children: React.ReactNode;
  }
 
const Layout: React.FC<LayoutProps> = ({children}) => {
    const [collapsed,setCollapsed]=useState(false)
    const {user} =useSelector((state:RootState)=>state.user)
     return (
    <div className='p-[20px]'>
        <div className='layout flex'>
                <div className='bg-[#005555] rounded-[5px] shadow-xl mr-[20px] h-[100vh] p-[10px]'>
                    <Sidebar collapsed={collapsed} user={user}/>
                </div>
                <div className='content w-[100%] h-[100vh]'>
                    <div className='header bg-white rounded-[5px] shadow-xl mb-[20px] h-[12vh] w-[100%] flex items-center justify-between cursor-pointer px-[20px]'>
                        {!collapsed ? <X onClick={()=>setCollapsed(true)}/> : <Menu onClick={()=>setCollapsed(false)}/>}
                        <div className='flex items-center gap-3'>
                            <Bell />
                            <Link href='/profile' className="uppercase text-[15px] underline">{user?.name}</Link>
                        </div> 
                    </div>
                    <div className='body bg-white rounded-[5px] shadow-xl h-[85vh] w-[100%] p-[20px]'>
                        {children}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Layout
