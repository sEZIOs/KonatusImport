import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  public title = 'konatus-authentification';
  public showState: Boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  public stateSwitch(): void{
    this.showState = !this.showState;
  }
}
