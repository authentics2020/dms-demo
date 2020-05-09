import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  roles: Role[] = [
    { value: 'admin-0', viewValue: 'Admin' },
    { value: 'admin-1', viewValue: 'Truck Driver' },
    { value: 'admin-2', viewValue: 'Surveyer' },
  ];

  displayedColumns: string[] = [
    'position',
    'name',
    'username',
    'email',
    'role',
  ];
  token: any;
  table_data: any = {};
  pages: any = [];
  page = 1;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  search = '';
  search_data = '';
  search_falg = false;
  spinner: boolean = true;
  applyFilter(event: Event, column: any) {
    this.spinner = true;
    const filterValue = (event.target as HTMLInputElement).value;
    this.search = column;
    this.search_data = filterValue.trim().toLowerCase();
    // let flag = false;
    if (this.search_data) {
      this.search_falg = true;
    }
    this.get_data(this.search, this.search_falg, 0, this.search_data);
  }

  constructor(private api: ApiService, private storage: StorageService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.token = this.storage.get_value('token');
    this.get_data(this.search, this.search_falg, 0, this.search_data);
  }

  setpage(p: any) {
    console.log();
    this.spinner = true;
    this.page = p;
    this.get_data(
      this.search,
      this.search_falg,
      this.page - 1,
      this.search_data
    );
    // this.get_data("", false, this.page-1, '');
  }

  get_data(search: any, search_flag: any, page: any, search_data: any): void {
    search = search ? search : 'email';
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
      length: 5,
      order: [
        {
          column: 0,
          dir: 'desc',
        },
      ],

      start: page * 5,
    };
    console.log(input_data);

    this.api.user_list(input_data, this.token).subscribe(
      (data) => {
        console.log(data);
        this.table_data = data;
        let round = Math.ceil(this.table_data.recordsFiltered / 5);
        this.pages = [];
        for (let i = 1; i <= round; i++) {
          this.pages[i - 1] = i;
        }
        this.spinner = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

export interface Role {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  position: number;
  name: string;
  username: string;
  email: string;
  role: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 2,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 3,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 4,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 5,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 6,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 7,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 8,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },
  {
    position: 9,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 10,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 11,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 12,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 13,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 14,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 15,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 16,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 17,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 18,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 19,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 20,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 21,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 22,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 23,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 24,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },
  {
    position: 25,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 26,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 27,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 28,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 29,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 30,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },

  {
    position: 31,
    name: 'Richard',
    username: 'richie',
    email: 'test@test.com',
    role: 'Admin',
  },
  {
    position: 32,
    name: 'Bruce Lee',
    username: 'bruce',
    email: 'bruce@test.com',
    role: 'Surveyer',
  },
];
