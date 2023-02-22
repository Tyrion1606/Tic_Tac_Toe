import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button style="width:100%; font-size: 1000%;" >{{value}}</button>
  `,
  styles: [

  ]
})
export class SquareComponent {
  @Input() value?: 'X' | 'O' ;
}
