import axios from 'axios';

const data = async (method, url, payload) => {
  let axiosResult = null;
  try {
    const headers = { ...axios.defaults.headers.common };

    axiosResult = await axios({
      url: `http://localhost:3000${url}`,
      method,
      headers,
      data: payload ? JSON.stringify(payload) : {},
    });
    console.log('axiosResult:', axiosResult)
    return axiosResult;
  } catch (error) {
    axiosResult = error.response;
  }
  return axiosResult;
};

export default data