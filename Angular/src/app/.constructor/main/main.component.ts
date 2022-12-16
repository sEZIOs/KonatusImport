import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/_data/project';

import { InterfaceViewService } from 'src/app/_services/interface-view/interface-view.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  selectedData: string | undefined;

  view: { [key: string]: boolean } = {
    default: true,
    import: false,
    mapping: false,
    visualize: false,
  };

  mappingState: string = 'program';

  constructor(private viewService: InterfaceViewService) {}

  ngOnInit(): void {
    this.viewService.selectedView.subscribe((value) => {
      this.selectedData = value;
      if (this.selectedData == 'importNext') {
        this.changeView('mapping');
      } else if (this.selectedData == 'mappingProgramNext') {
        this.mappingState = 'essential';
        this.reset();
      } else if (this.selectedData == 'mappingEssentialNext') {
        this.mappingState = 'optional';
        this.reset();
      } else if (this.selectedData == 'mappingOptionalNext') {
        this.changeView('visualize');
        this.reset();
      } else if (this.selectedData == 'visualizeSave') {
        this.changeView('default');
        this.reset();
      } else if (this.selectedData == 'importCancel') {
        this.changeView('default');
      } else if (this.selectedData == 'mappingProgramBack') {
        this.changeView('import');
        this.reset();
      } else if (this.selectedData == 'mappingEssentialBack') {
        this.mappingState = 'program';
        this.reset();
      } else if (this.selectedData == 'mappingOptionalBack') {
        this.mappingState = 'essential';
        this.reset();
      } else if (this.selectedData == 'visualizeBack') {
        this.mappingState = 'optional';
        this.changeView('mapping');
        this.reset();
      }
    });
  }

  swichView() {
    if (this.view['default'] == true) {
      this.changeView('import');
    } else {
      this.changeView('default');
      this.mappingState = 'program';
      this.reset();
    }
  }

  changeView(viewState: string) {
    for (let prop in this.view) {
      if (prop == viewState) {
        this.view[prop] = true;
      } else {
        this.view[prop] = false;
      }
    }
  }

  reset() {
    for (let i = 0; i < projects.length; i++) {
      if (i == 0) {
        projects[i].selected = true;
      } else {
        projects[i].selected = false;
      }
    }
  }
}
