import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction';


@Injectable({
  providedIn: 'root'
})

export class TransactionsService {
  private url: string = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions' ;
  private transaction: Transaction = { id: 0, amount: 0, concept: "",
    date: "", type: "", accountId: 0, userId: 0, toAccountId: 0};
  
  

  tokenManual: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MTM5MCwicm9sZUlkIjoyfSwiaWF0IjoxNjc2ODEzMTQ2LCJleHAiOjE2NzY4OTk1NDZ9.qflLLEpE6pe17MPdEehqd5OWwl5rGZE3OFVNhX7reJY";

  header:HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenManual}`,
    });
    
  
  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction>{
    console.log(this.header);
    return this.http.get<Transaction>(this.url, {headers: this.header});
  }

  getTransactionsId(transactionId: number): Observable<Transaction>{
    return this.http.get<Transaction>(this.url + `/${transactionId }`, {headers: this.header});
  }

  putTransactionsId(transactionId: number, body: any): Observable<Transaction>{
    return this.http.put<Transaction>(this.url + `/${transactionId}`, body ,{headers: this.header});
  }

  deleteTransactionsId(transactionId: number): Observable<Transaction>{
    return this.http.delete<Transaction>(this.url + `/${transactionId}`, {headers: this.header});
  }

}
