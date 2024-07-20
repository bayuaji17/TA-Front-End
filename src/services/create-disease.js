import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'

export const disease = async (input) => {
    const createDisease = await http.post(API_ENDPOINT.DISEASE, input);
    return createDisease;
}