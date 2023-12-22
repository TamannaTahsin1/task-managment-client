import axios from "axios";

export const axiosSecure = axios.create({
    baseURL:'https://task-managment-server-amber.vercel.app'
})
const useAxios = () => {
    return axiosSecure;
};

export default useAxios;