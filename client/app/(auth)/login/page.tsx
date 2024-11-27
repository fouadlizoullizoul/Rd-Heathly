"use client"
import { Card, CardHeader ,  CardTitle,} from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import * as z from 'zod'
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const formSchema =z.object({
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(8,{message:"Password is too short"}).max(20,{message: "Password is too long" }),
})

const LoginPage = () => {
    const form =useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues: {
            email:"",
            password:""
        }
    })
    const onSubmit = (values:z.infer<typeof formSchema>) =>{
         console.log(values)
    }
  return (
    <div className="flex justify-center gap-5 h-[100vh] items-center bg-[url('/image8.png')] bg-no-repeat bg-cover object-cover">
        <Card className="w-[350px] p-5 bg-transparent">
            <CardHeader>
                <CardTitle className='text-[#274760] text-2xl text-center'>Login</CardTitle>
            </CardHeader>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4">
                            <FormField 
                            control={form.control}
                            name='email'
                            render={({field})=>(
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
                            name='password'
                            render={({field})=>(
                                <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Password" {...field} type="password" />
                                        </FormControl>
                                        <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='' type="submit">
                            Submit
                        </Button>
                        <Link href='/register'>
                            <p className="text-sm text-gray-600 underline">Don&apos;t have an account? Register</p>
                        </Link>
                    </form>
            </Form>
        </Card>
    </div>
  )
}

export default LoginPage
