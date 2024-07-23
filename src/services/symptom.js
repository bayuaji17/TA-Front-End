import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'

export const postSymptom = async (input) => {
    const createSymptom = await http.post(API_ENDPOINT.SYMPTOM, input);
    return createSymptom;
}
export const deleteSymptoms = async (id) => {
    const deleteSymptom = await http.delete(`${API_ENDPOINT.SYMPTOM}/${id}`);
    console.log(deleteSymptom,"deletesymptom");
    return deleteSymptom;
}
export const putSymptoms = async (id,updatedData) => {
    const editSymptoms = await http.put(`${API_ENDPOINT.SYMPTOM}/${id}`,updatedData);
    console.log(editSymptoms,"editSymptom");
    return editSymptoms;
}
export const postRules = async (input) => {
    const createRules = await http.post(API_ENDPOINT.RULES, input);
    return createRules;
}