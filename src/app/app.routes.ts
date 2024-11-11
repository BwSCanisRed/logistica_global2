import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AdminComponent } from './admin/admin.component';
import { ConductorComponent } from './conductor/conductor.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tracking/:id', component: TrackingComponent }, // Asegúrate de que esta ruta esté definida con :id
  { path: 'conductor/:conductorId', component: ConductorComponent },
  { path: 'admin/:adminId', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
