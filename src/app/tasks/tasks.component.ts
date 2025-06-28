import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { AddedTask } from '../models/added-task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  public isAddingTask = false;

  constructor (private taskService: TaskService) {}

  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'task1',
  //     summary: 'Hello Iman, i ... you too much, antique!',
  //     dueDate: '2025-12-5'
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u1',
  //     title: 'task2',
  //     summary: 'Hello Bahar, i love you too much, sweetie!',
  //     dueDate: '2026-30-10'
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'task3',
  //     summary: 'Hello Iman, i ... you too much, antique!',
  //     dueDate: '2020-2-2'
  //   },
  //   {
  //     id: 't4',
  //     userId: 'u5',
  //     title: 'task4',
  //     summary: 'Hello Iman, i ... you too much, antique!',
  //     dueDate: '2023-1-1'
  //   },
  //   {
  //     id: 't5',
  //     userId: 'u2',
  //     title: 'task5',
  //     summary: 'Hello Iman, i ... you too much, antique!',
  //     dueDate: '2024-2-3'
  //   },
  // ];

  get selectedTask () {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask () {
    this.isAddingTask = true;
  }

  closeClicked () {
    this.isAddingTask = false;
  }

  addTask (addedTask: AddedTask) {
    this.isAddingTask = false;
  }
}
