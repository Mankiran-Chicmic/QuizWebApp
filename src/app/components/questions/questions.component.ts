import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';

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
   constructor(private quizService:QuizService){
      this.quizService.getDataQuestions().subscribe((res)=>{
          console.log(res)
          this.quiz=res
      })
   }
   get id(){
    return this.quizForm.get('id')
   }
  
   get answer(){
    return this.quizForm.get('answer')
   }
    
   get questions(){
    return this.quizForm.get('questions')
   }
   get mcq(){
    return this.quizForm.get('mcq')
   }
  quizSubmit(){
    console.log(this.quizForm.value)
  }
}
