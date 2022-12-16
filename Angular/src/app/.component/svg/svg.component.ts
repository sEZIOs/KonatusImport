import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {

  @Input() name: string | undefined;
  @Input() w: string | undefined;
  @Input() h: string | undefined;
  @Input() color: string | undefined;

  

  constructor() { }

  ngOnInit(): void {
  }

}
