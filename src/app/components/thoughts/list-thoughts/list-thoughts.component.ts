import { Component } from '@angular/core';
import { Thought } from '../IThought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent {
  listThoughts: Thought[] = [];
  pageAtual: number = 1;
  existMoreThoughts: boolean = true;
  filter: string = '';
  favorites: boolean = false;
  listFavorites: Thought[] = [];
  title: string = 'Meu Mural';

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .getThoughts(this.pageAtual, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  loadMoreThoughts() {
    this.service
      .getThoughts(++this.pageAtual, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts);
        if (!listThoughts.length) {
          this.existMoreThoughts = false;
        }
      });
  }

  searchThoughts() {
    this.existMoreThoughts = true;
    this.pageAtual = 1;
    this.service
      .getThoughts(this.pageAtual, this.filter, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  getFavorites() {
    this.title = 'Meu Favoritos';
    this.favorites = true;
    this.existMoreThoughts = true;
    this.pageAtual = 1;
    this.service
      .getThoughts(this.pageAtual, this.filter, this.favorites)
      .subscribe((listThoughtsFavorites) => {
        this.listThoughts = listThoughtsFavorites;
        this.listFavorites = listThoughtsFavorites;
      });
  }

  reloadComponents() {
    this.favorites = false;
    this.pageAtual = 1;
    this.router.navigate([this.router.url]);
  }
}
