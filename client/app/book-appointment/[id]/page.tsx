"use client"
import Layout from '@/app/components/home/Layout'
import { hideLoading, showLoading } from '@/app/redux/alertsReducer'
import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import axios from "axios";
import { useParams } from 'next/navigation'
type Doctor={
    firstName: string;
    lastName: string;
  } |null

const BookAppointment = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const dispatch=useDispatch()
    const [doctor, setDoctor] = useState<Doctor>(null)
    const params=useParams()
    const getDoctorData = async () => {
        try {
            dispatch(showLoading())
            const res = await axios.post('http://localhost:5000/api/doctor/get-doctor-info-by-id', { doctorId: params.id }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            dispatch(hideLoading())
            if (res.data.success) {
                setDoctor(res.data.data)
            }
        } catch (error) {
            console.error(error);
            dispatch(hideLoading());
        }
    }
    useEffect(() => {
            getDoctorData();
    }, []);
  return (
    <Layout>
          <h1>Hello</h1>
          {doctor && <h2>{doctor?.firstName} {doctor?.lastName}</h2>}
    </Layout>
  )
}

export default BookAppointment


