
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsReducer";
import axios from "axios";
export type User={
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}
const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.get<{ success: boolean; data: User[] }>("http://localhost:5000/api/admin/get-all-users", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading());
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return users;
};

export default useUsers;
