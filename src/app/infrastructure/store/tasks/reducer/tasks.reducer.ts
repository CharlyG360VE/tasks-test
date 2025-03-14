import { Action, createReducer, on } from "@ngrx/store";
import * as action from '../actions/tasks.action';
import { ITasksInitialState } from "../interfaces/tasks.interface";
import { TaskStatusEnum } from "@models/tasks/task.enum";

const initialState: ITasksInitialState = {
  tasks: []
};

const _tasksReducer = createReducer<ITasksInitialState, Action>(
  initialState,
    on(action.addTask, (state, { task }) => (
      {
        ...state,
        tasks: [...state.tasks, task]
      }
    )),
    on(action.completedTask, (state, { id }) => (
      {
        ...state,
        tasks: state.tasks.map(task => (
          task.id === id ?
          (
            {
              ...task,
              status: TaskStatusEnum.COMPLETED
            }
          ) :
          task
        ))
      }
    )),
    on(action.deleteTask, (state, { id }) => (
      {
        ...state,
        tasks: state.tasks.filter(task => task.id !== id)
      }
    ))
);

export const tasksReducer = (state: ITasksInitialState | undefined, action: Action) => _tasksReducer(state, action);
