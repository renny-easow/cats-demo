import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) { }
  /** GET cats from shibe.online */
  getCats(count: number): Observable<any> {
    const catsUrl = `http://shibe.online/api/cats?count=${count}&urls=true&httpsUrls=false`;
    return this.http.get(catsUrl);
  }
}
