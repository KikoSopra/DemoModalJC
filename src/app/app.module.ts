import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProductService } from './product.service';
import { TablaComponent } from './components/tabla/tabla.component';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BotonComponent } from './components/boton/boton.component';
import { Tabla2Component } from './components/tabla2/tabla2.component';
import { Boton2Component } from './components/boton2/boton2.component';
import { CustomerService } from './customer.service';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Boton3Component } from './components/boton3/boton3.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    TopbarComponent,
    BotonComponent,
    Tabla2Component,
    Boton2Component,
    Boton3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    ToastModule,
    DropdownModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    InputTextModule,
    FormsModule
  ],
  providers: [ProductService, CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
