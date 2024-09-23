import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRace } from '../interfaces/irace';
import { environment } from '../../environments/environment';

export interface RaceResponse {
  races: IRace[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private apiUrl = environment.apiUrl + 'races'
  
  constructor(private http: HttpClient) { }

  getTypes(page: number, size: number, search: string = ''): Observable<RaceResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

      if (search) {
        params = params.set('search', search);
      }

    return this.http.get<RaceResponse>(this.apiUrl, { params });
  }

  getTypeById(id: number): Observable<IRace> {
    return this.http.get<IRace>(`${this.apiUrl}/${id}`);
  }

  createType(race: IRace): Observable<IRace> {
    console.log(this.apiUrl, race)
    return this.http.post<IRace>(this.apiUrl, race);
  }

  updateType(id: number, race: IRace): Observable<IRace> {
    return this.http.put<IRace>(`${this.apiUrl}/${id}`, race);
  }

  deleteType(id: number): Observable<IRace> {
    return this.http.delete<IRace>(`${this.apiUrl}/${id}`);
  }
}
