import { CursoService } from './../servico/curso.service';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Curso } from '../servico/Curso';

@Component({
  selector: 'app-curso-manter',
  templateUrl: './curso-manter.component.html',
  styleUrls: ['./curso-manter.component.css']
})
export class CursoManterComponent implements OnInit {

  curso: Curso = new Curso();
  constructor(
    private _router: Router,
    private _cursoService: CursoService
    ) { }

  ngOnInit(): void {
  }

  salvar(){
    console.log(this.curso);
    this._cursoService.incluir(this.curso).subscribe(
      retorno =>{
        console.log(retorno)
        alert(retorno['mensagem'])
        this._router.navigate(['/curso']);
      }
    );
    
  }

  voltar(){
    this._router.navigate(['/curso']);
  }


}
