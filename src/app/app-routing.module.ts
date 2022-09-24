import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/pages/characters/character-details/character-details.component';
import { CharacterListComponent } from './components/pages/characters/character-list/character-list.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeModule } from './components/pages/home/home.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path: '404', component: NotFoundComponent},
  { path: 'home', component: HomeComponent}, 
  { path: 'character-list', component: CharacterListComponent}, 
  { path: 'character-details/:id', component: CharacterDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
