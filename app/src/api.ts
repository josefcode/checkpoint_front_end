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

const url = 'https://rickandmortyapi.com/api/character'

export async function loadCharacters(filters: object ) {
  const params = filters
  

  // params._sort = sortProp;
  // params._order = sortOrder;

  // if (page && itemsPerPage) {
  //   params._page = page;
  //   params._limit = itemsPerPage;
  // }

  const response = await axios.get(url, { params });
  const infos = response.data;
  return infos
}


export async function loadDetailCharacters(id: string) {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  const infos = response.data;
  return infos
}

export async function loadPagination(num: number) {
  const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${num}`);
  const infos = response.data;
  return infos
}
