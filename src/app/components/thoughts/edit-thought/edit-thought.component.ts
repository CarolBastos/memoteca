import { Component } from '@angular/core';
import { Thought } from '../IThought';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss'],
})
export class EditThoughtComponent {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.searchId(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: [thought.id],
        content: [
          thought.content,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        author: [
          thought.author,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        model: [thought.model],
        favorite: [thought.favorite],
      });
    });
  }

  editThought() {
    this.service.editThought(this.form.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else return 'botao__desabilitado';
  }
}
