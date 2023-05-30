import { Component, Input } from '@angular/core';
import { Thought } from '../IThought';

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
  };

  larguraPensamento(): string {
    if (this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
