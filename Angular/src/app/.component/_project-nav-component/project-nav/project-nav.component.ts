import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/_data/project';

@Component({
  selector: 'app-project-nav',
  templateUrl: './project-nav.component.html',
  styleUrls: ['./project-nav.component.scss'],
})
export class ProjectNavComponent implements OnInit {
  projects = projects

  constructor() {}
  ngOnInit(): void {
  }

  selectProject(id: any): void {
    for (let i = 0; i < projects.length; i++) {
      if (id == projects[i].id) {
        projects[i].selected = true;
      } else {
        projects[i].selected = false;
      }
    }
  }
}
