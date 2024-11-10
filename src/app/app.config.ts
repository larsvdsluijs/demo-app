import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import {CombinedComponent} from "./views/combined/combined.component";
import {StartComponent} from "./views/start/start.component";


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'demo', component: CombinedComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
    // Add any other providers you may have here
  ]
};
