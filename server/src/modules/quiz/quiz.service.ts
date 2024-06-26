import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/createQuiz.dto";
import { Repository } from "typeorm";
import { Quiz } from "./entity/quiz.entity";


@Injectable()
export class QuizService{
  constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>){}
  getAllQuiz(){
    return [1, 2, 3,4, 'From the service'];
  }

  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz); 
  }
}