import axios from "axios";

const REACT_APP_BASE_ENDPOINT = " http://localhost:5000"

export const fetchBodyTransform = async(data) => {
    const result = await axios.post(`${REACT_APP_BASE_ENDPOINT}/transform`,data);
    return result;
}


export const fetchBodyParameter = async(data) => {
    const result = await axios.post(`${REACT_APP_BASE_ENDPOINT}/parameter`,data);
    return result;
}
