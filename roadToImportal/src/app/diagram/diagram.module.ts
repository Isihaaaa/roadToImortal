import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiagramComponent} from "./component/diagram.component";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [DiagramComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DiagramModule { }
