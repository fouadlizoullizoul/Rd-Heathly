import React from 'react'


const Layout = ({children}) => {
  return (
    <div className='p-[20px]'>
        <div className='layout flex'>
                <div className='sidebar bg-[#005555] rounded-[5px] shadow-xl mr-[20px] h-[100vh] p-[10px] w-[250px]'>
                    sidebar
                </div>
                <div className='content w-[100%] h-[100vh]'>
                    <div className='header bg-white rounded-[5px] shadow-xl mb-[20px] h-[12vh] w-[100%]'>
                        header
                    </div>
                    <div className='body bg-white rounded-[5px] shadow-xl h-[85vh] w-[100%]'>
                        {children}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Layout
