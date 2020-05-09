import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  set_value(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  get_value(key: string): any {
    return localStorage.getItem(key);
  }
}
