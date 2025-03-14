import { inject, Injectable } from '@angular/core';
import { TasksGateway } from '@models/tasks/gateway/tasks.gateway';
import { TaskModel } from '@models/tasks/tasks.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '@store/app.reducer';
import { addTask, completedTask, deleteTask } from '@store/tasks/actions/tasks.action';
import { getTasks } from '@store/tasks/selector/tasks.selector';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends TasksGateway {

  private readonly _store = inject(Store<AppState>);

    constructor() {
      super()
    }

  public getTasks(): Observable<TaskModel[]> {
    return this._store.pipe(select(getTasks));
  }

  public createTask(task: TaskModel): Observable<TaskModel> {
    this._store.dispatch(addTask({ task }));

    return of(task);
  }

  public updateTask(task: TaskModel, id: number): Observable<TaskModel> {
    this._store.dispatch(completedTask({ id }));

    return of(task);
  }

  public deleteTask(id: number): Observable<string> {
    this._store.dispatch(deleteTask({ id }));

    return of('Tarea eliminada');
  }

  
}
