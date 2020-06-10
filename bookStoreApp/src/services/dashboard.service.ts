import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService) { }

  public search(search: any): Observable<any> {
    return this.http.PUT('dashboard/search', search, '');
  }
}
