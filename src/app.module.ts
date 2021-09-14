/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrewModule } from './crew/crew.module';
import { PersonModule } from './person/person.module';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/samcroapi'),
    TasksModule,
    PersonModule,
    CrewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
