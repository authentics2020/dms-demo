import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';

export interface PeriodicElement {
  sno: number;
  customercode: string;
  customername: string;
  email: string;
  postcode: number;
  addressline: string;
  state: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    sno: 1,
    customercode: 'ABC123',
    customername: 'Sudheer',
    email: 'sudheer@test.com',
    addressline: 'Hyderabad',
    postcode: 600012,
    state: 'Telangana',
    status: 'Active',
  },
];

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss'],
})
export class CustomerlistComponent implements OnInit {
  token: any;
  data_table: any = {};
  pages = [1, 2, 3];
  page = 1;

  constructor(private api: ApiService, private storage: StorageService) {}

  ngOnInit(): void {
    this.token = this.storage.get_value('token');
    this.customer_list(0, '', '', false);
  }

  displayedColumns: string[] = [
    'sno',
    'customercode',
    'customername',
    'email',
    'addressline1',
    'addressline2',
    'postcode',
    'state',
    'status',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  search = '';
  search_data = '';
  search_falg = false;
  spinner: boolean = true;
  length: any = 10;
  applyFilter(event: Event, column: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.spinner = true;
    this.search = column;
    this.search_data = filterValue.trim().toLowerCase();
    // let flag = false;
    if (this.search_data) {
      this.search_falg = true;
    }
    this.page = 1;
    // this.get_data(this.search, this.search_falg, 0, this.search_data);
    this.customer_list(0, this.search, this.search_data, this.search_falg);
  }

  customer_list(
    p: any,
    search_column: any,
    search_value: any,
    search_falg: any
  ) {
    let search = search_column ? search_column : 'id';
    let input_data = {
      columns: [
        {
          data: search,
          orderable: true,
          search: {
            regex: true,
            value: search_value,
          },
          searchable: search_falg,
        },
      ],
      draw: 0,
      length: this.length,
      order: [
        {
          column: 0,
          dir: 'desc',
        },
      ],

      start: p * this.length,
    };
    console.log(input_data);
    this.api.customer_list(input_data, this.token).subscribe(
      (data) => {
        console.log(data);
        this.data_table = data;
        let round = Math.ceil(this.data_table.recordsFiltered / 2);
        this.pages = [];
        for (let i = 1; i <= round; i++) {
          this.pages[i - 1] = i;
        }
        this.pages = this.pages.length > 1 ? this.pages : [];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setpage(p: any) {
    this.spinner = true;
    console.log(p);
    this.page = p;
    this.customer_list(p - 1, '', '', false);
  }
}
