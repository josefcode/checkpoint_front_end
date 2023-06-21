import { createSlice } from '@reduxjs/toolkit';
import { FETCH_EPISODES_FAILURE, FETCH_EPISODES_REQUEST, FETCH_EPISODES_SUCCESS } from './actions';

interface EpisodeState {
  episodes: any[];
  loading: boolean;
  error: string | null;
}

const initialState: EpisodeState = {
  episodes: [],
  loading: false,
  error: null,
};

const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FETCH_EPISODES_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FETCH_EPISODES_SUCCESS, (state, action) => {
        state.loading = false;
        state.episodes = action.payload.results;
      })
      .addCase(FETCH_EPISODES_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default episodeSlice.reducer;
