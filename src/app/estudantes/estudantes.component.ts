import { Component, OnInit } from '@angular/core';
import { Estudante } from './../estudante';


@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudante: Estudante = {
    RA: 1,
    name: 'Pedro Fernandes',
    age: 21,
    course:'Análise e Desenvolvimento de Sistemas',
    institution:'Fatec Itu'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
