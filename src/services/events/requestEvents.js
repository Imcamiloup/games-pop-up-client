// src/services/events/requestEvents.js
import axios from 'axios';

const requestEvents = async (page, filters) => {
  try {
    const response = await axios.get('/api/events', {
      params: {
        page,
        ...filters,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener los eventos:', error);
    throw error;
  }
};

export default requestEvents;