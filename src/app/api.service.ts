import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:44359/api/publishers'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Method to make a GET request
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/get-publisher-by-id/1');
  }

  // Method to make a POST request
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/add-publisher', data);
  }
}
