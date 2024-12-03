"use client";
import React from "react";
import Layout from "../components/home/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useNotifications } from "../hooks/useNotifications";

const Notifications = () => {
  const {markAllAsSeen,deleteAll}=useNotifications()
  const { user } = useSelector((state: RootState) => state.user);
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
              <h1
                className="underline text-xl cursor-pointer text-gray-600"
                onClick={() => markAllAsSeen()}
              >
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
          <TabsContent value="seen">
            <div className="flex justify-end">
              <h1 className="underline text-xl cursor-pointer text-gray-600" onClick={()=>deleteAll()}>
                Delete All
              </h1>
            </div>
            {user?.seenNotifications.map((not) => (
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
        </Tabs>
      </div>
    </Layout>
  );
};

export default Notifications;
