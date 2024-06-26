import { Module } from '@nestjs/common';
import { QuizController } from './controller/quiz.controller';
import { QuizService } from './services/quiz.service';
import { QuestionController } from './controller/question.controller';
import { QuestionService } from './services/question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entity/quiz.entity';
import { Question } from './entity/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
