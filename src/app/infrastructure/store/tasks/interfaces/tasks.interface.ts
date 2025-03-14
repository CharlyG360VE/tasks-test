import { TaskModel } from "@models/tasks/tasks.model";

export interface IAddtaskAction {
  task: TaskModel;
}

export interface ICompletedAndDeleteTaskAction {
  id: number;
}


export interface ITasksInitialState {
  tasks: TaskModel[];
}
