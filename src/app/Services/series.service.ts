import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Series } from '../models/series.model'; 



import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = 'https://localhost:44330/api/series'; // Sätt din API-URL här

  constructor(private http: HttpClient) {}
  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUrl).pipe(
      catchError(this.handleError<Series[]>('getSeries', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} misslyckades: ${error.message}`);
      return of(result as T);
    };
  }
}
