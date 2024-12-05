"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDoctorForm } from "../hooks/useDoctorForm";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

const Docotorform = () => {
  const { form, onSubmit } = useDoctorForm();
  const handleTime = (e, form) => {
    const day = form.getValues("day");
    if (!day) {
      toast.error("Please select a day before adding a time slot");
      return;
    }

    const availability = form.getValues("availability") || [];
    const timeSlot = e.target.value;

    const dayIndex = availability.findIndex((entry) => entry.day === day);
    if (dayIndex !== -1) {
      availability[dayIndex].slots.push(timeSlot);
    } else {
      availability.push({ day, slots: [timeSlot] });
    }

    form.setValue("availability", availability);
  };
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
                  <Input placeholder="Phone" {...field} type="number" />
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
        <hr className="my-3" />
        <h1 className="my-3 text-sm text-neutral-700">
          Professional Information
        </h1>
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
                  <Input
                    type="number"
                    placeholder="Fee Per Cunsultation"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="availability"
            render={() => (
              <FormItem>
                <FormLabel>Select Availability </FormLabel>
                <div className="flex gap-3">
                  <Select
                    onValueChange={(value) => form.setValue("day", value)}
                  >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Select a day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Monday">Monday</SelectItem>
                        <SelectItem value="Tuesday">Tuesday</SelectItem>
                        <SelectItem value="Wednesday">Wednesday</SelectItem>
                        <SelectItem value="Thursday">Thursday</SelectItem>
                        <SelectItem value="Friday">Friday</SelectItem>
                        <SelectItem value="Saturday">Saturday</SelectItem>
                        <SelectItem value="Sunday">Sunday</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Time Slot (e.g., 9:00 AM - 11:00 AM)"
                      onChange={(e) => {
                        handleTime(e, form);
                      }}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default Docotorform;
