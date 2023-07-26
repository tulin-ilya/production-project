import { USER_LOCAL_STORAGE_KEY } from "@shared/consts/local-storege";
import axios from "axios";

export const $api = axios.create({
    baseURL: __BASE_API_HOST,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
    },
});
