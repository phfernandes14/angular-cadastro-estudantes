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
  selectedEstudante?: Estudante;

  constructor(private estudanteService: EstudanteService, private messageService: MessageService) {}


  ngOnInit() {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }

  onSelect(estudante: Estudante): void {
    this.selectedEstudante = estudante;
    this.messageService.add(`EstudantesComponent: Selected Estudante RA=${estudante.RA}`);
  }
}