import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-selectdropoff',
  templateUrl: './selectdropoff.component.html',
  styleUrls: ['./selectdropoff.component.scss'],
})
export class SelectdropoffComponent implements OnInit {
  displayedColumns: string[] = [
    'action',
    'containerno',
    'containerstatus',
    'customer',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface SelectDropOff {
  action: string;
  containerno: string;
  containerstatus: string;
  customer: string;
}

const ELEMENT_DATA: SelectDropOff[] = [
  {
    action: 'Bill',
    containerno: 'CSQ2980190',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980191',
    containerstatus: 'AV',
    customer: 'PANASONIC',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980192',
    containerstatus: 'AV',
    customer: 'BENQ',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980193',
    containerstatus: 'AV',
    customer: 'VUE',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980194',
    containerstatus: 'AV',
    customer: 'MI',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980195',
    containerstatus: 'AV',
    customer: 'SAMSUNG',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980196',
    containerstatus: 'AV',
    customer: 'BPL',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980197',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980198',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980199',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980200',
    containerstatus: 'AV',
    customer: 'PANASONIC',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980201',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980190',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980191',
    containerstatus: 'AV',
    customer: 'PANASONIC',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980192',
    containerstatus: 'AV',
    customer: 'BENQ',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980193',
    containerstatus: 'AV',
    customer: 'VUE',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980194',
    containerstatus: 'AV',
    customer: 'MI',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980195',
    containerstatus: 'AV',
    customer: 'SAMSUNG',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980196',
    containerstatus: 'AV',
    customer: 'BPL',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980197',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980198',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980199',
    containerstatus: 'AV',
    customer: 'SONY',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980200',
    containerstatus: 'AV',
    customer: 'PANASONIC',
  },
  {
    action: 'Bill',
    containerno: 'CSQ2980201',
    containerstatus: 'AV',
    customer: 'SONY',
  },
];
