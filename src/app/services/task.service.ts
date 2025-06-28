import { Injectable } from '@angular/core';
import { AddedTask } from '../models/added-task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'task1',
      summary: 'Hello Iman, i ... you too much, antique!',
      dueDate: '2025-12-5'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'task2',
      summary: 'Hello Bahar, i love you too much, sweetie!',
      dueDate: '2026-30-10'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'task3',
      summary: 'Hello Iman, i ... you too much, antique!',
      dueDate: '2020-2-2'
    },
    {
      id: 't4',
      userId: 'u5',
      title: 'task4',
      summary: 'Hello Iman, i ... you too much, antique!',
      dueDate: '2023-1-1'
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'task5',
      summary: 'Hello Iman, i ... you too much, antique!',
      dueDate: '2024-2-3'
    },
  ];

  constructor () {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData: AddedTask, userId: string) {
    const customId = this.tasks.length+1;
    this.tasks.push({
      id: `t${customId}`, 
      userId: userId, 
      ...taskData
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks () {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
