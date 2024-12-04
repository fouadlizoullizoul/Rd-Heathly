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
import { useEffect, useState } from "react";

export type Doctor={
    firstName: string;
    lastName: string;
  } |null
export const useProfileform = () => {
    const dispatch = useDispatch();
    const [doctor, setDoctor] = useState<Doctor>(null)
    const router = useRouter();
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const { user } = useSelector((state: RootState) => state.user);
    const form = useForm<z.infer<typeof DoctorSchema>>({
        resolver: zodResolver(DoctorSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            website: "",
            address: "",
            specialization: "",
        },
    });
    async function onSubmit(values: z.infer<typeof DoctorSchema>) {
        try {
            dispatch(showLoading());
            const res = await axios.post(
                "http://localhost:5000/api/doctor/update-doctor-profile",
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
    const getDoctorData = async () => {
        try {
            dispatch(showLoading())
            const res = await axios.post('http://localhost:5000/api/doctor/get-doctor-info-by-user-id', { userId: user?._id }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            dispatch(hideLoading())
            if (res.data.success) {
                setDoctor(res.data.data)
                form.reset(res.data.data)
            }else{
                toast.error("Failed to fetch doctor data");
            }
        } catch (error) {
            console.error(error);
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    }
    useEffect(() => {
        if (token) {
            getDoctorData();
          }
    }, [token]);
    return {
        form,
        onSubmit,
        doctor
    }
}