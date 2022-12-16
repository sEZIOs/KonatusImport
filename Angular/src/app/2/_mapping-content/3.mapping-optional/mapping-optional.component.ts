import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/_data/project';

@Component({
  selector: 'app-mapping-optional',
  templateUrl: './mapping-optional.component.html',
  styleUrls: ['./mapping-optional.component.scss']
})
export class MappingOptionalComponent implements OnInit {

  constructor() { }
  
  projects = projects;

  ngOnInit(): void {
  }

}
