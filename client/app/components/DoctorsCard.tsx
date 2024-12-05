import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import React from 'react'

const DoctorsCard = ({doctor}) => {
    const router =useRouter()
  return (
    <Card className='w-[30%] p-6 cursor-pointer' onClick={()=>router.push(`/book-appointment/${doctor._id}`)}>
        <h1 className='text-sm text-zinc-700'>First Name: <span className="text-[16px] text-emerald-900">{doctor.firstName} {doctor.lastName}</span></h1>
        <h1 className='text-sm text-zinc-700'>Adress : <span className="text-[16px] text-emerald-900">{doctor.address}</span></h1>
        <h1 className='text-sm text-zinc-700'>Fee per Visit: <span className="text-[16px] text-emerald-900">{doctor.feePerCunsultation} </span></h1>
        <h1 className='text-sm text-zinc-700'>specialization: <span className="text-[16px] text-emerald-900">{doctor.specialization} </span></h1>        
    </Card>
  )
}

export default DoctorsCard
