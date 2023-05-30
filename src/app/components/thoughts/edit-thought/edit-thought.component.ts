import { Component } from '@angular/core';
import { Thought } from '../IThought';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent {
  thoughts: Thought = {
    content: '',
    author: '',
    model: 'modelo1',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchId(parseInt(id!)).subscribe((thought) => {
      this.thoughts = thought;
    });
  }

  editThought() {
    if (this.thoughts.id) {
      this.service.editThought(this.thoughts).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }
}
