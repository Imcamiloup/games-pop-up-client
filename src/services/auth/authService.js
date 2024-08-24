import axios from "axios";
//const { API_BASE_URL } = process.env;

const requestSignUp = async (data) => {
  try {
    const response = await axios.post(
      `$https://games-pop-up.onrender.com/users/register`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw new Error("Error signing up");
  }
};

export default requestSignUp;