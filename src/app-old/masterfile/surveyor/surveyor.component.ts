import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  surveyorcode: string;
  surveyorname: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { surveyorcode: 'ABC123', surveyorname: 'Sudheer', status: 'Active' },
];

@Component({
  selector: 'app-surveyor',
  templateUrl: './surveyor.component.html',
  styleUrls: ['./surveyor.component.scss'],
})
export class SurveyorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  selected = 'option2';

  displayedColumns: string[] = ['surveyorcode', 'surveyorname', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
