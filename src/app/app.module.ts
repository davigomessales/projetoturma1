import { CursoService } from './curso/servico/curso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CursoManterComponent } from './curso/curso-manter/curso-manter.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoManterComponent } from './aluno/aluno-manter/aluno-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoComponent,
    LayoutComponent,
    CursoManterComponent,
    AlunoComponent,
    AlunoManterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
