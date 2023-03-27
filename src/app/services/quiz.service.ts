import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http:HttpClient) {}
  url='http://localhost:3000/quiz';
  getDataQuestions(){
   return this.http.get(this.url)
  }
}
