import { CursoService } from './servico/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './servico/Curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso;

  constructor(private cursoServico: CursoService) { }

  ngOnInit(): void {
  }

  exibirAlerta() {
    this.cursoServico.pesquisar(this.curso.nome).subscribe(
      data => {
        console.log(data)
      }
    );

  }

}
