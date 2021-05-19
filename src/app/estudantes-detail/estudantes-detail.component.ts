import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudantes-detail',
  templateUrl: './estudantes-detail.component.html',
  styleUrls: ['./estudantes-detail.component.css']
})
export class EstudantesDetailComponent implements OnInit {

  @Input() estudante?: Estudante;
  constructor() { }

  ngOnInit(): void {
  }

}
