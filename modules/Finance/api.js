import { getRequest } from "../../api";

export const getReceipts = async () => {
    const response = await getRequest('/finance/payments');
    return response;
};

export const getInvoices = async () => {
    const response = await getRequest('/finance/invoices');
    return response;
};
