import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.baseUrl;

  public POST(url:any,data:any,token):any{
    return this.http.post<any>(this.baseUrl+url,data,token);
  }

  public PUT(url:any,data:any,token):any{
    return this.http.put<any>(this.baseUrl+url,data,token);
  }

  public DELETE(url:any,data:any,token):any{
    return this.http.delete<any>(this.baseUrl+url,token);
  }

  public GET(url:any,token):any{
    return this.http.get<any>(this.baseUrl+url,token);
  }
}
