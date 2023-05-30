import { Component } from '@angular/core';
import { Thought } from '../IThought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.scss'],
})
export class CreateThoughtsComponent {
  thoughts: Thought = {
    content: '',
    author: '',
    model: 'modelo1',
  };
  constructor(private router: Router, private service: ThoughtService) {}

  createThought() {
    this.service.createThought(this.thoughts).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
  cancel() {
    this.router.navigate(['/listarPensamento']);
  }
}
