import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpService) { }

  addReview(review: any, rating: any, token: any): Observable<any> {
    return this.http.POST('review', {review, rating}, token);
  }

  getReview(token: any): Observable<any> {
    return this.http.GET('review', token);
  }
}
