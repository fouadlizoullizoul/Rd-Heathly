"use client";
import { hideLoading, showLoading } from "../redux/alertsReducer";
import axios from "axios";
import toast from "react-hot-toast";
import { setUser } from "../redux/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useNotifications = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const markAllAsSeen = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:5000/api/user/mark-all-notifications-as-seen",
        {
          userId: user?._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.data));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const deleteAll = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:5000/api/user/delete-all-notifications",
        {
          userId: user?._id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(res.data.data));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return { markAllAsSeen, deleteAll };
};
