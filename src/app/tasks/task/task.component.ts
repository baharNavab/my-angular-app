import { Component, Input } from '@angular/core';
import { type TaskModel } from '../../models/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {  
  @Input({required: true}) taskDetail!: TaskModel;

  constructor(private taskService: TaskService) {}

  onCompleteTask () {
    this.taskService.removeTask(this.taskDetail.id);
  }
}
