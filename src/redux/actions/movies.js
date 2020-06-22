import { MOVIE_LIST, RESPONSE_PAGE, SET_ERROR } from '../types';
import { MOVIE_API_URL } from '../../services/movies.service';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await MOVIE_API_URL(type, pageNumber);
    const { results, page, total_pages } = response.data;

    dispatchMethod(MOVIE_LIST, results, dispatch);
    dispatchMethod(RESPONSE_PAGE, { page, totalPages: total_pages }, dispatch);
  } catch (error) {
    if (error.response) {
      dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
    }
  }
};

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
};
