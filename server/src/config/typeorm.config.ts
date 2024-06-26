import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Question } from "src/modules/quiz/entity/question.entity";
import { Quiz } from "src/modules/quiz/entity/quiz.entity";


export const typeOrmConfig: TypeOrmModuleOptions ={
  type:'postgres',
  host:'localhost', 
  port: 5433,
  username: 'postgres',
  password: 'pR0103@',
  database: 'quiz',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // entities: [Quiz, Question],
  synchronize: true
  
}