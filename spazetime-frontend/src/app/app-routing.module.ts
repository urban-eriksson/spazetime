import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SpazetimeComponent } from './spazetime/spazetime.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'spazetime', component: SpazetimeComponent},
  { path: '', redirectTo: '/spazetime', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
