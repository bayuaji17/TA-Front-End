import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'

export const postSymptom = async (input) => {
    const createSymptom = await http.post(API_ENDPOINT.SYMPTOM, input);
    return createSymptom;
}