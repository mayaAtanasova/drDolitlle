import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAd } from '../interfaces/ad';
import { IAdBase } from '../interfaces/ad-base';

const baseUrl = 'http://localhost:8080/adlist';
@Injectable({
  providedIn: 'root'
})


export class AdsService {

  constructor(private http: HttpClient) { }

  getAllAds(params: any): Observable<any> {
    const ads = this.http.get<IAd[]>(baseUrl, { params });
    return ads;
  }
  getLastThreeAds(): Observable<any> {
    const ads = this.http.get<IAd[]>(`${baseUrl}/lastthree`);
    return ads;
  }
  getAdById(id: string): Observable<IAd> {
    return this.http.get<IAd>(`${baseUrl}/${id}`);
  }
  createAd(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  updateAd(id: string, data: FormData): Observable<any> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
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
