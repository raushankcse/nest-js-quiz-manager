import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entity/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService,
    
  ){}



  @Get('/')
  async getAllQuiz(): Promise<Quiz[]>{
    return await this.quizService.getAllQuiz();
  }

  
  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe)id: number){
    return await this.quizService.getQuizById(id);
  }


  @Post('create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto){
    return await this.quizService.createNewQuiz(quizData);
  }
}
