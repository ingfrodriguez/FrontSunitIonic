import { Component, OnInit, Input} from '@angular/core';
import { MenuInterface } from 'src/app/models/menu';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo : string | undefined;
  @Input() icono = '';
  @Input() print = false;
  @Input()
  MenusExtras: MenuInterface[] = [];
  constructor() { }

  ngOnInit() {}

exportexcel(): void
    {
       /* table id is passed over here */
       let element = document.getElementById('excel-table');
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);


       //XLSX.utils.sheet_add_aoa(ws, [['YourValue']], {origin: "A1"});
       //hay que ponerle titulo

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, this.titulo);

       /* save to file */
       XLSX.writeFile(wb, this.titulo+'.xlsx');

    }


}
