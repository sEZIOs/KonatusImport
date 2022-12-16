import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-link',
  templateUrl: './program-link.component.html',
  styleUrls: ['./program-link.component.scss']
})
export class ProgramLinkComponent implements OnInit {
  @Input() konatusAttribut: string | undefined;
  @Input() csvAttribut: string | undefined;
  @Input() value: string | undefined;

  bgColor: string = 'bg-purple';
  borderColor: string = 'border-purple';
  color2: string = '#635AC6';
  icon: boolean = true;
  constructor() {}

  ngOnInit(): void {
    if (this.csvAttribut == '-- --' || this.value == '-- --') {
      this.bgColor = 'bg-orange';
      this.borderColor = 'border-orange';
      this.color2 = '#C0752D';
      this.icon = false;
    }
  }

}
