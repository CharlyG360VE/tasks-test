import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskStatusEnum } from '@models/tasks/task.enum';
import { TaskModel } from '@models/tasks/tasks.model';
import { CardComponent } from '@UI/card/card.component';
import { TasksUseCase } from '@use-cases/tasks.use-cases';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  imports: [
    RouterLink,
    CardComponent,

  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export default class TasksComponent {

  private readonly _tasksUseCase = inject(TasksUseCase);
  private readonly _subscription$ = new Subscription();

  public tasks: TaskModel[] = [];
  public taskStatusEnum = TaskStatusEnum;

  ngOnInit() {
    this.getTasks();
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
  }

  public completedTask(task: TaskModel) {
    this._tasksUseCase.updateTask(task, task.id);
  }

  public deleteTask(task: TaskModel) {
    this._tasksUseCase.deleteTask(task.id);
  }

  private getTasks() {
    this._subscription$.add(
      this._tasksUseCase.getTasks().subscribe(
        {
          next: response => this.tasks = response
        }
      )
    );
  }

}
