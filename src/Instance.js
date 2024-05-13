import axios from "axios";

const instance = axios.create({
//   baseURL: "http://192.168.1.113:5070/api/v1/",
  // baseURL: "http://192.168.1.114:5070/api/v1/",
  baseURL: "https://reading-club-api.eupheusapp.com/api/v1",
});

export default instance;