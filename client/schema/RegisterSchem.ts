import * as z from "zod";

export const formSchema = z.object({
    name: z.string().min(2, { message: "Must be 5 or fewer characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" })
      .regex(/[A-Z]/, {
        message: "Password must include at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must include at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must include at least one number" })
      .regex(/[\W_]/, {
        message: "Password must include at least one special character",
      }),
  });