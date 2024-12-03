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
const DoctorsPage = () => {
    const doctors=useDoctors()
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
            {doctors.map((item)=>(
            <TableBody key={item._id}>
              <TableRow>
                <TableCell className="font-medium uppercase">{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>0{item.phoneNumber}</TableCell>
                <TableCell>{item.website}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.specialization}</TableCell>
                <TableCell>{item.experience}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-right underline">
                    {item.status === "pending" ? <h1>Approve</h1> : <h1>Blook</h1>}
                </TableCell>
              </TableRow>
            </TableBody>
             ))}
          </Table>
    </Layout>
  )
}

export default DoctorsPage
