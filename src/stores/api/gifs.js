import { axios } from '../../services/index';
export const trendingApi = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      'trending?api_key=yOoPfI2VP1cnkzkQIqqfWbdnSe8rw63U&limit=30'
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const searchApi = async (search) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `search?q=${search}&api_key=yOoPfI2VP1cnkzkQIqqfWbdnSe8rw63U&limit=30`
    );
    return data;
  } catch (error) {
    return error;
  }
};
