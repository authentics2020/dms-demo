import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  code: string;
  description: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { code: 'ABC123', description: 'Sudheer', status: 'Active' },
];

@Component({
  selector: 'app-vendortype',
  templateUrl: './vendortype.component.html',
  styleUrls: ['./vendortype.component.scss'],
})
export class VendortypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selected = 'option2';

  displayedColumns: string[] = ['code', 'description', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
