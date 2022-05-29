
import { usersResponse } from "./interfaces";
export const getUsers = async () => {
    const response = await fetch('http://178.63.13.157:8090/mock-api/api/users');
    const data : usersResponse = await response.json();
    return data;
}
