import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from '../app/components/first/first.component'
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {path: "first", component: FirstComponent},
  {path: "second", component: SecondComponent},
  { path: '**', redirectTo: '/first', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
