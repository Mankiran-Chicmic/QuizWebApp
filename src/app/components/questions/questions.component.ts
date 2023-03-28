import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswerEventService } from 'src/app/services/answer-event.service';
import { CountService } from 'src/app/services/count.service';
import { QuizService } from 'src/app/services/quiz.service';
import {url} from 'src/constant'
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent 
{
  quizForm=new FormGroup({
    mcq:new FormControl('',[Validators.required]),
  })

  quiz:any=[]
  count:any=0
  url:any=''
  url1:any=''
  id:number=0;
  ques:string=''
  mcq:boolean=false
  correct:boolean=false
  page:number=1
   constructor(private countService:CountService,private quizService:QuizService,private answerEventService:AnswerEventService){
    this.getRequestPagination()
      this.quizService.dataEmitter.subscribe((res)=>{
        this.count=res.count
        this.url=res.url
        this.url1=res.url1
        this.id=res.id
        this.ques=res.ques
        this.correct=res.correct
      })
   }

   totalPages=0;
   
   getRequestPagination(){
    this.quizService.getDataQuestions(this.page,1).subscribe((res:any) => {
      this.quiz=res // access your data which is limited to "10" per page
      console.log(res["X-Total-Count"]); // length of your data without page limit
    })
   }


  submitValue:boolean=false;
  quizSubmit(){
    this.answerEventService.raiseDataEmitterEvent(this.quizForm.value)
    this.submitValue=true;
  }

  submitRadio(){
      this.mcq=false
  }
  previous(){
     if(this.page>=1){
      this.page--
      this.getRequestPagination()
     }
  }
  next(){
    if(this.page<=2){
      this.page++
      this.totalPages+=this.page
      this.getRequestPagination()
     }
  }
 
  
  showResult(count:number,flag:boolean){
    this.countService.raiseDataEmitterEvent({"count":count,"flag":false})
    //this.quizService.raiseDataEmitterEvent1()
    //this.quizService.UpdateScore({"id":1,"status":count,"flag":false}).subscribe()
  }

  // router: any= function(req:any, res:any) {
  //   var newData = {
  //   TotalCount: res.get('X-Total-Count'),
  //   Result: res.locals.data
  //   }
  //      res.json(newData)
  //   }
}
