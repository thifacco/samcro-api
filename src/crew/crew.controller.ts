/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Crew } from './shared/crew';
import { CrewService } from './shared/crew.service';

@Controller('crews')
export class CrewController {

   constructor(
      private crewService: CrewService
   ) { }

   @Get()
   async getAll(): Promise<Crew[]> {
      return this.crewService.getAll();
   }

   @Get(':id')
   async getById(@Param('id') id: string): Promise<Crew> {
      return this.crewService.getById(id);
   }

   @Post()
   async create(@Body() crew: Crew): Promise<Crew> {
      return this.crewService.create(crew);
   }
}
