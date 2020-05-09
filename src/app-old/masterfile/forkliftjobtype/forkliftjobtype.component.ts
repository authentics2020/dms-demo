import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  hauliercode: string;
  hauliername: string;
  dcgbillingtype: string;
  creditlimit: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    hauliercode: 'ABC123',
    hauliername: 'Sudheer',
    dcgbillingtype: 'cash',
    creditlimit: 20000,
    status: 'Active',
  },
  {
    hauliercode: 'ABC124',
    hauliername: 'Realpage',
    dcgbillingtype: 'creditcard',
    creditlimit: 10000,
    status: 'Active',
  },
];

@Component({
  selector: 'app-forkliftjobtype',
  templateUrl: './forkliftjobtype.component.html',
  styleUrls: ['./forkliftjobtype.component.scss'],
})
export class ForkliftjobtypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'hauliercode',
    'hauliername',
    'dcgbillingtype',
    'creditlimit',
    'status',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
