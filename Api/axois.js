import axios from "axios";
import { BASE_URL } from "../config/";
const CustomAxios = axios.create({
  baseURL: BASE_URL,
});

export default CustomAxios;
