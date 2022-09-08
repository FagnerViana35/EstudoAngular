import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindind',
  templateUrl: './data-bindind.component.html',
  styleUrls: ['./data-bindind.component.css']
})
export class DataBindindComponent implements OnInit {

  url:string = 'http://fagner.viana';

  nomeDoCurso: string ='Angular';

  getValor(a:number, b:number){
    return a + b;
  }
  urlImagem: string = 'http://lorempixel.com.br/500/400/?5859'
  cursoAngular: boolean = true;
  valorAtual : string = '';
  valorSalvo: string ='';
  isMouseOver: boolean = false;
  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  botaoClicado(){
    alert("Teste");
  }
  onKeyup(evento: KeyboardEvent){
    console.log(evento);
     this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  nome: string = '';

  pessoa: any = {
    name:'Fagner',
    age: 34
  }
  constructor() {

  }

  ngOnInit(): void {
  }

}
