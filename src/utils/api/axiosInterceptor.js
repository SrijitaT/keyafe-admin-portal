import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: "https://localhost:5001/api/",
  withCredentials: true,
});

axiosInterceptor.interceptors.response.use(
  (response) => {
    console.log("in axios interceptor request", response);
    return response.data;
  },
  (error) => {
    console.log("error message", error.response);

    // if (
    //   error.response.status === 401 ||
    //   error.response.data.message === "Invalid Token" ||
    //   error.response.data.message === "Token Needed"
    // ) {
    //   store.dispatch(signOutSuccess(false));
    // }
    return Promise.reject(error.response);
  }
);

export default axiosInterceptor;
