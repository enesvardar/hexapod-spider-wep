import axios from "axios";

const REACT_APP_BASE_ENDPOINT = "https://hexapod-backend.herokuapp.com"

export const fetchBodyInverse = async(data) => {
    const result = await axios.post(`${REACT_APP_BASE_ENDPOINT}/inverse`,data);
    return result;
}

export const fetchForward = async(data) => {
    const result = await axios.post(`${REACT_APP_BASE_ENDPOINT}/forward`,data);
    return result;
}

export const fetchBodyParameter = async(data) => {
    const result = await axios.post(`${REACT_APP_BASE_ENDPOINT}/parameter`,data);
    return result;
}

export const fetchLegInfo = async() => {
    const result = await axios.get(`${REACT_APP_BASE_ENDPOINT}`);
    return result;
}
