import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './app/presentation/views/main/main.component';
import { appConfig } from './app/config/app.config';

bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));
