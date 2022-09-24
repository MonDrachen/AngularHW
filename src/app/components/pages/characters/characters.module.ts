import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterComponent } from '@characters//character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PipesModule } from '@app/pipes/pipes.module';

const MyComponents = [CharacterDetailsComponent, CharacterListComponent, CharacterComponent]

@NgModule({
  declarations: [
    ...MyComponents
  ],
  imports: [
    CommonModule, RouterModule, InfiniteScrollModule, PipesModule
  ],
  exports: [
    ...MyComponents
  ],
})
export class CharactersModule { }
