"use client";
import React from "react";
import Layout from "../components/home/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { hideLoading, showLoading } from "../redux/alertsReducer";
import axios from "axios";
import toast from "react-hot-toast";
const Notifications = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const markAllasSeen = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post("http://localhost:5000/api/user/mark-all-notifications-as-seen", {
        userId: user?._id,
      });
      dispatch(hideLoading());
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="flex flex-col  gap-2">
        <h1 className="text-2xl font-semibold text-green-900 mb-10">
          Notifications
        </h1>
        <Tabs defaultValue="account" className="w-[100%]">
          <TabsList>
            <TabsTrigger value="unseen">Unseen</TabsTrigger>
            <TabsTrigger value="seen">Seen</TabsTrigger>
          </TabsList>
          <TabsContent value="unseen">
            <div className="flex justify-end">
              <h1 className="underline text-xl cursor-pointer text-gray-600" onClick={()=>markAllasSeen()}>
                Mark all as seen
              </h1>
            </div>
            {user?.unseenNotifications.map((not) => (
              <div
                key={not.message}
                className="shadow-lg w-[50vh] p-4 rounded-md "
              >
                <Link href={not.onClickPath}>
                  <h1 className="text-sm">{not.message}</h1>
                </Link>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="seen" className="flex justify-end">
            <h1 className="underline text-xl cursor-pointer text-gray-600">
              Delete All
            </h1>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Notifications;
