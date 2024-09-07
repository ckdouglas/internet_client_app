import { getRequest } from "../../api";

export const getMyInfo = async () => {
    const response = await getRequest('/customers/customer');
    if(response?.length > 0){
        return response[0];
    }
};
