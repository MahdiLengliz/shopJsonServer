import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {AdminLTEComponent} from './admin-lte/admin-lte.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  {path:'adminlte',component:AdminLTEComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
