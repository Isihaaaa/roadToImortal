import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiagramComponent} from "./component/diagram.component";
import { HttpClientModule } from "@angular/common/http";
import {NgChartsModule} from "ng2-charts";



@NgModule({
  declarations: [DiagramComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChartsModule
  ]
})
export class DiagramModule { }
