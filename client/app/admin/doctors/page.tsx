"use client"
import React from 'react'
import Layout from '../../components/home/Layout'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import useDoctors from '../../hooks/useDoctors'
type Doctors={
  userId:string;
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber:number;
  website:string;
  address:string;
  specialization:string;
  experience: number;
  feePerCunsultation:number;
  createdAt: string;
  status:string;
}
const DoctorsPage = () => {
    const {Doctors,changeDoctorStatus}=useDoctors()
    const handleStatusChange = (status: string, doctor:Doctors) => {
      changeDoctorStatus(status, doctor);
    };
  return (
    <Layout>
         <Table>
            <TableCaption>A list of Doctors.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">first Name</TableHead>
                <TableHead>last Name</TableHead>
                <TableHead>phone</TableHead>
                <TableHead>website</TableHead>
                <TableHead>address</TableHead>
                <TableHead>specialization</TableHead>
                <TableHead>experience</TableHead>
                <TableHead>status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            {Doctors.map((doctor)=>(
            <TableBody key={doctor._id}>
              <TableRow>
                <TableCell className="font-medium uppercase">{doctor.firstName}</TableCell>
                <TableCell>{doctor.lastName}</TableCell>
                <TableCell>0{doctor.phoneNumber}</TableCell>
                <TableCell>{doctor.website}</TableCell>
                <TableCell>{doctor.address}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell>{doctor.experience}</TableCell>
                <TableCell>{doctor.status}</TableCell>
                <TableCell className="text-right underline">
                    {doctor.status === "pending" ? <h1 onClick={()=>handleStatusChange("approved",doctor)}>Approve</h1> : <h1 onClick={() => handleStatusChange("rejected", doctor)}>Blook</h1>}
                </TableCell>
              </TableRow>
            </TableBody>
             ))}
          </Table>
    </Layout>
  )
}

export default DoctorsPage
