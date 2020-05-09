import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';
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
  token: any;
  length: any = 2;
  page: any = 1;
  table_data: any = {};
  search = '';
  search_data = '';
  search_falg = false;
  pages: any;
  spinner: boolean = false;
  constructor(private api: ApiService, private storage: StorageService) {}

  ngOnInit(): void {
    this.spinner = true;
    this.token = this.storage.get_value('token');
    this.get_iso_list('', false, this.page - 1, '');
  }

  selected = 'option2';

  displayedColumns: string[] = [
    'sno',
    'isocode',
    'isodesc',
    'containersize',
    'containertype',
    'status',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  setpage(p: any) {
    this.spinner = true;
    this.page = p;
    this.get_iso_list(
      this.search,
      this.search_falg,
      this.page - 1,
      this.search_data
    );
    // this.get_data("", false, this.page-1, '');
  }
  get_iso_list(search: any, search_flag: any, page: any, search_data: any) {
    search = search && search_data ? search : 'id';
    search_flag = search_data ? true : false;
    let input_data = {
      columns: [
        {
          data: search,
          orderable: true,
          search: {
            regex: true,
            value: search_data,
          },
          searchable: search_flag,
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

      start: page * this.length,
    };
    console.log(input_data);
    this.api.iso_list(input_data, this.token).subscribe(
      (data) => {
        console.log(data);
        this.table_data = data;
        let round = Math.ceil(this.table_data.recordsFiltered / this.length);
        this.pages = [];
        for (let i = 1; i <= round; i++) {
          this.pages[i - 1] = i;
        }
        this.spinner = false;
        if (this.pages.length <= 1) {
          this.pages = [];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  applyFilter(event: Event, column: any) {
    this.spinner = true;
    const filterValue = (event.target as HTMLInputElement).value;
    // this.spinner = true;
    this.search = column;
    this.search_data = filterValue.trim().toLowerCase();
    // let flag = false;
    if (this.search_data) {
      this.search_falg = true;
    }
    this.page = 1;
    this.get_iso_list(this.search, this.search_falg, 0, this.search_data);
  }
}
