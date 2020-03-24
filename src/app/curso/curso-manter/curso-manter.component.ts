import { CursoService } from './../servico/curso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Curso } from '../servico/Curso';

@Component({
  selector: 'app-curso-manter',
  templateUrl: './curso-manter.component.html',
  styleUrls: ['./curso-manter.component.css']
})
export class CursoManterComponent implements OnInit {

  curso: Curso = new Curso();
  nomeCurso: string = '';
  operacao: string = 'Incluir';

  constructor(
    private _router: Router,
    private _cursoService: CursoService,
    private _routeActivated: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.nomeCurso = this._routeActivated.snapshot.params.id;
      if(this.nomeCurso != null){
        this.operacao = 'Alterar';
        this._cursoService.pesquisar(this.nomeCurso).subscribe(
          data => {
            this.curso = (<Curso[]>data)[0];
          }
        );
      }
    }

  alterar(){
    this._cursoService.alterar(this.curso).subscribe(
      data => {
        alert(data['mensagem']);
        this._router.navigate(['/curso']);
      }
    );
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
