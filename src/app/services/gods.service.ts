import { Injectable } from '@angular/core';
import { GodCard } from '../godCard';

@Injectable({
  providedIn: 'root'
})
export class GodsService {

  url = 'https://6619804c125e9bb9f29a2581.mockapi.io/gods'

  constructor() { }

  async getAllGods(): Promise<GodCard[]> {
    const response = await fetch(this.url)
    return await response.json()
  }



}
