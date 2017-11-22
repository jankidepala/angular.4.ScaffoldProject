import { Component, Input, OnInit, style } from '@angular/core';

@Component({
  selector: 'app-widget-one',
  template:
  `<ng-content select="h1"></ng-content>
  <ng-content select="h3"></ng-content>
  <ng-content select=[header]></ng-content>
  <ng-content select=".weirdos"></ng-content>
  {{message}}`,
  styles: [`
  :host{
    border: 3px solid #fe1;
  }`
  ]
})
export class WidgetOneComponent implements OnInit {
    selected = true;
    @Input() message;
  constructor() {}

  ngOnInit() {
  }

}
