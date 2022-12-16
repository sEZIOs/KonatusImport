import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping-assembler',
  templateUrl: './mapping-assembler.component.html',
  styleUrls: ['./mapping-assembler.component.scss']
})
export class MappingAssemblerComponent implements OnInit {

  @Input() state : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
