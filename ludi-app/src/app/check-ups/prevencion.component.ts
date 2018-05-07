import { Component } from '@angular/core';

@Component({
  selector: 'prevention-ludi',
  templateUrl: './prevencion.component.html',
  styles: [`
      .fondo{
        background-size: 1920px auto;
        background-image: url(http://ludi.com.mx/wp-content/uploads/2017/11/titulo-prevencion.jpg);
        height: 212px;
        background-color: #f6f6f6;
        background-position: center 0;
        background-repeat: no-repeat;
        padding-top:60px;
      }
      .fondo h1{
        text-align:center;
        font-family: 'Open Sans Condensed',sans-serif;
        font-weight:600;
        color:#fff;
        font-size:52px;
      }
    `]
})

export class prevencionComponent {

}
