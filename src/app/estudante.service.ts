import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTES } from './mock-estudantes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private messageService: MessageService) { }

  getEstudantes(): Observable<Estudante[]> {
    const estudantes = of(ESTUDANTES);
    this.messageService.add('EstudanteService: fetched estudantes');
    return estudantes;
  }
}
