"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import DoctorsCard from "../DoctorsCard";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "@/app/redux/alertsReducer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch=useDispatch()
  const getData = async () => {
    try {
      dispatch(showLoading())
      const res = await axios.get(
        "http://localhost:5000/api/user/get-all-approved-doctors",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading())
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
      <Layout>
          <Card>
        <CardHeader>
        <CardTitle>All Doctors</CardTitle>
        <CardDescription>Find your Doctor Here By One Click</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-5">
        {doctors.map((doctor) => (
          <DoctorsCard key={doctor._id} doctor={doctor} />
        ))}
      </CardContent>
          </Card>
      </Layout>
  );
};

export default Home;
