import axios from "axios";
//const { API_BASE_URL } = process.env;

export default async function loginUser(formData) {
  console.log("formData", formData);
  try {
    const response = await axios.post(
      `https://games-pop-up.onrender.com/users/login`,
      formData
    );


    if (response.data && response.data.token) {
      const token = response.data.token;
      return token;
    } else {
      throw new Error("El servidor no devolvió un token de autenticación.");
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}
