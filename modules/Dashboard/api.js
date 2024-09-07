import { getRequest } from "../../api";

export const getMyInfo = async () => {
    const response = await getRequest('/customers/customer');

    console.log(response)
    return response
};
