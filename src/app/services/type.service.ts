import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IType } from '../interfaces/itype';
import { environment } from '../../environments/environment';

export interface TypeResponse {
  types: IType[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private apiUrl = environment.apiUrl + 'types'
  
  constructor(private http: HttpClient) { }

  getTypes(page: number, size: number, search: string = ''): Observable<TypeResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

      if (search) {
        params = params.set('search', search);
      }

    return this.http.get<TypeResponse>(this.apiUrl, { params });
  }

  getTypeById(id: number): Observable<IType> {
    return this.http.get<IType>(`${this.apiUrl}/${id}`);
  }

  createType(type: IType): Observable<IType> {
    console.log(this.apiUrl, type)
    return this.http.post<IType>(this.apiUrl, type);
  }

  updateType(id: number, type: IType): Observable<IType> {
    return this.http.put<IType>(`${this.apiUrl}/${id}`, type);
  }

  deleteType(id: number): Observable<IType> {
    return this.http.delete<IType>(`${this.apiUrl}/${id}`);
  }
}
