import { Component } from '@angular/core';

@Component({
  selector: 'section-five-ludi',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.css']
})

export class sectionFiveComponent {
  slides = [
    {text: "Estamos satisfechos con el servicio que nos presta LUDI en los Check ups, estudios Ginecológicos, y de ingreso..."},
    {text: "Iberdrola reconoce el prestigio que tiene LUDI; y los servicios de medicina preventiva que ofrecen"},
    {text: "Un gran apoyo en el Área de Salud Ocupacional, el cual incluye los servicios de Gabinete, Rx, Diagnóstico, entre otros - CHEP"},
    {text: "Deseo resaltar el profesionalismo y atención de sus colaboradores. Calidad y calidez de las instalaciones. - IPADE"},
    {text: "Me permito recomendar muy ampliamente a Ludi como empresa responsable de sus servicios, honrosa, recta e intachable. - BASF"},
    {text: "Wal-Mart reconoce el prestigio que tiene Ludi y los servicios de medicina preventiva que ofrece. <br> - Walmart"},
    {text: "Quiero felicitar a Ludi y a la Dra. Marcela Madrazo por el profesionalismo y calidad mostrada en los Check Ups realizados... - RadioShack"},
    {text: "Para Ludi el activo más importante sin duda alguna es el ser humano y en consecuencia su salud. - PROSA"},
    {text: "Un proveedor de calidad, honesto, oportuno, y responsable. Sus resultados siempre son Confiables. <br> - Gemalto"},
    {text: "Un proveedor de calidad, honesto, oportuno, y responsable. Sus resultados siempre son Confiables. <br> - Gemalto"},
  ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};


  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
}
