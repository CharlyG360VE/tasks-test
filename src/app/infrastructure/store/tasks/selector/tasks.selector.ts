import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITasksInitialState } from "../interfaces/tasks.interface";

export const getTasksState = createFeatureSelector<ITasksInitialState>('tasks');

export const getTasks = createSelector(
  getTasksState,
  (state: ITasksInitialState) => state.tasks
);
