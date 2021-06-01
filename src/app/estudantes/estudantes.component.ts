import { Component, OnInit } from '@angular/core';
import { Estudante } from './../estudante';
import { EstudanteService } from './../estudante.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudantes: Estudante[] = [];

  constructor(private estudanteService: EstudanteService) {}

  ngOnInit() {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
    .subscribe(estudantes => this.estudantes = estudantes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.estudanteService.addEstudante({ name } as Estudante)
      .subscribe(estudante => {
        this.estudantes.push(estudante);
      });
  }

  delete(estudante: Estudante): void {
    this.estudantes = this.estudantes.filter(h => h !== estudante);
    this.estudanteService.deleteEstudante(estudante.id).subscribe();
  }

}