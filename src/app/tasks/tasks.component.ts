import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'task1',
      summary: 'Hello Iman, i ... you too much, antique!',
      dueDate: '2025'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'task2',
      summary: 'Hello Bahar, i love you too much, sweetie!',
      dueDate: '2026'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'task3',
      summary: 'Hello Iman, i ... you too much, antique!',
      dueDate: '2020'
    },
    {
      id: 't4',
      userId: 'u5',
      title: 'task4',
      summary: 'Hello Iman, i ... you too much, antique!',
      dueDate: '2023'
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'task5',
      summary: 'Hello Iman, i ... you too much, antique!',
      dueDate: '2024'
    },
  ];

  get selectedTask () {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
