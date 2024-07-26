import axios from "axios";
import { BACKEND_API } from "../config/variables.js";

const apiclient = axios.create({
  baseURL: BACKEND_API,
});

export { apiclient };
