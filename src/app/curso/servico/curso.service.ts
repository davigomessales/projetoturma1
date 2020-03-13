import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Curso } from './Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  pesquisar(nome) {
    return this.http.get(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/" + nome);
  }

  incluir(curso: Curso){
    return this.http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/incluir", curso);
  }

}

