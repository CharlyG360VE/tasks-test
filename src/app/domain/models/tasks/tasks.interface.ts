import { TaskStatusEnum } from "./task.enum";

export interface ITaskModelOptions {
  id: number;
  title: string;
  description: string;
  status: TaskStatusEnum;
}