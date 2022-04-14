import axios from "axios";

export const fetchBodyTransform = async(data) => {
    const result = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/transform`,data);
    return result;
}



export const fetchBodyParameter = async(data) => {
    const result = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/parameter`,data);
    return result;
}
