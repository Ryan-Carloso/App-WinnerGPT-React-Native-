import axios from 'axios';

export const fetchData = async (setLoading, setError, setData) => {
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get('https://api-winner-gpt.vercel.app/premierleague/data');
    setData(response.data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
};
