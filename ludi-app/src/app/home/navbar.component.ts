import { Component } from '@angular/core';

@Component({
  selector: 'navbar-ludi',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class navComponent {
    correo  = 'informes@ludi.com.mx';
    numero = '55 5545 7272';

    inicio =  'INICIO';
    prom = 'PROMOCIONES';
    check = 'CHECK UPS';
    empre = 'EMPRESAS';
    nos = 'NOSOTROS';
    blog = 'BLOG';
    contact = 'CONTACTO';
    preven = 'PREVENCION';
    que = '¿QUÉ ES UN CHECK UPS';
    empresarial = 'CHECK UP EMPRESARIAL';
    integral = 'CHECK UP INTEGRAL';
    plus = 'CHECK UP PLUS';
    gene = 'CHECK UP GENETEST';
    espe = 'CHECK UP ESPECIALIZADO';

}
