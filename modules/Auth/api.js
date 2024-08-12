import { postRequest } from "../../api";

export const attemptLogin = async (username, password) => {
    try {
        const data = { username, password };
        // const response = await postRequest('/login', data); // Use the general POST method

        if (username == "Admin" && password == "1234")
            return { success: true };
        return { success: false };
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};
