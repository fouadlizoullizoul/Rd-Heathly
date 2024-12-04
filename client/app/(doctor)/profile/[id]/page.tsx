import Layout from '@/app/components/home/Layout'
import ProfileForm from '@/app/components/ProfileForm'
import React from 'react'

const page = () => {
  return (
    <Layout>
           <h1 className='text-2xl font-semibold text-green-900 mb-10'>Docotor Info</h1> 
            <ProfileForm/>
    </Layout>
  )
}

export default page
