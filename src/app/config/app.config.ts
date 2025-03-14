import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TasksUseCase } from '@use-cases/tasks.use-cases';
import { TasksService } from '@driven-adapter/tasks/tasks.service';
import { ActionReducer, provideStore, MetaReducer } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { APP_REDUCER } from '@store/app.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      keys: [
        'tasks'
      ],
      rehydrate: true
    }
  )(reducer);
}

const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    {
      provide: TasksUseCase,
      useClass: TasksService
    },
    provideStore(APP_REDUCER, { metaReducers }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true
    })
  ]
};