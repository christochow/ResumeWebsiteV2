import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from "./project.component";
import {TypeTesterComponent} from "./type-tester/type-tester.component";


const routes: Routes = [
  { path: 'projects',  component: ProjectComponent },
  { path: 'projects/type', component: TypeTesterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }
