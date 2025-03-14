import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { randomNumber } from '@helpers/random-number.helper';
import { TaskStatusEnum } from '@models/tasks/task.enum';
import { TaskModel } from '@models/tasks/tasks.model';
import { TasksUseCase } from '@use-cases/tasks.use-cases';

@Component({
  selector: 'app-task-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export default class TaskFormComponent {

  private readonly _fb = inject(FormBuilder);
  private readonly _tasksUseCase = inject(TasksUseCase);
  private readonly _router = inject(Router);

  public form = this._fb.group<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
  }>(
    {
      title: this._fb.control(null, { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(50)] }),
      description: this._fb.control(null, { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(250)] }),
    }
  );

  public save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }
    const id = randomNumber();
    const task = new TaskModel(
      {
        id,
        title: this.form.controls.title.value!,
        description: this.form.controls.description.value!,
        status: TaskStatusEnum.PENDING
      }
    )

    this._tasksUseCase.createTask(task);
    this._router.navigate(['tasks']);
  }

}
