/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

// Z0gXTofUUtvqb98L
// mongodb://samcrodev:Z0gXTofUUtvqb98L@samcroapidev.ceka4.mongodb.net/samcro?retryWrites=true&w=majority
// mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/samcroapi'),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
