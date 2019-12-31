import axios from 'axios'

var axiosInstance = axios.create({
  baseURL: 'http://localhost:7000',
  /* other custom settings */
});

export default axiosInstance