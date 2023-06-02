import { Component, Input } from '@angular/core';
import { Thought } from '../IThought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent {
  @Input() thought: Thought = {
    id: 0,
    content: 'I Love Angular',
    author: 'Carol',
    model: 'modelo3',
    favorite: false,
  };

  @Input() listFavorites: Thought[] = [];

  constructor(private service: ThoughtService) {}

  larguraPensamento(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  changeIconFavorite(): string {
    if (this.thought.favorite === true) {
      return 'ativo';
    } else {
      return 'inativo';
    }
  }

  updateFavorite() {
    this.service.changeFavorite(this.thought).subscribe(() => {
      this.listFavorites.splice(this.listFavorites.indexOf(this.thought), 1);
    });
  }
}
