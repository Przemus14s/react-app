import { useMutation } from "react-query";
import axiosInstance from "./axiosInstance";

const useLogin = () => {
  return useMutation(
    async (body) => {
      const response = await axiosInstance.post("/auth/login", body);
      const data = response.data;
      localStorage.setItem("token", data.token);
    },
    {
      onSuccess: () => {
        alert("Udało się")
      },
      onError: () => {
        alert("Nie udało się")
      },
    }
  );
};
export default useLogin;