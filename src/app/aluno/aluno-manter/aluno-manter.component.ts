import { AlunoService } from './../servico/aluno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../servico/Aluno';

@Component({
  selector: 'app-aluno-manter',
  templateUrl: './aluno-manter.component.html',
  styleUrls: ['./aluno-manter.component.css']
})
export class AlunoManterComponent implements OnInit {

  aluno: Aluno = new Aluno();
  nomeAluno: string = '';
  operacao: string = 'Incluir';

  constructor(
    private router: Router,
    private alunoService: AlunoService,
    private routeActivated: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.nomeAluno = this.routeActivated.snapshot.params.id;
    if (this.nomeAluno != null) {
      this.operacao = 'Alterar';
      this.alunoService.consultar(this.nomeAluno).subscribe(
        data => {
          this.aluno = (data as Aluno[])[0];
        }
      );
    }
  }

  alterar() {
    this.alunoService.alterar(this.aluno).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/aluno']);
      }
    );
  }
  salvar() {
    console.log(this.aluno);
    this.alunoService.incluir(this.aluno).subscribe(
      retorno => {
        console.log(retorno)
        alert(retorno['mensagem']);
        this.router.navigate(['/aluno']);
      }
    );
  }

}
