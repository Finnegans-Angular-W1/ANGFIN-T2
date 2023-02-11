import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDeCambioService {

private url: string = 'https://www.dolarsi.com/api/api.php?type=dolar';

  constructor(private http: HttpClient) { }

 public getDolar(): Observable<any[]> {
  return this.http.get<any[]>(this.url);
} 

} 
