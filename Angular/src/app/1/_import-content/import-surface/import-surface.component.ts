import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { sharedService } from 'src/app/_data/shared.service';

@Component({
  selector: 'app-import-surface',
  templateUrl: './import-surface.component.html',
  styleUrls: ['./import-surface.component.scss']
})
export class ImportSurfaceComponent implements OnInit {

  data: any;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  constructor(private readonly shared: sharedService) { }
  ngOnInit(): void {
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data);
      this.shared.setData(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
