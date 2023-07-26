// wordpress.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService{
  private readonly apiUrl = '/wordpress/wp-json/wp/v2/';
  
  constructor(private http: HttpClient) { }


  getPosts(): Observable<any[]> {
    const url = this.apiUrl + 'posts';
    return this.http.get<any[]>(url);
  }

  getPostById(id: number): Observable<any> {
    const url = this.apiUrl + `posts/${id}`;
    return this.http.get<any>(url);
  }
  
}
