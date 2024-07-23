import http from '../utils/http'
import { API_ENDPOINT } from '../utils/api-endpoint'

export const postAnswers = async (input) => {
    const createAnswers = await http.post(API_ENDPOINT.ANSWER, input);
    return createAnswers;
}