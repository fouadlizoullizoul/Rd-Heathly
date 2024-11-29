import { Card, CardHeader ,  CardTitle,} from '@/components/ui/card'
import React from 'react'
import Link from 'next/link'
import LoginForm from '@/app/components/LoginForm'
import ProtectedRoute from '@/app/components/routes/ProtectedRoute'


const LoginPage = () => {
  return (
    <div className="flex justify-center gap-5 h-[100vh] items-center bg-[url('/image8.png')] bg-no-repeat bg-cover object-cover">
           <Card className="w-[350px] p-5 bg-transparent">
        <CardHeader>
          <CardTitle className="text-[#274760] text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <LoginForm /> 
        <Link href="/register">
          <p className="text-sm text-gray-600 underline">Don&apos;t have an account? Register</p>
        </Link>
      </Card>
    </div>
  )
}

export default LoginPage
