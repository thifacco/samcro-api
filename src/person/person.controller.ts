/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Person } from './shared/person';
import { PersonService } from './shared/person.service';

@Controller('person')
export class PersonController {

   constructor(
      private personService: PersonService
   ) { }

   @Get()
   async getAll(): Promise<Person[]> {
      return this.personService.getAll();
   }

   @Get(':id')
   async getById(@Param('id') id: string): Promise<Person> {
      return this.personService.getById(id);
   }

   @Post()
   async create(@Body() Person: Person): Promise<Person> {
      return this.personService.create(Person);
   }

   @Put(':id')
   async update(@Param('id') id: string, @Body() Person: Person): Promise<Person> {
      return this.personService.update(id, Person);
   }

   @Delete(':id')
   async delete(@Param('id') id: string) {
      this.personService.delete(id);
   }
}
