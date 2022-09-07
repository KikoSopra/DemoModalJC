import { Component, OnInit } from '@angular/core';

import { Customer, Representative } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-boton3',
  templateUrl: './boton3.component.html',
  styleUrls: ['./boton3.component.css'],
  providers: [MessageService],
})
export class Boton3Component implements OnInit {
  display: boolean = false;
  name!: string;
  country!: string;
  agent!: string;
  balance!: number;
  customers!: Customer[];
  selectedCustomer!: Customer;
  representatives!: Representative[];
  statuses!: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  constructor(
    private config: PrimeNGConfig,
    private messageService: MessageService,
    private dataService: DataService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.config.ripple = true;
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach((customer) => (customer.date = new Date()));
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];

    this.config.setTranslation({
      startsWith: 'Empieza con',
      contains: 'Contiene',
      notContains: 'No contiene',
      endsWith: 'Acaba en',
      equals: 'Igual',
      notEquals: 'No igual',
      noFilter: 'Sin filtro',
      lt: 'Menor que',
      lte: 'Menor o igual a',
      gt: 'Mayor que',
      gte: 'Mayor o igual a',
      is: 'Es',
      isNot: 'No es',
      before: 'Antes',
      after: 'Despues',
      dateIs: 'La fecha es',
      dateIsNot: 'La fecha NO es',
      dateBefore: 'Anterior a',
      dateAfter: 'Posterior a',
      clear: 'Limpiar',
      apply: 'Aplicar',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Añadir filtro',
      removeRule: 'Eliminar filtro',
      accept: 'Sí',
      reject: 'No',
      choose: 'Elegir',
      upload: 'Subir',
      cancel: 'Cancelar',
      dayNames: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
      ],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      dateFormat: 'dd/mm/yy',
      firstDayOfWeek: 0,
      today: 'Hoy',
      weekHeader: 'Sem',
      weak: 'Débil',
      medium: 'Medio',
      strong: 'Fuerte',
      passwordPrompt: 'Introduce una contraseña',
      emptyMessage: 'No hay resultados',
      emptyFilterMessage: 'No hay resultados',
    });
  }

  showResponsiveDialog() {
    console.log(this.display);
    this.display = true;
    console.log(this.display);
  }

  hideResponsiveDialog() {
    console.log(this.display);
    this.display = false;
    console.log(this.display);
  }

  clear(table: Table) {
    table.clear();
  }

  onRowSelect(event: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'Customer Selected',
      detail: event.data.name
    });
    console.log(event.data);
    this.name = event.data.name;
    this.country = event.data.country.name;
    this.agent = event.data.representative.name;
    this.balance = event.data.balance;
    this.hideResponsiveDialog();
  }

  onRowUnselect(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Customer Unselected',
      detail: event.data.name,
    });
  }
}
