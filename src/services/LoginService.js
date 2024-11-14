import axios from "axios";
import { BASE_URL } from "../../config";
export const LoginService = async (values) => {
  try {
    const response = await axios.post(BASE_URL + "/api/login", values);
    const token = response.data.token;
    await localStorage.setItem("userId", response.data.user.id.toString());
    await localStorage.setItem("token", token);
    return { success: true, message: "Connectez-vous avec succès" };
  } catch (error) {
    if (error.response && error.response.data) {
      if (
        error.response.data.errors &&
        error.response.data.errors.email &&
        error.response.data.errors.email[0] ===
          "The provided credentials are incorrect."
      ) {
        return {
          success: false,
          message:
            "L'email ou le mot de passe est incorrect. Veuillez réessayer.",
        };
      } else {
        return {
          success: false,
          message:
            "Une erreur est survenue lors de la connexion. Veuillez réessayer.",
        };
      }
    } else if (error.request) {
      return {
        success: false,
        message: "Aucune réponse reçue du serveur. Veuillez réessayer.",
      };
    } else {
      return {
        success: false,
        message:
          "Une erreur est survenue lors de la connexion. Veuillez réessayer.",
      };
    }
  }

};

