
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsReducer";
import axios from "axios";
import toast from "react-hot-toast";
type Doctors={
    userId:string;
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber:number;
    website:string;
    address:string;
    specialization:string;
    experience: number;
    feePerCunsultation:number;
    createdAt: string;
    status:string;
}
const useDoctors = () => {
  const [Doctors, setDoctors] = useState<Doctors[]>([]);
  const dispatch = useDispatch();

  const fetchDoctors = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.get<{ success: boolean; data: Doctors[] }>("http://localhost:5000/api/admin/get-all-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading());
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error("Error fetching users:", error);
    }
  };

const changeDoctorStatus = async (status:string,doctor:Doctors) => {
    try {
      dispatch(showLoading());
      const res = await axios.post<{ success: boolean; data: Doctors[] ;message:string}>("http://localhost:5000/api/admin/change-doctor-status",{
        doctorId:doctor._id,
        userId:doctor.userId,
        status:status,
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading());
      if (res.data.success) {
        toast.success(res.data.message)
        fetchDoctors();
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("error changing doctor account status")
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, []);

  return {Doctors,fetchDoctors,changeDoctorStatus};
};

export default useDoctors;
