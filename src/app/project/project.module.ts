import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import {TypeTesterComponent} from "./type-tester/type-tester.component";
import {ProjectRoutingModule} from "./project-routing.module";



@NgModule({
  declarations: [ProjectComponent, TypeTesterComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
