import { Component } from '@angular/core';

@Component({
  selector: 'section-two-ludi',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})

export class sectionTwoComponent {
  priInf = '¿YA TE HICISTE UN CKECK UP?';
  secInf = 'Cuando te haces un Check Up intercambias unas horas de tu tiempo por años con la gente que más quieres, haciendo lo que más disfrutas.';
  treInf = '¿POR QUÉ ES IMPORTANTE HACERSE UN CHECK UP MÉDICO INTEGRAL?';

  liInfo:any = [
    {liElement:'La detección temprana de enfermedades para proporcionar las recomendaciones y orientaciones para su manejo, control y tratamiento oportuno.'},
    {liElement:'Identificar factores de riesgo que puedan propiciar el desarrollo a futuro de enfermedades crónico-degenerativas aún no presentes.'},
    {liElement:'Diseñar las medidas necesarias para mantener y mejorar la calidad de vida.'},
    {liElement:'Es dinámico y confiable. Te da tranquilidad.'},
    {liElement:'Protocolos diseñados de acuerdo a tu edad y género.'}

  ];
}
