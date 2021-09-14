/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrewController } from './crew.controller';
import { CrewSchema } from './schemas/crew.shema';
import { CrewService } from './shared/crew.service';

@Module({
   imports: [
      MongooseModule.forFeature([{name: 'Crew', schema: CrewSchema}])
   ],
   controllers: [CrewController],
   providers: [CrewService]
})
export class CrewModule {}
