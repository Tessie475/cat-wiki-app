import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { query } from '@angular/animations';

import { Breed } from './breed';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:3000/';
  // apiUrl = '';
  constructor(private http: HttpClient) {}

  getAllBreeds() {
    return this.http.get(`${this.apiUrl}/breeds`);
  }

  getOneBreed(breedName: string) {
    let queryParams = new HttpParams().append('breedName', breedName);
    return this.http.get<Breed[]>(`${this.apiUrl}/breed`, {
      params: queryParams,
    });
  }

  getOneImage(id: string) {
    return this.http.get(`${this.apiUrl}/getOneImage/${id}`);
  }

  getCatImages() {
    return this.http.get(`${this.apiUrl}/catImages`);
  }
}
