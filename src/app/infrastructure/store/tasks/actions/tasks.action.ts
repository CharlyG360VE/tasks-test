import { createAction, props } from "@ngrx/store";
import { IAddtaskAction, ICompletedAndDeleteTaskAction } from "../interfaces/tasks.interface";

const ACTION_NAME = '[TASKS REDUCER]';

export const addTask = createAction(`${ACTION_NAME} add task`, props<IAddtaskAction>());
export const completedTask = createAction(`${ACTION_NAME} completed task`, props<ICompletedAndDeleteTaskAction>());
export const deleteTask = createAction(`${ACTION_NAME} delete task`, props<ICompletedAndDeleteTaskAction>());