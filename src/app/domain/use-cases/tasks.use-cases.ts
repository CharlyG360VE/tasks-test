import { TasksGateway } from "@models/tasks/gateway/tasks.gateway";
import { TaskModel } from "@models/tasks/tasks.model";
import { Observable } from "rxjs";

export class TasksUseCase {

  constructor(private readonly _tasksGateway: TasksGateway) { }

  public getTasks(): Observable<TaskModel[]> {
    return this._tasksGateway.getTasks();
  }

  public createTask(task: TaskModel): Observable<TaskModel> {
    return this._tasksGateway.createTask(task);
  }

  public updateTask(task: TaskModel, id: number): Observable<TaskModel> {
    return this._tasksGateway.updateTask(task, id);
  }

  public deleteTask(id: number): Observable<string> {
    return this._tasksGateway.deleteTask(id);
  }

}