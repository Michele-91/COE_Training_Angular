import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  putData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
