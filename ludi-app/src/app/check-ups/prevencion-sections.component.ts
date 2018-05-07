import { Component } from '@angular/core';

@Component({
  selector: 'prevention-sections-ludi',
  templateUrl: './prevencion-sections.component.html',
  styleUrls:['./prevencion-sections.component.css']
})

export class prevencionSectionsComponent {
  diagnostico = '¿QUÉ ES UN DIAGNÓSTICO PREVENTIVO?';
  titulo = '¿POR QUÉ Y CADA CUÁNDO?';
  detalle = 'El Check Up sirve para saber que estamos tan sanos como nos sentimos y supone una inmensa fuente de tranquilidad. Pero también es una herramienta para detectar enfermedades de manera oportuna antes de que el problema se vuelva serio. Sin importar la razón particular de cada persona, lo cierto es que la salud es lo más valioso que poseemos como seres humanos. El que podamos realizar nuestras actividades normales día con día, disfrutar de nuestros seres queridos y de los placeres de la vida depende en mayor o menor medida de nuestro estado de salud.';
  detalleDos = 'Las normas internacionales de salud recomiendan realizarnos un Check Up cada dos años en individuos menores de 40 años y cada año a partir de esta misma edad.';
  cultura = 'LA CULTURA DE LA PREVENCIÓN';
}
