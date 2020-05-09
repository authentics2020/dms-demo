import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  code: string;
  description: string;
  exchangerate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {code: 'ABC123', description: 'Sudheer', exchangerate: '0.30', status: 'Active'},
];

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected = 'option2';

  displayedColumns: string[] = ['code', 'description', 'exchangerate', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
