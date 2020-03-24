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
  selecionado: Aluno;

  constructor(
    private alunoServico: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.alunoServico.consultar(this.aluno.nome).subscribe(
      (data: Aluno[]) => {
        this.listaAlunos = data;
        console.log(data);
      }
    );
  }
  selecionar(valor) {
    this.selecionado = valor;
  }
  exibirAlerta() {
    this.alunoServico.consultar(this.aluno.nome).subscribe(
      (data: Aluno[]) => {
        this.listaAlunos = data;
      }
    );
  }
  incluir() {
    this.router.navigate(['/aluno/incluir']);
  }

  remover() {
    this.alunoServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }
  alterar() {
    this.router.navigate(['/aluno/alterar/'+ this.selecionado.nome]);
  }
}
