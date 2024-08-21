import Axios from "axios";

const axiosBaseURL = Axios.create({
    baseURL: "https://fakestoreapi.com"
});
export default axiosBaseURL