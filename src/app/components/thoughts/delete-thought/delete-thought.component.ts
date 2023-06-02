import { Component } from '@angular/core';
import { Thought } from '../IThought';
import { Observable } from 'rxjs';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.scss'],
})
export class DeleteThoughtComponent {
  thought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: '',
    favorite: false,
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchId(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }
  deleteThought() {
    if (this.thought.id) {
      this.service.deleteThought(this.thought.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }
}
