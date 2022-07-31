import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {

  @Input()
  name: string = '';

  @Input()
  trend: number = 0;

  @Input()
  value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
