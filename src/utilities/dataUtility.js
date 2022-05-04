import axios from 'axios';

const data = async (method, url, payload) => {
  let axiosResult = null;
  try {
    const headers = {
      'Content-Type': 'application/json',
    },

    axiosResult = await axios({
      url: `http://localhost:3000${url}`,
      method,
      headers,
      data: JSON.stringify(payload),
      withCredentials: false,
    });
    console.log('axiosResult:', axiosResult)
    return axiosResult;
  } catch (error) {
    axiosResult = error.response;
  }
  return axiosResult;
};

export default data