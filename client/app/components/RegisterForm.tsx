"use client"
import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import axios from "axios";
  import Link from "next/link";
  import toast from 'react-hot-toast'
import { formSchema } from '@/schema/RegisterSchem';
import * as z from "zod";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsReducer';
const RegisterForm = () => {
    const router =useRouter()
    const dispatch=useDispatch()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      });
      const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
          dispatch(showLoading())
          const res = await axios.post("http://localhost:5000/api/user/register", values);
          dispatch(hideLoading())
          if (res.data.success) {
                toast.success(res.data.message)
                router.push('/login')
          } else {
            toast.error(res.data.message)
          }
        } catch(error){
            dispatch(hideLoading())
            console.log(error)
            toast.error("Something went wrong")
        }
      };
  return (
    <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col gap-4"
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Password" {...field} type="password" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className="" type="submit">
        Submit
      </Button>
      <Link href="/login">
        <p className="text-sm text-gray-600 underline">
          Already have an account? Login
        </p>
      </Link>
    </form>
  </Form>
  )
}

export default RegisterForm
