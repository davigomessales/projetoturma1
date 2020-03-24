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
    private router: Router,
    private cursoService: CursoService,
    private routeActivated: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.nomeCurso = this.routeActivated.snapshot.params.id;
      if (this.nomeCurso != null) {
        this.operacao = 'Alterar';
        this.cursoService.pesquisar(this.nomeCurso).subscribe(
          data => {
            this.curso = (data as Curso[])[0];
          }
        );
      }
    }

  alterar() {
    this.cursoService.alterar(this.curso).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/curso']);
      }
    );
  }
  salvar() {
    console.log(this.curso);
    this.cursoService.incluir(this.curso).subscribe(
      retorno => {
        console.log(retorno)
        alert(retorno['mensagem']);
        this.router.navigate(['/curso']);
      }
    );

  }

  voltar() {
    this.router.navigate(['/curso']);
  }


}
