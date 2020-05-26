import axios from "axios";

const instance = axios.create({
  // that's where we want to store out data
  baseURL: "https://build-your-burger-be86c.firebaseio.com/",
});

export default instance;
