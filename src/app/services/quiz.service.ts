import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  count=0;
  constructor(private http:HttpClient) {}
  url='http://localhost:3000/quiz';
  getDataQuestions(page:any,limit:any){
    const params={
      _page:page,
      _limit:limit
    }
   return this.http.get(this.url,{params:params})
  }

  UpdateScore(data:any){
    return this.http.put('http://localhost:3000/score/1',data)
  }
  getScore(){
    return this.http.get('http://localhost:3000/score/1')
  }
  dataEmitter=new EventEmitter<any>();
  raiseDataEmitterEvent(data:any)
  {
      this.dataEmitter.emit(data)
  }

  dataEmit=new EventEmitter<any>();
  raiseDataEmitterEvent1()
  {
      this.dataEmit.emit()
  }

}
