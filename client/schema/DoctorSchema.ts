import * as z from "zod";

export const DoctorSchema = z.object({
    firstName: z.string().min(2, { message: "Must be 5 or fewer characters long" }),
    lastName:z.string().min(2, { message: "Must be 5 or fewer characters long" }),
    phoneNumber:z.preprocess((value) => Number(value), z.number().positive("Phone number must be positive")), // تحويل القيمة إلى رقم
    website:z.string(),
    address:z.string(),
    specialization:z.string(),
    experience:z.preprocess((value) => Number(value), z.number().positive("Phone number must be positive")),
    feePerCunsultation:z.preprocess((value) => Number(value), z.number().positive("Phone number must be positive")),
    availability: z
    .array(
      z.object({
        day: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
        slots: z.array(z.string()),
      })
    )
    .optional(), // الحقل اختياري
  });