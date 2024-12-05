import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsReducer";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RootState } from "../redux/store";
import { DoctorSchema } from "@/schema/DoctorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
export const useDoctorForm = ()=>{
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useSelector((state: RootState) => state.user);
    const form = useForm<z.infer<typeof DoctorSchema>>({
      resolver: zodResolver(DoctorSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        website: "",
        address: "",
        specialization: "",
        availability: [],
      },
    });
    async function onSubmit(values: z.infer<typeof DoctorSchema>) {
      try {
        dispatch(showLoading());
        const res = await axios.post(
          "http://localhost:5000/api/user/apply-doctor-account",
          { ...values, userId: user?._id },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        dispatch(hideLoading());
        if (res.data.success) {
          toast.success(res.data.message);
          router.push("/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        console.log(error);
        toast.error("Something went wrong");
      }
    }
    return {
        form,
        onSubmit
    }
}