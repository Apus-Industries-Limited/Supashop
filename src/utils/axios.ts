import axios from "axios";

//export const dev_url = "http://localhost:3500";
export const url = "";

export default axios.create( {
      baseURL: url,
      withCredentials: true
} );

export const axiosPrivate = axios.create( {
      baseURL: url,
      withCredentials: true
} );
