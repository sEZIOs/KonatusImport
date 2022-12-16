import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-link',
  templateUrl: './other-link.component.html',
  styleUrls: ['./other-link.component.scss']
})
export class OtherLinkComponent implements OnInit {
  @Input() konatusAttribut: string | undefined;
  @Input() csvAttribut: string | undefined;
  @Input() error : string | undefined;

  bgColor: string = 'bg-purple';
  borderColor: string = 'border-purple';
  color2: string = '#635AC6';
  icon: string = "valid";
  constructor() {}

  ngOnInit(): void {
    if (this.csvAttribut == '-- --' && this.error=="essential") {
      this.bgColor = 'bg-red';
      this.borderColor = 'border-red';
      this.color2 = '#CE5051';
      this.icon = "error";
    } else if (this.csvAttribut == '-- --' && this.error=="optional") {
      this.bgColor = 'bg-orange';
      this.borderColor = 'border-orange';
      this.color2 = '#C0752D';
      this.icon = "signal";
    }
  }

}
