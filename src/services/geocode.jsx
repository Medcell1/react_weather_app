import axios from 'axios';
export const getCountryFromCoords = async (latitude, longitude) => {
  if (!latitude || !longitude) {
    return null;
  }

  try {
    const response = await axios.get(
      `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
    );

    const country = response.data.address.city;
    return country;
  } catch (error) {
    console.error('Error fetching country:', error);
    return null;
  }
};
