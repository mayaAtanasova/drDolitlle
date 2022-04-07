import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAd } from '../interfaces/ad';

const baseUrl = 'http://localhost:8080/adlist';
@Injectable({
  providedIn: 'root'
})


export class AdsService {

  constructor(private http: HttpClient) { }

  getAllAds(params: any): Observable<any> {
    const tutorials = this.http.get<IAd[]>(baseUrl, { params });
    return tutorials;
  }
  getAdById(id: string): Observable<IAd> {
    return this.http.get<IAd>(`${baseUrl}/${id}`);
  }
  createAd(data: IAd): Observable<IAd> {
    return this.http.post<IAd>(baseUrl, data);
  }
  updateAd(id: string, data: IAd): Observable<IAd> {
    return this.http.put<IAd>(`${baseUrl}/${id}`, data);
  }
  deleteAd(id: string): Observable<IAd> {
    return this.http.delete<IAd>(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<IAd[]> {
    return this.http.delete<IAd[]>(baseUrl);
  }
  findByCategory(category: string): Observable<IAd[]> {
    return this.http.get<IAd[]>(`${baseUrl}?category=${category}`);
  }

}
