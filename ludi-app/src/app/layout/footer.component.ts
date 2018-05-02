import { Component } from '@angular/core';

@Component({
  selector: 'footer-ludi',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class footerComponent {
  num = '55 5545 1509';
  mail = 'informes@ludi.com.mx';
  direction = 'A. Musset 335 Polanco, Polanco III Secc, 11550 CDMX, Mexico';
  about = 'En LUDI Diagnóstico Integral creemos en futuros felices, en envejecer sanos y disfrutar todo lo que esta vida única nos ofrece. Estamos convencidos de que un Check Up de manera regular, fomenta la salud y el bienestar, y mejora tu calidad de vida.';
  linkInfo:any = [
    {linkElement:'Prevencion'},
    {linkElement:'¿Que es prevencion?'},
    {linkElement:'Check Up Empresarial'},
    {linkElement:'Check Up Integral'},
    {linkElement:'Check Up Plus'},
    {linkElement:'Check Up Genetest'},
    {linkElement:'Check Up Especialidad'}
  ];
}
