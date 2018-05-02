import { Component } from '@angular/core';

@Component({
  selector: 'navbar-ludi',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class navComponent {
  correo  = 'informes@ludi.com.mx';
  numero = '55 5545 7272';
  

  navInfo:any = [
    {active: true, navElement: 'INICIO'},
    {active: true, navElement:'PROMOCIONES'},
    {active: false, navElement:'CHECK UPS'},
    {active: true, navElement:'EMPRESAS'},
    {active: true, navElement:'NOSOTROS'},
    {active: true, navElement:'BLOG'},
    {active: true, navElement:'CONTACTO'}
  ];

  navInfoDrow:any = [
    {dropdownElement:'PREVENCION'},
    {dropdownElement:'¿QUÉ ES UN CHECK UPS'},
    {dropdownElement:'CHECK UP EMPRESARIAL'},
    {dropdownElement:'CHECK UP INTEGRAL'},
    {dropdownElement:'CHECK UP PLUS'},
    {dropdownElement:'CHECK UP GENETEST'},
    {dropdownElement:'CHECK UP ESPECIALIZADO'}

  ];

}
