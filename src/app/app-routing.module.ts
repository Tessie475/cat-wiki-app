import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsDetailsComponent } from './Pages/breeds-details/breeds-details.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'breed-details', component: BreedsDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
