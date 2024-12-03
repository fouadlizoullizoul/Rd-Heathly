"use client"
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
import useUsers from '../../hooks/useUsers'
  
const UsersPage = () => {
  const users=useUsers();
  return (
    <Layout>
            <Table>
            <TableCaption>A list of users.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            {users.map((item)=>(
            <TableBody key={item._id}>
              <TableRow>
                <TableCell className="font-medium uppercase">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell className="text-right underline">Block</TableCell>
              </TableRow>
            </TableBody>
             ))}
          </Table>
       
    </Layout>
  )
}

export default UsersPage
