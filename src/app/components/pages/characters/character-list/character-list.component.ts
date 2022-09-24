import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { Character } from '@app/shared/components/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { take, filter} from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

type RequestInfo = {
  next: string | null;
};
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})


export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  info: RequestInfo = {
    next: null,
  };

  private pageNum = 1;
  private query: string = '';

  constructor(@Inject(DOCUMENT) private document: Document, private characterSvc: CharacterService, private route: ActivatedRoute, private router: Router) {
    this.onUrlChanged();
  }
 
  ngOnInit(): void {this.characterSvc.getAllCharacters}

  
  ScrollDown(): void{
    if(this.info.next){
      this.pageNum++;
      this.getDataFromService();
    }
  }

  private onUrlChanged(): void {
    this.router.events.pipe(filter((event)=>event instanceof NavigationEnd))
    .subscribe(() => {
      this.characters = [];
      this.pageNum = 1;
      this.getCharactersByQuery();
    });
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      this.query = params['q'];
      this.getDataFromService();
    });
  }


  private getDataFromService(): void {
    this.characterSvc
    .searchCharacters(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe((res: any) =>{
        if (res?.results ?.length){
          const { info, results } = res;
          this.characters = [... this.characters, ... results];
          this.info = info;
        }
    });
    this.characterSvc
    .searchCharactersSpecies(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe((res: any) =>{
        if (res?.results ?.length){
          const { info, results } = res;
          this.characters = [... this.characters, ... results];
          this.info = info;
        }else {
          this.characters = [];
        }
    });
  }
}