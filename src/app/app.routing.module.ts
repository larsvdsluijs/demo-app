import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AsyncComponent} from "./views/async/async.component";

export const routes: Routes = [
  { path: 'async', component: AsyncComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
