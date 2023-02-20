import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";
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
