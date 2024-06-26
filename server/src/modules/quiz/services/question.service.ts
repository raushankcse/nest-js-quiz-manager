import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "../entity/question.entity";
import { Repository } from "typeorm";
import { Quiz } from "../entity/quiz.entity";


@Injectable()
export class QuestionService{
  constructor(
    @InjectRepository(Question)
    private questionRepostiry: Repository<Question>,
    
  ){}


  async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> { 
    const newQuestion = await this.questionRepostiry.save({question: question.question});

    quiz.questions = [...quiz.questions,newQuestion];
    await quiz.save();
    
    return newQuestion;
  }
}