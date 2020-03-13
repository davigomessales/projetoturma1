import { CursoService } from './servico/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './servico/Curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso = new Curso;
  listaCursos: Curso[] = [];

  constructor(
    private _cursoServico: CursoService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this._cursoServico.pesquisar(this.curso.nome).subscribe(
      (data: Curso[]) => {
        this.listaCursos = data;
      }
    );
  }

  exibirAlerta() {
    this._cursoServico.pesquisar(this.curso.nome).subscribe(
      (data: Curso[]) => {
        this.listaCursos = data;
      }
    );

  }

  incluir() {
    this._router.navigate(['/curso/incluir']);
  }

}
