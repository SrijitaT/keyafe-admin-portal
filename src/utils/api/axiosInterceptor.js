import axios from "axios";
import { signOutSuccess } from "../../redux/admin/admin.action";
import { store } from "../../redux/store";
const axiosInterceptor = axios.create({
  baseURL: "https://localhost:5001/api/",
  withCredentials: true,
});

axiosInterceptor.interceptors.response.use(
  (response) => {
    console.log("in axios interceptor request", response);
    return response;
  },
  (error) => {
    console.log("error message", error.response);

    if (
      error.response.status === 401 ||
      error.response.status === 400 ||
      error.response.data.message === "Invalid Token" ||
      error.response.data.message === "Token Needed"
    ) {
      alert("Incorrect credentials / need admin rights to login");
      store.dispatch(signOutSuccess(false));
    }
    return Promise.reject(error.response);
  }
);

export default axiosInterceptor;
