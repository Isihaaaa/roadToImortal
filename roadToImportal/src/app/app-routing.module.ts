import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiagramComponent} from "./diagram/component/diagram.component";

const routes: Routes = [{path: '',component: DiagramComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
