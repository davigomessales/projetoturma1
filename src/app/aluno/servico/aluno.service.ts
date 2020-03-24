import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  consultar(nome: string){
    return this.http.get(
      'https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/aluno/consultar/'+ nome);
    }
}
