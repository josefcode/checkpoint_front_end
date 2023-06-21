import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_EPISODES_REQUEST = 'FETCH_EPISODES_REQUEST';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';

export const fetchEpisodes = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_EPISODES_REQUEST });

    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      dispatch({ type: FETCH_EPISODES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_EPISODES_FAILURE, payload: error.message });
    }
  };
};
