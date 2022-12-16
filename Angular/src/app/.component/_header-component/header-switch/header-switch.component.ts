import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-switch',
  templateUrl: './header-switch.component.html',
  styleUrls: ['./header-switch.component.scss']
})
export class HeaderSwitchComponent implements OnInit {

  @Input() headerView: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
