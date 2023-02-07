import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IdEndpointsService {

  constructor(private http: HttpClient) { }

  getGeneric(bodyParam: any, endPointParam: any): Observable<any>{
    return this.http.get<Observable<any>>(`${this.http}/${endPointParam}`, bodyParam);

  }
}

