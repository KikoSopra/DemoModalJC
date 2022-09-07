import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-boton2',
  templateUrl: './boton2.component.html',
  styleUrls: ['./boton2.component.css'],
})
export class Boton2Component implements OnInit {
  display: boolean = false
  name: string = '';
  country: string = '';
  agent: string = '';
  balance!: number;

  constructor(
    private primengConfig: PrimeNGConfig,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  showResponsiveDialog() {
    this.display = true;
    // return this.dataService.visible = true;
  }

  // hideDialog() {
  //   this.display = false;
  // }

  cargarDatos() {
    this.name = this.dataService.name;
    this.country = this.dataService.country;
    this.agent = this.dataService.agent;
    this.balance = this.dataService.balance;
  }
}
