import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/_data/project';


@Component({
  selector: 'app-mapping-program',
  templateUrl: './mapping-program.component.html',
  styleUrls: ['./mapping-program.component.scss']
})
export class MappingProgramComponent implements OnInit {

  projects = projects;

  constructor() { }
  ngOnInit(): void {
  }

}
