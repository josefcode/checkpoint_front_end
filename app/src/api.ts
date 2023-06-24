import axios from 'axios';
import { useState } from 'react';

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

export async function loadCharacters(page: number, filters: object ) {
  const params = filters
  
  
console.log(params)
  // params._sort = sortProp;
  // params._order = sortOrder;

  // if (page && itemsPerPage) {
  //   params._page = page;
  //   params._limit = itemsPerPage;
  // }

  const response = await axios.get(`${url}/?page=${page}`, { params });
  const infos = response.data;
  // const totalItems = response.headers['x-total-count'];
  // return { totalItems, invoices };
  return infos
}