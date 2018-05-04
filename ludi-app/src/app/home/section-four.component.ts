import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { Directive, Input } from '@angular/core';
@Component({
  selector: 'section-four-ludi',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.css']
})

export class sectionFourComponent {
  priInf = 'EMPRESAS';
  secInf = 'Ludi al servicio de empresas';

  priDiv = 'CHECK UPS PARA TU EQUIPO DE TRABAJADORES';
  secDiv = 'Toda persona que forma parte de un equipo de trabajo, aspira a sentirse apreciado y atendido por su empresa. La presencia de beneficios que buscan la mejora de la salud y el bienestar de los trabajadores se traduce en mayor lealtad y mejor ambiente laboral. Además, cuando tus colaboradores están sanos también aumenta la productividad.';


  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;




}
