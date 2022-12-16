import { Component, Input, OnInit } from '@angular/core';
import { InterfaceViewService } from 'src/app/_services/interface-view/interface-view.service';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.scss']
})
export class ButtonOutlineComponent implements OnInit {

  @Input() buttonText: string | undefined;
  @Input() action: string | undefined;

  selectedData : any;

  constructor(private viewService: InterfaceViewService) { }
  ngOnInit(): void {
    this.viewService.selectedView.subscribe((value) => {
      this.selectedData = value;
    });
  }
  sendData(){
    
    if(this.action=="importView"){
      this.viewService.switchView("importCancel")
    }
    else if(this.action=="mappingProgramView"){
      this.viewService.switchView("mappingProgramBack")
    }
    else if(this.action=="mappingEssentialView"){
      this.viewService.switchView("mappingEssentialBack")
    }
    else if(this.action=="mappingOptionalView"){
      this.viewService.switchView("mappingOptionalBack")
    }
    else if(this.action=="visualizeView"){
      this.viewService.switchView("visualizeBack")
    }
  }
}
