export class Question {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  edad: string;
  genero: string;
  integral: boolean;
  plus: boolean;
  especialidad:boolean;
  genetest:boolean;
  empresarial:boolean;
  comentario:string;

  constructor(
    nombre: string,
    empresa: string,
    correo: string,
    telefono: string,
    edad: string,
    genero: string,
    integral: boolean,
    plus: boolean,
    especialidad:boolean,
    genetest:boolean,
    empresarial:boolean,
    comentario:string
  ){
    this.nombre = nombre;
    this.empresa = empresa;
    this.correo = correo;
    this.telefono = telefono;
    this.edad = edad;
    this.genero = genero;
    this.integral = integral;
    this.plus = plus;
    this.especialidad = especialidad;
    this.genetest = genetest;
    this.empresarial = empresarial;
    this.comentario = comentario;
  }

}
