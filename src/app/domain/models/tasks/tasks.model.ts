import { TaskStatusEnum } from "./task.enum";
import { ITaskModelOptions } from "./tasks.interface";

export class TaskModel {

  public id: number;
  public title: string;
  public description: string;
  public status: TaskStatusEnum;
  
  constructor({
    id,
    title,
    description,
    status
  }: ITaskModelOptions) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }

}