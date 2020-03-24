import { AlunoComponent } from './aluno/aluno.component';
import { CursoManterComponent } from './curso/curso-manter/curso-manter.component';
import { CursoComponent } from './curso/curso.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunoManterComponent } from './aluno/aluno-manter/aluno-manter.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'curso',
    component: CursoComponent,
    pathMatch: 'full'
  },
  {
    path: 'curso/incluir',
    component: CursoManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'curso/alterar/:id',
    component: CursoManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'aluno',
    component: AlunoComponent,
    pathMatch: 'full'
  },
  {
    path: 'aluno/incluir',
    component: AlunoManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'aluno/alterar/:id',
    component: AlunoManterComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
