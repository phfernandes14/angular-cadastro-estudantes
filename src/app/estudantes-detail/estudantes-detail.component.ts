import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from '../estudante';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EstudanteService} from '../estudante.service';

@Component({
  selector: 'app-estudantes-detail',
  templateUrl: './estudantes-detail.component.html',
  styleUrls: ['./estudantes-detail.component.css']
})
export class EstudantesDetailComponent implements OnInit {

  estudante: Estudante | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private estudanteService: EstudanteService,
    private location: Location
  ) {}

 
  ngOnInit(): void {
    this.getEstudante();
  }
 
  
  getEstudante(): void {
    const RA = Number(this.route.snapshot.paramMap.get('RA'));
    this.estudanteService.getEstudante(RA)
      .subscribe(estudante => this.estudante = estudante);
  }
  goBack(): void {
    this.location.back();
  }

}
