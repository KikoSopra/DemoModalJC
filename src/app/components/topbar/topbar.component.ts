import { Component, OnInit } from '@angular/core';

interface Languages {
  name: string;
  value: string;
  flag: string;
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  languages!: Languages[];

  selectedlLanguage!: Languages;

  constructor() {
    this.languages = [
      { name: 'SPANISH', value: 'es-ES', flag: '../../../assets/img/ES.svg' },
      { name: 'ENGLISH', value: 'en-GB', flag: '../../../assets/img/GB.svg' },
      { name: 'FRENCH', value: 'fr-FR', flag: '../../../assets/img/FR.svg' },
      { name: 'ROMANIAN', value: 'rm-RM', flag: '../../../assets/img/RO.svg' },
      {
        name: 'PORTUGUESE',
        value: 'po-PT',
        flag: '../../../assets/img/PT.svg',
      },
      {
        name: 'ITALIAN',
        value: 'it-IT',
        flag: '../../../assets/img/IT.svg',
      },
    ];
  }

  ngOnInit(): void {}
}
