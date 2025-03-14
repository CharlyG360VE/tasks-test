import { Observable } from "rxjs";
import { TaskModel } from "../tasks.model";

export abstract class TasksGateway {

  abstract getTasks(): Observable<TaskModel[]>;
  abstract createTask(task: TaskModel): Observable<TaskModel>;
  abstract updateTask(task: TaskModel, id: number): Observable<TaskModel>;
  abstract deleteTask(id: number): Observable<string>;

}