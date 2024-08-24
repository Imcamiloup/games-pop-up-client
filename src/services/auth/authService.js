import axios from "axios";

const requestSignUp = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.API_BASE_URL}/users/register`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw new Error("Error signing up");
  }
};

export default requestSignUp;