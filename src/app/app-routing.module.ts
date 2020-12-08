import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NouvellePartieComponent } from './pages/nouvelle-partie/nouvelle-partie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NouvellePartieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
