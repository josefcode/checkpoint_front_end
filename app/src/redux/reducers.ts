import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
import { loadCharacters, loadDetailCharacters, loadPagination } from '../api';

export interface EpisodeState {
  episodes: string[];
  loading: boolean;
}

const initialState ={
  episodes: [],
  loading: false,
};

export const characterData = createAsyncThunk(
  'character/characterData',
  async (filters : object) => {
    const result = await loadCharacters( filters);
    return result;
  }
);

export const characterDataDetail = createAsyncThunk(
  'character/characterDataDetail',
  async (id : any) => {
    const result = await loadDetailCharacters(id);
    return result;
  }
);

export const loadCharacterPagination = createAsyncThunk(
  'character/loadCharacterPagination',
  async (num : number) => {
    const result = await loadPagination(num);
    return result;
  }
);

const characters = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(characterData.pending, (state: EpisodeState ) => {
        state.loading = true;
        state.episodes = [];
      })
      .addCase(characterData.fulfilled, (state: EpisodeState, action : PayloadAction<string[]>) => {
        state.loading = false;
        state.episodes = action.payload || [];
      })
      .addCase(characterData.rejected, (state: EpisodeState) => {
        state.loading = false;
        state.episodes = [];
      })
      .addCase(characterDataDetail.pending, (state: EpisodeState ) => {
        state.loading = true;
        state.episodes = [];
      })
      .addCase(characterDataDetail.fulfilled, (state: EpisodeState, action : PayloadAction<string[]>) => {
        state.loading = false;
        state.episodes = action.payload || [];
      })
      .addCase(characterDataDetail.rejected, (state: EpisodeState) => {
        state.loading = false;
        state.episodes = [];
      })
      .addCase(loadCharacterPagination.pending, (state: EpisodeState ) => {
        state.loading = true;
        state.episodes = [];
      })
      .addCase(loadCharacterPagination.fulfilled, (state: EpisodeState, action : PayloadAction<string[]>) => {
        state.loading = false;
        state.episodes = action.payload || [];
      })
      .addCase(loadCharacterPagination.rejected, (state: EpisodeState) => {
        state.loading = false;
        state.episodes = [];
      })
  }
  
});


export default characters.reducer;
