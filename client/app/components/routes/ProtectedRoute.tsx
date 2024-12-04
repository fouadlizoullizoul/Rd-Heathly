"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import { setUser } from "@/app/redux/userReducer";
import { hideLoading, showLoading } from "@/app/redux/alertsReducer";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const {user}=useSelector((state:RootState)=>state.user);
  console.log(user)
  const dispatch =useDispatch();
  const getUser=async()=>{
        try {
          dispatch(showLoading())
          const res=await axios.post('http://localhost:5000/api/user/get-user-info-by-id',{token},{
            headers:{
              Authorization: "Bearer " + token,
            }
          });
          dispatch(hideLoading())
          if(res.data.success){
            dispatch(setUser(res.data.data))
          }else{
            localStorage.clear()
            router.push('/login')
          }
        } catch (error) {
          console.log(error)
          localStorage.clear()
          dispatch(hideLoading())
          router.push('/login')
        }
  }
  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else if (!user) {
      getUser();
    }
  }, [token, user, router]);
  useEffect(() => {
    if (token && (pathname === "/login" || pathname === "/register")) {
      router.push("/");
    }
  }, [token, pathname, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
