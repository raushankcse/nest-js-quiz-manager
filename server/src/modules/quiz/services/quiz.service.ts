import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/createQuiz.dto";
import { Repository } from "typeorm";
import { Quiz } from "../entity/quiz.entity";
import { Question } from "../entity/question.entity";


@Injectable()
export class QuizService{
  constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>){}


  async getAllQuiz(): Promise<Quiz[]>{
    return await this.quizRepository
    .createQueryBuilder('q')
    .leftJoinAndSelect('q.questions', 'qt')
    .leftJoinAndSelect('qt.options','o')
    .getMany()
  }

  async getQuizById(id: number): Promise<Quiz>{
    return await this.quizRepository.findOne({where: {id}, relations: ['questions','questions.options']});
  } 


  async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz); 
  }
}