import { AlunoService } from './servico/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './servico/Aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();
  listaAlunos: Aluno[] = [];

  constructor(
    private alunoServico: AlunoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){
    this.alunoServico.consultar(this.aluno.nome).subscribe(
      (data: Aluno[]) => {
        this.listaAlunos = data;
        console.log(data);
      }
    );
  }
  exibirAlerta() {
    this.alunoServico.consultar(this.aluno.nome).subscribe(
      (data: Aluno[]) => {
        this.listaAlunos = data;
      }
    );
    //console.log(JSON.stringify(this.listaAlunos));
  }
incluir() {
  this.router.navigate(['/aluno/incluir']);
}
}
