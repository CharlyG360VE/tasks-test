import { ActionReducerMap } from "@ngrx/store";
import { ITasksInitialState } from "./tasks/interfaces/tasks.interface";
import { tasksReducer } from "./tasks/reducer/tasks.reducer";

export interface AppState {
  tasks: ITasksInitialState;
}

export const APP_REDUCER: ActionReducerMap<AppState> = {
  tasks: tasksReducer
};