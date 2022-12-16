import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-progress-pillule',
  templateUrl: './progress-pillule.component.html',
  styleUrls: ['./progress-pillule.component.scss']
})
export class ProgressPilluleComponent implements OnInit {

  @Input() pilluleState: string | undefined;

  color : {[key: string]: string} = {
    1 : 'purple-disable',
    2 : 'purple-disable',
    3 : 'purple-disable',
    4 : 'purple-disable',
    5 : 'purple-disable',
  }


  constructor() {}

  ngOnInit(): void {
    
    if (this.pilluleState == 'importView') {
      this.color["1"] = 'purple';
      this.color["2"] = 'purple-disable';
      this.color["3"] = 'purple-disable';
      this.color["4"] = 'purple-disable';
      this.color["5"] = 'purple-disable';
    } else if (this.pilluleState == 'mappingProgramView') {
      this.color["1"] = 'purple';
      this.color["2"] = 'purple';
      this.color["3"] = 'purple-disable';
      this.color["4"] = 'purple-disable';
      this.color["5"] = 'purple-disable';
    } else if (this.pilluleState == 'mappingEssentialView') {
      this.color["1"] = 'purple';
      this.color["2"] = 'purple';
      this.color["3"] = 'purple';
      this.color["4"] = 'purple-disable';
      this.color["5"] = 'purple-disable';
    }else if (this.pilluleState == 'mappingOptionalView') {
      this.color["1"] = 'purple';
      this.color["2"] = 'purple';
      this.color["3"] = 'purple';
      this.color["4"] = 'purple';
      this.color["5"] = 'purple-disable';
    }else if (this.pilluleState == 'visualizeView') {
      this.color["1"] = 'purple';
      this.color["2"] = 'purple';
      this.color["3"] = 'purple';
      this.color["4"] = 'purple';
      this.color["5"] = 'purple';
    }
  }

}
