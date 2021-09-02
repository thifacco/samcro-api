/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {

   // continuar em: https://youtu.be/wuK1MvSpcAc?t=224

   // Criei uma API RESTful com NodeJs / Express / MongoDB para reproduzir o banco de dados dos personagens do seriado Sons Of Anarchy

   // Topics
   // nodejs express mongodb restful-api sonsofanarchyangels samcro

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

  }

  getById(id: number) {
     
  }

  create(task: Task) {

  }

  update(task: Task) {

  }

  delete(id: number) {

  }
}
