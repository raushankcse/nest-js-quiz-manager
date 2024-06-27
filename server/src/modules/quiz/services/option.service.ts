import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Option } from "../entity/option.entity";
import { Repository } from "typeorm";
import { CreateOptionDto } from "../dto/create-option.dto";
import { Question } from "../entity/question.entity";


@Injectable()
export class OptionService{
  constructor(@InjectRepository(Option) private optionRepository: Repository<Option> ){}
  

  async createOption(option: CreateOptionDto, question: Question){
    const newOption = await  this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [...question.options, newOption];
    await question.save(); 

    return newOption;
  }
}