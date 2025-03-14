import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: '',
    loadComponent: (async () => await import('@views/layout/components/layout/layout.component')),
    children: [
      {
        path: 'inicio',
        loadComponent: (async () => await import('@views/home/components/home/home.component'))
      },
      {
        path: 'tasks',
        loadComponent: (async () => await import('@views/tasks/components/tasks/tasks.component'))
      },
      {
        path: 'tasks/crear-tarea',
        loadComponent: (async () => await import('@views/tasks/components/task-form/task-form.component'))
      }
    ]
  }
];
