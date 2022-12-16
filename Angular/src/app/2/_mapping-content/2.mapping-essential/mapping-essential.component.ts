import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/_data/project';

@Component({
  selector: 'app-mapping-essential',
  templateUrl: './mapping-essential.component.html',
  styleUrls: ['./mapping-essential.component.scss']
})
export class MappingEssentialComponent implements OnInit {

  constructor() { }

  projects = projects;

  ngOnInit(): void {
  }

}
