import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '',component:LandingComponent }, 
  { path: 'Album/:id',component:AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
