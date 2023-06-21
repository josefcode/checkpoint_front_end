import axios from 'axios';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export const fetchEpisodes = async (): Promise<Episode[]> => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    throw error;
  }
};