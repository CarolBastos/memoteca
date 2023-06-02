import { Component } from '@angular/core';
import { Thought } from '../IThought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.scss'],
})
export class CreateThoughtsComponent {
  form!: FormGroup;

  constructor(
    private router: Router,
    private service: ThoughtService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      author: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      model: ['modelo1'],
      favorite: false,
    });
  }

  createThought() {
    if (this.form.valid) {
      this.service.createThought(this.form.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
