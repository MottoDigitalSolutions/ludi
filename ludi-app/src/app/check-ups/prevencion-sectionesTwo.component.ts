import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './prevencion-formModel.component';

@Component({
  selector: 'prevention-sectionsTwo-ludi',
  templateUrl: './prevencion-sectionsTwo.component.html',
  styleUrls:['./prevencion-sectionsTwo.component.css']
})

export class prevencionSectionsTwoComponent {
  integral:boolean = false;
  plus:boolean = false;
  especialidad:boolean = false;
  genetest:boolean = false;
  empresarial:boolean = false;

  IntegralColor:string = '#ccc';
  PlusColor:string = '#ccc';
  EspecialidadColor:string = '#ccc';
  GenetestColor:string = '#ccc';
  EmpresarialColor:string = '#ccc';

  IntegralFunc(){
    if(this.integral === false){
      this.integral = true;
      this.IntegralColor = '#f61';
    }else{
      this.integral = false;
      this.IntegralColor = '#ccc';
    }
  }
  PlusFunc(){
    if(this.plus === false){
      this.plus = true;
      this.PlusColor = '#f61';
    }else{
      this.plus = false;
      this.PlusColor = '#ccc';
    }
  }
  EspecialidadFunc(){
    if(this.especialidad === false){
      this.especialidad = true;
      this.EspecialidadColor = '#f61';
    }else{
      this.especialidad = false;
      this.EspecialidadColor = '#ccc';
    }
  }
  GenetestFunc(){
    if(this.genetest === false){
      this.genetest = true;
      this.GenetestColor = '#f61';
    }else{
      this.genetest = false;
      this.GenetestColor = '#ccc';
    }
  }
  EmpresarialFunc(){
    if(this.empresarial === false){
      this.empresarial = true;
      this.EmpresarialColor = '#f61';
    }else{
      this.empresarial = false;
      this.EmpresarialColor = '#ccc';
    }
  }

  onSubmit(Form: NgForm){
    const q = new Question(
      Form.value.nombre,
      Form.value.empresa,
      Form.value.correo,
      Form.value.telefono,
      Form.value.edad,
      Form.value.genero,
      this.integral,
      this.plus,
      this.especialidad,
      this.genetest,
      this.empresarial,
      Form.value.comentario
    );

    console.log(q);
  }


}
