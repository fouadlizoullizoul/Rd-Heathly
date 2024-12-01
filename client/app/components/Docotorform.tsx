"use client"

import { DoctorSchema } from "@/schema/DoctorSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const Docotorform = () => {
    const form=useForm<z.infer<typeof DoctorSchema>>({
        resolver: zodResolver(DoctorSchema),
        defaultValues: {
            firstName:'',
            lastName:'',
            website:'',
            address:'',
            specialization:'',
        },
    })
    function onSubmit(values: z.infer<typeof DoctorSchema>) {
        console.log(values)
      }
     
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} method="post">
        <h1 className="my-3 text-sm text-neutral-700">Personal Information</h1>
        <div className="grid xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
             <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone" {...field} type="number"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                  <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adress</FormLabel>
              <FormControl>
                <Input placeholder="Adress" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <hr className='my-3'/>
        <h1 className="my-3 text-sm text-neutral-700">Professional Information</h1>
        <div className="grid xl:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 mb-3">
         <FormField
          control={form.control}
          name="specialization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specialization</FormLabel>
              <FormControl>
                <Input placeholder="Specialization" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
             <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Experience" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="feePerCunsultation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fee Per Cunsultation</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Fee Per Cunsultation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button type="submit" onClick={() => console.log("Button clicked!")}>Submit</Button>
      </form>
    </Form>
  )
}

export default Docotorform
