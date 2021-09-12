/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TasksModule } from '../tasks.module';
import { Task } from './task';

@Injectable()
export class TaskService {

  tasks: Task[] = [
    { id: 1, description: 'Tarefa 1', completed: true },
    { id: 2, description: 'Tarefa 2', completed: true },
    { id: 3, description: 'Tarefa 3', completed: true },
    { id: 4, description: 'Tarefa 4', completed: false },
    { id: 5, description: 'Tarefa 5', completed: false },
    { id: 6, description: 'Tarefa 6', completed: false },
    { id: 7, description: 'Tarefa 7', completed: false },
    { id: 8, description: 'Tarefa 8', completed: false },
    { id: 9, description: 'Tarefa 9', completed: false },
    { id: 10, description: 'Tarefa 10', completed: false }
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find(task => task.id == id);
    return task;  
  }

  create(task: Task) {

  }

  update(task: Task) {

  }

  delete(id: number) {

  }
}
