/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './person';

@Injectable()
export class PersonService {
  
   constructor(
      @InjectModel('Person') private readonly personModel: Model<Person>
   ) { }

   async getAll() {
      return await this.personModel.find().exec();
   }

   async getById(id: string) {
      return await this.personModel.findById(id).exec();
    }
  
    async create(person: Person) {
      const createdPerson = new this.personModel(person);
      return await createdPerson.save();
    }
  
    async update(id: string,  person: Person) {
      await this.personModel.updateOne({ _id: id}, person).exec();
      return this.getById(id);
    }
  
    async delete(id: string) {
      return await this.personModel.deleteOne({ _id: id }).exec();
    }
}
