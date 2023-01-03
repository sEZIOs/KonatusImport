import { Component, OnInit, Input } from '@angular/core';
import { projects } from 'src/app/_data/project';
import { sharedService } from 'src/app/_data/shared.service';



@Component({
  selector: 'app-mapping-program',
  templateUrl: './mapping-program.component.html',
  styleUrls: ['./mapping-program.component.scss']
})
export class MappingProgramComponent implements OnInit {

  projects = projects;
  data1: any;
  cell: any;
  constructor(private readonly shared: sharedService) { }
  ngOnInit(): void {
    this.data1 = this.shared.getData();
    for (let i = 0; i <= this.data1.length;) {
      this.cell = this.data1[i];
      console.log(this.cell);
      i++;
    }
  }
}
