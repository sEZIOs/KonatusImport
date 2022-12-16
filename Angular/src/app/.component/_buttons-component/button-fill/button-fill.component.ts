import { Component, Input, OnInit } from '@angular/core';
import { InterfaceViewService } from 'src/app/_services/interface-view/interface-view.service';

@Component({
  selector: 'app-button-fill',
  templateUrl: './button-fill.component.html',
  styleUrls: ['./button-fill.component.scss']
})
export class ButtonFillComponent implements OnInit {
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
      this.viewService.switchView("importNext")
    }
    else if(this.action=="mappingProgramView"){
      this.viewService.switchView("mappingProgramNext")
    }
    else if(this.action=="mappingEssentialView"){
      this.viewService.switchView("mappingEssentialNext")
    }
    else if(this.action=="mappingOptionalView"){
      this.viewService.switchView("mappingOptionalNext")
    }
    else if(this.action=="visualizeView"){
      this.viewService.switchView("visualizeSave")
    }
  }

}
