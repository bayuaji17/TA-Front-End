import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'

export const postSymptom = async (input) => {
    const createSymptom = await http.post(API_ENDPOINT.SYMPTOM, input);
    return createSymptom;
}
export const deleteSymptoms = async (id) => {
    const deleteSymptom = await http.delete(`${API_ENDPOINT.SYMPTOM}/${id}`);
    return deleteSymptom;
}
export const putSymptoms = async (id, updatedData) => {
    const editSymptoms = await http.put(`${API_ENDPOINT.SYMPTOM}/${id}`, updatedData);
    return editSymptoms;
}
// *Rules
export const postRules = async (input) => {
    const createRules = await http.post(API_ENDPOINT.RULES, input);
    return createRules;
}
export const deletedRules = async (id) => {
    const deleteSymptom = await http.delete(`${API_ENDPOINT.RULES}/${id}`);
    return deleteSymptom;
}
export const deletedSingleSymptomRules = async (id) => {
    const deleteSymptom = await http.delete(`${API_ENDPOINT.SYMPTOM}/rules/${id}`);
    return deleteSymptom;
}
export const putRules = async (id, updatedData) => {
    const editRules = await http.put(`${API_ENDPOINT.RULES}/${id}`, updatedData);
    return editRules;
}
// * Relation
export const postRelation = async (input) => {
    const createRelation = await http.post(API_ENDPOINT.RELATION, input);
    return createRelation;
}
export const putRelation = async (id, updatedData) => {
    const editRelation = await http.put(`${API_ENDPOINT.RELATION}/${id}`, updatedData);
    return editRelation;
}
export const deletedRelation = async (id) => {
    const deleteRelation = await http.delete(`${API_ENDPOINT.RELATION}/${id}`);
    return deleteRelation;
}