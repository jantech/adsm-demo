import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailFormComponent } from './employee-detail-form/employee-detail-form.component';


const routes: Routes = [
  {
    path: '', component: EmployeeDetailFormComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
