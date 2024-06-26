import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "./entity/question.entity";
import { Repository } from "typeorm";


@Injectable()
export class QuestionService{
  constructor(
    @InjectRepository(Question)
    private questionRepostiry: Repository<Question>,
  ){}


  async createQuestion(question: CreateQuestionDto): Promise<Question> { 
    return await this.questionRepostiry.save(question);
  }
}