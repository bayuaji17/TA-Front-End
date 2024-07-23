import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'

export const postDisease = async (input) => {
    const createDisease = await http.post(API_ENDPOINT.DISEASE, input);
    return createDisease;
}
export const deleteDisease = async (id) => {
    const deleteDisease = await http.delete(`${API_ENDPOINT.DISEASE}/${id}`);
    return deleteDisease;
}
export const putDisease = async (id, updatedData) => {
    const editDisease = await http.put(`${API_ENDPOINT.DISEASE}/${id}`, updatedData);
    return editDisease;
}