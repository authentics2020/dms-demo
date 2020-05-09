import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  isocode: string;
  isodesc: string;
  containersize: string;
  containertype: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    isocode: 'ABC123',
    isodesc: 'Mini',
    containersize: 'Small',
    containertype: 'A Type',
    status: 'Active',
  },
  {
    isocode: 'ABC123',
    isodesc: 'Mini',
    containersize: 'Small',
    containertype: 'A Type',
    status: 'Active',
  },
  {
    isocode: 'ABC123',
    isodesc: 'Mini',
    containersize: 'Small',
    containertype: 'A Type',
    status: 'Active',
  },
  {
    isocode: 'ABC123',
    isodesc: 'Mini',
    containersize: 'Small',
    containertype: 'A Type',
    status: 'Active',
  },
  {
    isocode: 'ABC123',
    isodesc: 'Mini',
    containersize: 'Small',
    containertype: 'A Type',
    status: 'Active',
  },
  {
    isocode: 'ABC123',
    isodesc: 'Mini',
    containersize: 'Small',
    containertype: 'A Type',
    status: 'Active',
  },
];

@Component({
  selector: 'app-iso',
  templateUrl: './iso.component.html',
  styleUrls: ['./iso.component.scss'],
})
export class IsoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selected = 'option2';

  displayedColumns: string[] = [
    'isocode',
    'isodesc',
    'containersize',
    'containertype',
    'status',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
