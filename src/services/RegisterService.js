import axios from "axios";
import { BASE_URL } from '../../config';

export const RegisterService = async (data, setErrorMessage, setSuccessMessage, navigateLogin) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/register`, data);
        setSuccessMessage("Registration successful!");
        navigateLogin('/login');
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            setErrorMessage(error.response.data.errors);
        } else {
            console.error("There was an error submitting the form:", error);
        }
    }
} 