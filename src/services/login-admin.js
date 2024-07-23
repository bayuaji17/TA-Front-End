import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'

export const loginAdmin = async (input) => {
    const loginAdminPage = await http.post(API_ENDPOINT.LOGIN, input);
    return loginAdminPage;
}