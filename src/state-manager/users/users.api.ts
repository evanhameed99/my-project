
import { usersResponse } from "./interfaces";

const url = process.env.REACT_APP_API_BASE_URL

export const getUsers = async () => {
    const response = await fetch(`${url}/users`);
    const data: usersResponse = await response.json();
    return data;
}
