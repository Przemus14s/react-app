import { useMutation } from "react-query";
import axiosInstance from "./axiosInstance";

const useRegister = () => {
  return useMutation(
    async (body) => {
      const response = await axiosInstance.post("/auth/register", body);
      return response;
    },
    {
      onSuccess: (data) => {
        alert("Zarejestrowano pomyślnie")
      },
      onError: (error) => {
        alert("Zarejestrowano pomyślnie")
        
      },
    }
  );
};
export default useRegister;