import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerView: string | undefined;
  @Input() text: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
