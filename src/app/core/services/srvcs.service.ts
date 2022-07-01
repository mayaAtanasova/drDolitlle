import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { IService } from '../interfaces/service';

const baseUrl = 'http://localhost:8080/servicelist';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<IService[]> {
    return this.http.get<IService[]>(baseUrl);
      // .pipe<IService[]>(map((data: any) => data.users));
  }

  updateService(service: IService): Observable<IService> {
    return this.http.patch<IService>(`${baseUrl}/${service._id}`, service);
  }

  addService(service: IService): Observable<IService> {
    return this.http.post<IService>(`${baseUrl}/add`, service);
  }

  deleteService(id: number): Observable<IService> {
    return this.http.delete<IService>(`${baseUrl}/${id}`);
  }

  deleteServices(services: IService[]): Observable<IService[]> {
    return forkJoin(
      services.map((service) =>
        this.http.delete<IService>(`${baseUrl}/${service._id}`)
      )
    );
  }

}
