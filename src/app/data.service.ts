import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  name: string = '';
  country: string = '';
  agent: string = '';
  balance!: number;
  visible: boolean = false

  constructor() {}
}
