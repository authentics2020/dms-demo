import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  vendorcode: string;
  vendorname: string;
  vendortype: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {vendorcode: 'ABC123', vendorname: 'Sudheer', vendortype: 'cash', status: 'Active'},
];

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selected = 'option2';

  displayedColumns: string[] = ['vendorcode', 'vendorname', 'vendortype', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
