import { Component } from '@angular/core';
import { Thought } from '../IThought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.scss'],
})
export class ListThoughtsComponent {
  listThoughts: Thought[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.getThoughts().subscribe((listThoughts) => {
      this.listThoughts = listThoughts;
    });
  }
}
