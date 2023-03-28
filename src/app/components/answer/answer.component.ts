import { Component, OnInit, Output } from '@angular/core';
import { AnswerEventService } from 'src/app/services/answer-event.service';
import { CountService } from 'src/app/services/count.service';
import { QuizService } from 'src/app/services/quiz.service';
import {url} from 'src/constant';
import {url1} from 'src/constant'
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit
{
  quiz:any=[]
   constructor(private countService:CountService,private quizService:QuizService,private answerEventService:AnswerEventService){
    this.answerEventService.dataEmitter.subscribe((res)=>{
      if(res.mcq.ques==res.mcq.ans){
        this.quizService.raiseDataEmitterEvent({"count":this.quizService.count++,"url1":url1,"id":res.mcq.id,"ques":res.mcq.ques,"correct":true})
      }else{
        this.quizService.raiseDataEmitterEvent({"count":this.quizService.count,"url":url,"id":res.mcq.id,"ques":res.mcq.ques,"correct":false})
      }
   })
   }
   count=0;
   ngOnInit():void{
     this.countService.dataEmitter.subscribe((res)=>{
        this.count=res.count
        this.flag=res.flag
     })
   }
   flag=true
}
