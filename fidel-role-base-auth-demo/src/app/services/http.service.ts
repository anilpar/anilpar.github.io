import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiEndPoint = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.apiEndPoint + url);
  }

  post(url: string, req_body: any) {
    return this.http.post(this.apiEndPoint + url, req_body);
  }
}
