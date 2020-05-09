import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  code: string;
  description: string;
  status: string;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    code: 'ABC123',
    description: 'Sudheer',
    grade: 'Grade 1',
    status: 'Active',
  },
];

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss'],
})
export class CommodityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selected = 'option2';

  displayedColumns: string[] = ['code', 'description', 'grade', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
