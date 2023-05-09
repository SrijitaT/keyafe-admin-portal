import axios from "axios";
import Error403 from "../../components/error-pages-list/error403/error-403.component";
import { signOutSuccess } from "../../redux/admin/admin.action";
import { store } from "../../redux/store";

const axiosInterceptor = axios.create({
  baseURL: "https://localhost:5001/api/",
  withCredentials: true,
});

axiosInterceptor.interceptors.request.use((config) => {
  const source = axios.CancelToken.source();

  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
      source.cancel();
    }, 15000);
  });

  config.cancelToken = source.token;

  return Promise.race([timeoutPromise, config]);
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
      // alert("Incorrect credentials / need admin rights to login");
      store.dispatch(signOutSuccess(false));
    }
    return Promise.reject(error.response);
  }
);

export default axiosInterceptor;
