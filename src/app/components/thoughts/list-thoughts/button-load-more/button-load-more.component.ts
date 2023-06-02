import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-load-more',
  templateUrl: './button-load-more.component.html',
  styleUrls: ['./button-load-more.component.scss'],
})
export class ButtonLoadMoreComponent {
  @Input() existMoreThoughts: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
