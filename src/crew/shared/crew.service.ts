/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crew } from './crew';

@Injectable()
export class CrewService {

   constructor(
      @InjectModel('Crew') private readonly crewModel: Model<Crew>
    ) { }
  
    async getAll() {
      return await this.crewModel.find().exec();
    }
  
    async getById(id: string) {
      return await this.crewModel.findById(id).exec();
    }
  
    async create(crew: Crew) {
      const createdPerson = new this.crewModel(crew);
      return await createdPerson.save();
    }

}
