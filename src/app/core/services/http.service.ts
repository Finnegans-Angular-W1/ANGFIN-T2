import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { ActivationEnd } from "@angular/router";
import { Observable } from "rxjs";

//import { api_url } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _groupId!: string;
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public get<T>(url: string, activateHeader: boolean = false): Observable<T> {
    return this.http.get<T>(
      url,
      activateHeader ? { headers: this._headers } : {}
    );
  }

  public postGeneric<T>(api_url: string, body:any, idParam:string = ''): Observable<T> {
    return this.http.post<T>(api_url + idParam, body);
  }

  // Método patch y put genérico. 
  // Requiere de parámetros el endpoint de la url y el id, la información a modificar/agregar, y si es necesario agregar headers.
  public patch<T>(api_url: string, body: T, id: number, activateHeader:boolean = false): Observable<T> {
    return this.http.patch<T>(api_url + id, body, activateHeader ? {headers: this._headers}: {})
  }

  public put<T>(api_url: string, body:any, idParam:string = ''): Observable<T> {
   return this.http.put<T>(api_url + idParam, body);   
  }

  public delete<T>(url: string, id:number, activateHeader:boolean = false ):Observable<T> {
    return this.http.delete<T>(url + `/${id}`, activateHeader ? { headers: this._headers }: {});
  }

  public getId<T>(url: string, id: number, activateHeader: boolean = false): Observable<T>{
    return this.http.get<T>(url + `/${id}`, activateHeader ? { headers: this._headers }: {});
  }
}
